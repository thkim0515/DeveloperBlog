import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef, useEffect } from "react";
import { ToastEditor } from "./ToastEditor";
//import { uploadImage } from "../../../utils/uploadImage";

const toolbar = [
  ["heading", "bold", "italic", "strike"],
  ["hr", "quote", "ul", "ol"],
  ["image"],
];

const onUploadImage = async (blob, callback) => {
  // console.log(blob);
  // const url = await uploadImage(blob); //TODO s3로 이미지 업로드
  // callback(url, "alt text");
  // return false;
};

export const ProjectContentEditor = ({ postData, onEditorChange }) => {
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    onEditorChange(data);
  };

  useEffect(() => {
    if (postData && editorRef.current) {
      editorRef.current.getInstance().setHTML(postData.toast_contents);
    }
  }, [postData]);

  return (
    <ToastEditor
      initialValue=" "
      initialEditType="wysiwyg"
      ref={editorRef}
      autofocus={true}
      height="500px"
      useCommandShortcut={false}
      usageStatistics={false}
      toolbarItems={toolbar}
      hideModeSwitch={true}
      onChange={onChange}
      language="ko-KR"
      hooks={{
        addImageBlobHook: onUploadImage,
      }}
    />
  );
};
