import * as S from "./NewCodePosting.style";
import { CodePost } from "./CodePost";
import { Input } from "../../../components/LiveChat.style";

export const NewCodePosting = () => {
  return (
    <>
      <S.TitleBox>Code Posting</S.TitleBox>
      <S.CodePostingBox>
        <S.InputBox>
          <Input type="text" id="title" placeholder="제목을 입력하세요" />
        </S.InputBox>
        <S.ViewOptionsBox>
          <button name="clear-getAce">입력창 비우기</button>
          <button name="getAce">입력창 보기</button>
          <button name="setAce">결과창 보기</button>
          <button name="setToast">텍스트 에디터 보기</button>
        </S.ViewOptionsBox>
        <CodePost />
        <S.PostButtonBox>
          <button>코드 변환</button>
          <button>포스팅 올리기</button>
        </S.PostButtonBox>
      </S.CodePostingBox>
    </>
  );
};
