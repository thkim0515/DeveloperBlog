import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { Input } from "./../../components/form/Input";
import { TextArea } from "./../TeamProjectDetail/ProjectComments/ProjectComments.style";

export const TeamProjectCreate = () => {
  return (
    <form>
      <div>
        <label>프로젝트명</label>
        <Input type="text" placeholder="제목을 입력하세요." />
      </div>
      <div>
        <label>프로젝트 분야</label>
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
        <div></div>
      </div>
      <div>
        <label>예상 기간</label>
        <Input type="number" />
      </div>
      <div>
        <label>모집 분야</label>
        <Input type="text" />
      </div>
      <div>
        <label>프로젝트 소개</label>
        <TextArea placeholder="내용을 입력하세요." />
      </div>
      <div>
        <label>내용</label>
        <TextArea type="text" placeholder="내용을 입력하세요." />
      </div>
      <button>올리기</button>
    </form>
  );
};
