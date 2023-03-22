import React, { FC, useState } from "react";
import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "./SideComments.module.scss";
import clsx from "clsx";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const comments = [
  {
    id: 0,
    user: {
      id: 1,
      fullname: "Вася Пупкин",
      avatarUrl:
        "https://media.istockphoto.com/id/454995205/photo/white-kitten.jpg?b=1&s=170667a&w=0&k=20&c=4zldIT44NhRFHTRhq4kxFA-I_MfuOfSs_f_4wdD54E4=",
    },
    text: "Какой-то текст подлиннее немного текст",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString(),
  },
  {
    id: 1,
    user: {
      id: 2,
      fullname: "Вася Пупкин",
      avatarUrl:
        "https://media.istockphoto.com/id/454995205/photo/white-kitten.jpg?b=1&s=170667a&w=0&k=20&c=4zldIT44NhRFHTRhq4kxFA-I_MfuOfSs_f_4wdD54E4=",
    },
    text: "Какой-то текст подлиннее немного текст",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString(),
  },
];

interface CommentItemProps {
  user: {
    id: number;
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const CommentItem: FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <Card sx={{ maxWidth: 400 }} className={styles.commentInfo}>
      <CardContent>
        <div>
          <CardMedia
            component="img"
            alt="avatar"
            height="100"
            image={user.avatarUrl}
            className={styles.commentImg}
          />
          <Typography variant="overline">{user.fullname}</Typography>
        </div>
        <Typography>{text}</Typography>
        <Link href="news/1">
          <Typography variant="h6">{post.title}</Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export const SideComments = () => {
  const [visible, setVisible] = useState(true);
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
