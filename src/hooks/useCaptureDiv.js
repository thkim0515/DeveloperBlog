import { useCallback } from "react";
import html2canvas from "html2canvas";
import ace from "ace-builds/src-noconflict/ace";

export const useCaptureDiv = () => {
  const captureImage = useCallback(
    async (editorId, fileName = "download.png") => {
      const editor = ace.edit(editorId);
      const codeText = editor.getValue();

      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.left = "-9999px";
      container.style.width = "auto";
      document.body.appendChild(container);

      const pre = document.createElement("pre");
      pre.textContent = codeText;
      container.appendChild(pre);

      const canvas = await html2canvas(container);
      const image = canvas.toDataURL("image/png");

      document.body.removeChild(container);

      return image;
    },
    []
  );

  return { captureImage };
};

// Ref . https://www.npmjs.com/package/html2canvas?activeTab=readme
