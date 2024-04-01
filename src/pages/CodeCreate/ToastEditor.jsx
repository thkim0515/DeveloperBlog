import { Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

// TOAST UI Editor Plugins

export const ToastEditor = () => {
  return (
    <EditorBox>
      <Editor
        initialValue=" "
        initialEditType="wysiwyg"
        autofocus={true}
        height="542px"
        useCommandShortcut={true}
        toolbarItems={[
          // 툴바 옵션 설정

          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
        ]}
        hideModeSwitch={false}
        language="ko-KR"
      />
    </EditorBox>
  );
};

const EditorBox = styled.div`
  max-width: 560px;
  width: 100%;
`;
