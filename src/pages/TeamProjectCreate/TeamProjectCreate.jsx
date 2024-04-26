import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";

// components
import { Input } from "./../../components/form/Input";
import { ToastEditor } from "./../../components/editor/ToastEditor";

const toolbarItems = [
  ["heading", "bold", "italic", "strike"],
  ["hr", "quote"],
  ["ul", "ol", "task", "indent", "outdent"],
  ["image", "link"],
  ["code", "codeblock"],
  ["scrollSync"],
];

export const TeamProjectCreate = () => {
  const editorRef = useRef();

  return (
    <form>
      <div>
        <label>프로젝트명</label>
        <Input type="text" placeholder="제목을 입력하세요." />
      </div>
      <div>
        <label>프로젝트 해시태그</label>
        <Input type="text" />
        <button>추가하기</button>
      </div>
      <div>
        <h2>기술 스택</h2>
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faNodeJs} />
      </div>
      <div>
        <label>모집 인원</label>
        <div>
          <Input type="number" />/<Input type="number" />
        </div>
      </div>
      <div>
        <label>시작 예정</label>
        <div>
          <Input type="month" />
        </div>
      </div>
      <div>
        <label>연락 방법</label>
        <Input type="text" />
      </div>
      <div>
        <h2>내용 작성</h2>
        <ToastEditor
          ref={editorRef}
          initialValue=" "
          initialEditType="wysiwyg"
          previewStyle="vertical"
          autofocus="true"
          height="500px"
          useCommandShortcut="false"
          usageStatistics="false"
          toolbarItems={toolbarItems}
          language="ko-KR"
        />
      </div>
      <button>올리기</button>
    </form>
  );
};
