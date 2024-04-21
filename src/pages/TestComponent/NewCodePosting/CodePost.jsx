import styled from "styled-components";
import { AceEditorSet } from "../NewCodePosting/AceEditor/AceEditorSet";
import { ToastEditor } from "../NewCodePosting/ToastEditor/ToastEditor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

export const CodePost = () => {
  return (
    <>
      <EditorTitleBox>
        <span className="title">1. 코드 입력창</span>
        <span className="title">2. 코드 결과창</span>
        <span className="title">3. 텍스트 에디터</span>
      </EditorTitleBox>
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
    </>
  );
};

const EditorTitleBox = styled.div`
  display: flex;
  justify-content: space-between;

  .title {
    display: inline-block;
    margin: 0.5rem;
  }
`;

const CodePostBox = styled.div`
  display: flex;
  gap: 0.125rem;
  max-width: 1140px;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
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
