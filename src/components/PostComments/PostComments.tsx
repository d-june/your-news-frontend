import React, { FC, useEffect, useState } from "react";
import { Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import AddCommentForm from "@/components/AddCommentForm/AddCommentForm";
import Comment from "@/components/Comment/Comment";
import { Api } from "@/services/api";
import { CommentItemType } from "@/services/api/types";
import { useAppSelector } from "@/redux/hooks";
import { selectUserData } from "@/redux/slices/user";

type Comment = {
  id: number;
  user: {
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    title: string;
  };
  createdAt: string;
};

interface PostCommentsProps {
  postId: number;
}

const PostComments: FC<PostCommentsProps> = ({ postId }) => {
  const userData = useAppSelector(selectUserData);
  const [activeTab, setActiveTab] = useState(0);
  const [comments, setComments] = useState<CommentItemType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const comments = await Api().comment.getAllComments(postId);
        setComments(comments);
      } catch (err) {
        console.warn("Fetch comments", err);
      }
    })();
  }, []);

  const onAddComment = (obj: CommentItemType) => {
    setComments((prev) => [...prev, obj]);
  };

  const onRemoveComment = (id: number) => {
    setComments((prev) => prev.filter((obj) => obj.id !== id));
  };

  return (
    <Paper elevation={0}>
      <Typography variant="h6">42 комментария</Typography>
      <Tabs
        onChange={(_, newValue) => setActiveTab(newValue)}
        value={activeTab}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="По популярности" />
        <Tab label="По порядку" />
      </Tabs>
      <Divider />
      {userData && (
        <AddCommentForm postId={postId} onSuccessAdded={onAddComment} />
      )}

      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          user={comment.user}
          text={comment.text}
          createdAt={comment.createdAt}
          currentUserId={userData?.id}
          onRemove={onRemoveComment}
        />
      ))}
    </Paper>
  );
};

export default PostComments;
