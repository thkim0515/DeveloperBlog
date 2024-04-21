import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

export const ToastEditor = () => {
  return (
    <Editor
      initialValue=" "
      initialEditType="markdown"
      autofocus={true}
      height="100%"
      useCommandShortcut={false}
      usageStatistics={false}
      toolbarItems={[
        // 툴바 옵션 설정
        ["code", "codeblock"],
      ]}
      hideModeSwitch={true}
    />
  );
};
