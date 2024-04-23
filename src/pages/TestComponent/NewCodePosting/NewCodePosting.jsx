import * as S from "./NewCodePosting.style";
import { CodePost } from "./CodePost";
import { Input } from "../../../components/LiveChat.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";

export const NewCodePosting = () => {
  return (
    <>
      <S.TitleBox>Code Posting</S.TitleBox>
      <S.CodePostingBox>
        {/* 제목 입력 */}
        <S.InputBox>
          <Input type="text" id="title" placeholder="제목을 입력하세요" />
        </S.InputBox>
        <hr />

        {/* 내용 입력 */}
        <div>
          {/*  */}
          <div>
            <p>입력 언어 선택</p>
            <S.LangauageBox>
              <FontAwesomeIcon icon={faJs} />
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNodeJs} />
            </S.LangauageBox>
          </div>
          <hr />

          {/*  */}
          <S.ViewOptionsBox>
            <tbody>
              <tr>
                <td name="clear-getAce">
                  <button>입력창 초기화</button>
                </td>
                <td name="getAce">
                  <button>입력창</button>
                </td>
                <td name="setAce">
                  <button>해석창</button>
                </td>
                <td name="setToast">
                  <button>텍스트 에디터</button>
                </td>
              </tr>
            </tbody>
          </S.ViewOptionsBox>
        </div>

        {/* 코드 입력 */}
        <CodePost />

        <S.PostButtonBox>
          <hr />
          <button>코드해석하기</button>
          <button>포스팅 올리기</button>
        </S.PostButtonBox>
      </S.CodePostingBox>
    </>
  );
};
