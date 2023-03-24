import React, { FC, useState } from "react";
import { Api } from "@/services/api";
import { Button, Input } from "@mui/material";
import dynamic from "next/dynamic";
import { PostItem } from "@/services/api/types";
import { useRouter } from "next/router";

const Editor = dynamic(() => import("../Editor/Editor").then((m) => m.Editor), {
  ssr: false,
});

interface WriteFormProps {
  data?: PostItem;
}

const WriteForm: FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(data?.title || "");
  const [blocks, setBlocks] = useState(data?.body || []);

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      const obj = {
        title,
        body: blocks,
      };
      if (!data) {
        const post = await Api().post.createPost(obj);
        await router.push(`/write/${post.id}`);
      } else {
        await Api().post.updatePost(data.id, obj);
      }
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
      <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      <Button
        onClick={onAddPost}
        disabled={isLoading || !blocks.length || !title}
        variant="contained"
        color="primary"
      >
        {data ? "Сохранить" : "Опубликовать"}
      </Button>
    </div>
  );
};

export default WriteForm;
