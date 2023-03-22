import React, { FC } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import PostActions from "@/components/PostActions/PostActions";
import styles from "./Post.module.scss";

const Post: FC = () => {
  return (
    <>
      <Card sx={{ maxWidth: 800 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://media.istockphoto.com/id/454995205/photo/white-kitten.jpg?s=612x612&w=0&k=20&c=Gc6s7Vf_ek_Q9Skq_tzhsxvXhlmo7b9znxA_rctUjI8="
          title="cat"
        />
        <CardContent>
          <Typography variant="h5">
            <Link href="/news/">Кот пришел посмотреть на вас</Link>
          </Typography>
          <Typography className={styles.postText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            dolorem et fugiat molestiae placeat! Autem dignissimos iste laborum
            quidem quod. Ad deserunt exercitationem itaque perspiciatis,
            praesentium quidem rem? Autem, voluptate.
          </Typography>
        </CardContent>
        <PostActions />
      </Card>
    </>
  );
};

export default Post;
