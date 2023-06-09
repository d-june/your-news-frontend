import React, { FC, useEffect } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

interface EditorProps {
  onChange: (blocks: OutputData["blocks"]) => void;
  initialBlocks?: OutputData["blocks"];
}
export const Editor: FC<EditorProps> = ({ onChange, initialBlocks }) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      data: {
        blocks: initialBlocks,
      },
      placeholder: "Введите текст статьи...",
      async onChange() {
        const { blocks } = await editor.save();
        onChange(blocks);
      },
    });
    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error("ERROR editor cleanup", e));
    };
  }, []);
  return <div id="editor"></div>;
};
