import * as S from "./ProjectComments.style";
import { UserInformation } from "../../../components/user/UserInformation";

export const ProjectComments = () => {
  return (
    <>
      <S.CommentInputBox>
        <S.CommentTitle>
          <span>댓글</span>
          <span>1</span>
        </S.CommentTitle>
        <UserInformation />
        <S.TextArea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="댓글을 입력하세요."
        ></S.TextArea>
        <div>
          <S.CommentSubmitBox>
            <S.CommentSubmitButton>댓글 등록</S.CommentSubmitButton>
          </S.CommentSubmitBox>
        </div>
      </S.CommentInputBox>

      <S.CommentBox>
        <UserInformation />
        <p>
          안녕하세요. 오픈톡이 계속 로딩 화면에만 머물러서 댓글로 문의드립니다.
          오픈톡 외 연락을 드릴 수 있는 방법이 있을까요?
        </p>
      </S.CommentBox>
    </>
  );
};
