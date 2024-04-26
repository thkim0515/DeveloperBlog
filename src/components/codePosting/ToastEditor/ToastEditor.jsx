import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef, useEffect } from "react";
import {uploadImage} from '../../../utils/uploadImage'



const onUploadImage = async (blob, callback) => {
  console.log(blob);
  const url = await uploadImage(blob);  //TODO s3 url로 보내는 임시 함수
  callback(url, 'alt text');
  return false;
};

export const ToastEditor = ({textData, onEditorChange}) => {
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    onEditorChange(data);
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setHTML(textData);
    }
  }, [textData]);
  return (
    <Editor
    initialValue=""
    ref={editorRef}
    initialEditType="markdown"
    autofocus={true}
    height="500px"
    useCommandShortcut={false}
    usageStatistics={false}
    toolbarItems={[
      // 툴바 옵션 설정
      ["code", "codeblock"],
      ['image'],
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
