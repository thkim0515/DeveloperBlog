import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

const initialText = ` * 코드를 입력하여 똑 소리 나는 주석을 달아보세요!
* 보기 버튼을 누르면 원하는 대로 창을 볼 수 있어요\n
1. 첫번 째 에디터에 코드를 입력하고 코드변환 버튼을 클릭하세요.
2. 두번 째 에디터에 내 코드에 코드해석이 주석으로 달려요.
3. 세번 째 에디터에 공부한 내용을 기록해요!
`;

export const ToastEditor = () => {
  return (
    <Editor
      initialValue={initialText}
      initialEditType="markdown"
      autofocus={true}
      height="100%"
      useCommandShortcut={false}
      usageStatistics={false}
      toolbarItems={[
        // 툴바 옵션 설정
        ["code", "codeblock"],
      ]}
    />
  );
};
