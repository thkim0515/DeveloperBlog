import styled from "styled-components";
import { AceEditorSet } from "./AceEditor/AceEditorSet";
import { ToastEditor } from "./ToastEditor/ToastEditor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

export const CodePost = () => {
  return (
    <CodePostBox>
      <AceSetBox>
        <AceEditorSet name="getAceCode" />
      </AceSetBox>
      <AceGetBox>
        <AceEditorSet name="setAceCode" />
      </AceGetBox>
      <ToastBox>
        <ToastEditor />
      </ToastBox>
    </CodePostBox>
  );
};

export const CodePostBox = styled.div`
  display: flex;
  max-width: 1140px;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  gap: 0.125rem;
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
