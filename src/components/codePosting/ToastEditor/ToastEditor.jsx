import { ToastEditor as ToastUiEditor } from "../../editor/ToastEditor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef, useEffect } from "react";
import { handleUpload } from "../../../utils/uploadImage";
import { useSelector } from "react-redux";

export const ToastEditor = ({ postData, onEditorChange }) => {
  const imageUrl = useSelector(state => state.bucketUrl.imageUrl);
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

  const onUploadImage = async (blob, callback) => {
    try {
      const floderPath = "images/";
      const url = await handleUpload(blob, floderPath);
      const callbackUrl = imageUrl + floderPath + url;
      callback(callbackUrl, ""); // 에디터에 이미지 URL 적용
    } catch (error) {
      console.error("업로드 실패 >> ", error);
    }
    return false;
  };

  return (
    <ToastUiEditor
      initialValue=" "
      ref={editorRef}
      initialEditType="markdown"
      autofocus={true}
      height="500px"
      useCommandShortcut={false}
      usageStatistics={false}
      toolbarItems={[
        // 툴바 옵션 설정
        // ["code", "codeblock", "image"],
        ["heading", "bold"],
        ["quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image"],
        ["code", "codeblock"],
        ["scrollSync"],
      ]}
      hideModeSwitch={true}
      onChange={onChange}
      language="ko-KR"
      hooks={{
        addImageBlobHook: onUploadImage,
      }}
    />
  );
};
