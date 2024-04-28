import styled from "styled-components";
import { useEffect, useCallback } from "react";
import { AceEditorSet } from "./AceEditor/AceEditorSet";
import { ToastEditor } from "./ToastEditor/ToastEditor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

export const CodePost = ({
  setCode,
  error,
  commentedCode,
  handleEditorChange,
  toastBox,
  setToastBox,
  postData,
}) => {
  //코드 해석이 완료되면 자동으로 입력창은 사라지고 텍스트 에디터가 뜨게 만드는 기능
  const memoizedSetToastBox = useCallback(
    (value) => {
      setToastBox(value);
    },
    [setToastBox]
  );

  useEffect(() => {
    if (commentedCode) {
      memoizedSetToastBox(true);
    }
  }, [commentedCode, memoizedSetToastBox]);

  const onChange = (newValue) => {
    setCode(newValue);
  };

  return (
    <>
      <CodeEditBox>
        <AceSetBox style={{ display: !toastBox ? "block" : "none" }}>
          <EditorTitle>입력창</EditorTitle>
          <AceEditorSet name="getCode" onChange={onChange} />
        </AceSetBox>
        <AceGetBox>
          <EditorTitle>해석창</EditorTitle>
          {postData ? (
            <AceEditorSet
              name="setCode"
              value={error || commentedCode || postData.ace_contents || ""}
              readOnly={true}
            />
          ) : (
            <AceEditorSet
              name="setCode"
              value={error || commentedCode || ""}
              readOnly={true}
            />
          )}
        </AceGetBox>
        <ToastBox style={{ display: toastBox ? "block" : "none" }}>
          <EditorTitle>텍스트에디터</EditorTitle>
          <ToastEditor
            postData={postData}
            onEditorChange={handleEditorChange}
          />
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
  height: 540px;
  margin: 0 auto;
`;

const EditorTitle = styled.p`
  text-align: center;
  padding: 0.5rem 0;
  color: #ffffff;
  background-color: #112d4e;
`;

const AceGetBox = styled.div`
  max-width: 100%;
  flex: 1;
`;

const AceSetBox = styled.div`
  flex: 1;
`;

const ToastBox = styled.div`
  background-color: inherit;
  flex: 1;
`;
