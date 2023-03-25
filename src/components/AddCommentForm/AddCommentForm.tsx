import React, { FC, useState } from "react";
import { Button, Input } from "@mui/material";
import styles from "./AddCommentForm.module.scss";
import { Api } from "@/services/api";
import { useAppSelector } from "@/redux/hooks";
import { selectUserData } from "@/redux/slices/user";
import { CommentItemType } from "@/services/api/types";

interface AddCommentFormId {
  postId: number;
  onSuccessAdded: (obj: CommentItemType) => void;
}
const AddCommentForm: FC<AddCommentFormId> = ({ postId, onSuccessAdded }) => {
  const [clicked, setClicked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [text, setText] = useState("");

  const onAddComment = async () => {
    try {
      setLoading(true);
      const comment = await Api().comment.createComment({ postId, text });
      onSuccessAdded(comment);
      setClicked(false);
      setText("");
    } catch (err) {
      console.warn("Comment error", err);
      alert("Ошибка при отправке комментария");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <Input
        disabled={isLoading}
        onFocus={() => setClicked(true)}
        onChange={(e) => setText(e.target.value)}
        value={text}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий"
        fullWidth
        multiline
        minRows={clicked ? 5 : 1}
      />
      {clicked && (
        <Button
          disabled={isLoading}
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};

export default AddCommentForm;
