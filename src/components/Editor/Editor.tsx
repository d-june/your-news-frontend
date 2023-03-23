import React, { FC, useEffect } from "react";
import EditorJS from "@editorjs/editorjs";

export const Editor: FC = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
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
