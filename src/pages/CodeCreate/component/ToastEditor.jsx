import { Editor } from "@toast-ui/react-editor";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

export const ToastEditor = (props) => {
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    props.onEditorChange(data);
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setHTML(props.editorData);
    }
  }, [props.editorData]);

  return (
    <EditorBox>
      <Editor
        initialValue=" "
        ref={editorRef}
        initialEditType="markdown"
        autofocus={true}
        height="542px"
        useCommandShortcut={false}
        usageStatistics={false}
        toolbarItems={[
          // 툴바 옵션 설정
          ["code", "codeblock"],
        ]}
        hideModeSwitch={true}
        onChange={onChange}
        language="ko-KR"
      />
    </EditorBox>
  );
};

const EditorBox = styled.div`
  max-width: 1140px;
  width: 100%;
`;
