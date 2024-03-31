import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

export const ToastEditor = () => {
  return (
    <EditorBox>
      <Editor
        initialValue=" "
        initialEditType="markdown"
        autofocus={true}
        height="542px"
        useCommandShortcut={false}
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
        ]}
        hideModeSwitch={true}
        language="ko-KR"
      />
    </EditorBox>
  );
};

const EditorBox = styled.div`
  max-width: 500px;
  width: 100%;
`;
