import styled from "styled-components";
import { AceEditorSet } from "../NewCodePosting/AceEditor/AceEditorSet";
import { ToastEditor } from "../NewCodePosting/ToastEditor/ToastEditor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

export const CodePost = () => {
  return (
    <>
      <CodeEditBox>
        <AceSetBox>
          <EditorTitle>입력창</EditorTitle>
          <AceEditorSet name="getAceCode" />
        </AceSetBox>
        <AceGetBox>
          <EditorTitle>해석창</EditorTitle>
          <AceEditorSet name="setAceCode" />
        </AceGetBox>
        <ToastBox>
          <EditorTitle>텍스트 에디터</EditorTitle>
          <ToastEditor />
        </ToastBox>
      </CodeEditBox>
    </>
  );
};

const CodeEditBox = styled.div`
  display: flex;
  gap: 0.125rem;
  max-width: 1140px;
  width: 100%;
  height: 590px;
  margin: 0 auto;
`;

const EditorTitle = styled.p`
  text-align: center;
  padding: 0.5rem 0;
  color: #ffffff;
  background-color: #101010;
`;

const AceGetBox = styled.div`
  max-width: 100%;
  width: calc(100% / 3);
`;

const AceSetBox = styled.div`
  width: calc(100% / 3);
`;

const ToastBox = styled.div`
  width: calc(100% / 3);
  background-color: inherit;
`;
