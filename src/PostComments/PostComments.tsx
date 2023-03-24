import React, { FC, useState } from "react";
import { Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import AddCommentForm from "@/AddCommentForm/AddCommentForm";
import Comment from "@/Comment/Comment";

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
  items: Comment[];
}

const PostComments: FC<PostCommentsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

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
      <AddCommentForm />
      {items.map((item) => (
        <Comment
          key={item.id}
          user={item.user}
          text={item.text}
          createdAt={item.createdAt}
        />
      ))}
    </Paper>
  );
};

export default PostComments;
