import { FC, useState } from "react";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { ResponseUser } from "@/services/api/types";
import { Api } from "@/services/api";

interface CommentPostProps {
  id: number;
  user: ResponseUser;
  text: string;
  createdAt: string;
  currentUserId: number | undefined;
  onRemove: (id: number) => void;
}
const Comment: FC<CommentPostProps> = ({
  id,
  user,
  text,
  createdAt,
  currentUserId,
  onRemove,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRemove = async () => {
    if (window.confirm("Удалить комментарий?")) {
      try {
        await Api().comment.removeComment(id);
        onRemove(id);
      } catch (err) {
        console.warn("Error delete comment", err);
        alert("Не удалось удалить комментарий");
      } finally {
        handleClose();
      }
    }
  };

  return (
    <div>
      <div>
        <Avatar>{user.fullName[0]}</Avatar>
        <b>{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography>{text}</Typography>
      {user.id === currentUserId && (
        <div>
          <IconButton onClick={handleClick}>
            <MoreHorizOutlinedIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            elevation={0}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClickRemove}>Удалить</MenuItem>
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Comment;
