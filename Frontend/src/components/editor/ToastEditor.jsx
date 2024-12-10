import { forwardRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

// utils
// import { uploadImage } from "../utils/uploadImage";

export const ToastEditor = forwardRef((props, ref) => {
  return <Editor {...props} ref={ref} />;
});
