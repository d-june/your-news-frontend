import React, { useState } from "react";
import { Button, Input } from "@mui/material";

import dynamic from "next/dynamic";
import { Api } from "@/services/api";

const Editor = dynamic(
  () => import("../components/Editor/Editor").then((m) => m.Editor),
  {
    ssr: false,
  }
);

const Write = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState([]);

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      const post = await Api().post.createPost({ title, body: blocks });

      console.log(post);
    } catch (err) {
      console.warn("Create post", err);
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Input
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Editor onChange={(arr) => setBlocks(arr)} />
      <Button
        onClick={onAddPost}
        disabled={isLoading}
        variant="contained"
        color="primary"
      >
        Опубликовать
      </Button>
    </div>
  );
};

export default Write;
