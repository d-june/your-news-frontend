import { CSSProperties, FC } from "react";
import { IconButton } from "@mui/material";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import RepeatIcon from "@mui/icons-material/Repeat";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import styles from "./PostActions.module.scss";

const PostActions: FC = () => {
  return (
    <ul className={styles.postActions}>
      <li>
        <IconButton>
          <ModeCommentIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepeatIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};

export default PostActions;
