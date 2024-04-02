import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import styled from "styled-components";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

export const ToastEditor = (props) => {
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    props.onEditorChange(data); // 상위 컴포넌트로 데이터 전달
  };
  return (
    <EditorBox>
      <Editor
        initialValue=" "
        initialEditType="markdown"
        autofocus={true}
        height="542px"
        useCommandShortcut={false}
        usageStatistics={false}
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        hideModeSwitch={true}
        ref={editorRef}
        onChange={onChange}
        language="ko-KR"
      />
    </EditorBox>
  );
};

// https://leego.tistory.com/entry/React-%EC%97%90%EB%94%94%ED%84%B0%EB%A1%9C-TOAST-UI-Editor-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0

const EditorBox = styled.div`
  max-width: 1140px;
  width: 100%;
`;
