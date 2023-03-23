import React, { useState } from "react";
import { Button, Input } from "@mui/material";

import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("../components/Editor/Editor").then((m) => m.Editor),
  {
    ssr: false,
  }
);

const Write = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <Input
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Editor />
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};

export default Write;
