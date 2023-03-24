import React, { FC, useState } from "react";
import { Button, Input } from "@mui/material";
import styles from "./AddCommentForm.module.scss";

const AddCommentForm: FC = () => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");

  const onAddComment = () => {
    setClicked(false);
    setText("");
  };

  return (
    <div className={styles.form}>
      <Input
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
