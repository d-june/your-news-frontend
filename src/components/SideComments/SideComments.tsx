import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "./SideComments.module.scss";
import clsx from "clsx";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Api } from "@/services/api";
import { CommentItemType, PostItem, ResponseUser } from "@/services/api/types";

interface CommentItemProps {
  user: ResponseUser;
  text: string;
  post: PostItem;
}

export const CommentItem: FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <Card sx={{ maxWidth: 400 }} className={styles.commentInfo}>
      <CardContent>
        <div>
          <Avatar>{user.fullName[0]}</Avatar>
          {/*<CardMedia*/}
          {/*  component="img"*/}
          {/*  alt="avatar"*/}
          {/*  height="100"*/}
          {/*  image={user.avatarUrl}*/}
          {/*  className={styles.commentImg}*/}
          {/*/>*/}
          <Typography variant="overline">{user.fullName}</Typography>
        </div>
        <Typography>{text}</Typography>
        <Link href={`/news/${post.id}`}>
          <Typography variant="h6">{post.title}</Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export const SideComments = () => {
  const [visible, setVisible] = useState(true);
  const [comments, setComments] = useState<CommentItemType[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const comments = await Api().comment.getAllComments();
        setComments(comments);
      } catch (err) {
        console.warn("Fetch comments", err);
      }
    })();
  }, []);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible} className={styles.commentsTitle}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && comments.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
