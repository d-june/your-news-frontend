import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { Button, Paper, Typography } from "@mui/material";
import PostActions from "@/components/PostActions/PostActions";
import { OutputData } from "@editorjs/editorjs";
import { FC } from "react";

interface FullPostProps {
  title: string;
  blocks: OutputData["blocks"];
}
const FullPost: FC<FullPostProps> = ({ title, blocks }) => {
  return (
    <Paper elevation={0}>
      <div>
        <Typography variant="h4">{title}</Typography>
      </div>
      <div>
        {blocks.map((obj) => {
          return (
            <Typography
              key={obj.id}
              dangerouslySetInnerHTML={{ __html: obj.data.text }}
            />
          );
        })}
        <div>
          <PostActions />
        </div>
        <div>
          <div className="userInfo">
            <img
              src="https://media.istockphoto.com/id/454995205/photo/white-kitten.jpg?b=1&s=170667a&w=0&k=20&c=4zldIT44NhRFHTRhq4kxFA-I_MfuOfSs_f_4wdD54E4="
              alt="avatar"
            />
            <b>Donnie Darko</b>
            <span>+1685</span>
          </div>
          <div>
            <Button variant="contained">
              <MessageOutlinedIcon />
            </Button>
            <Button variant="contained">
              <PersonAddOutlinedIcon />
              <b>Подписаться</b>
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default FullPost;
