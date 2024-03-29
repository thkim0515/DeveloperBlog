import * as S from "./ProfileEdit.style.js";

export const ProfileInfo = () => {
  //TODO 컴포넌트화해서 조회,수정 페이지에 같이 적용하게 만들기
  return (
    <S.ProfileInfoMainBox>
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.InfoAndBtnBox>
        <S.ProfileInfoBox>
          <S.ProfileImgBox>
            <S.ProfileImg
              alt="프로필 이미지"
              src="./img/layout/user-profile.jpg"
            />
          </S.ProfileImgBox>
          <S.ProfileTextForm>
            <S.TextBoxItem>
              <p>이름</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
              <input />
            </S.TextBoxItem>
            <S.TextBoxItem>
              <p>닉네임</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
              <input />
            </S.TextBoxItem>
            <S.TextBoxItem>
              <p>이메일</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
              <input />
            </S.TextBoxItem>
          </S.ProfileTextForm>
        </S.ProfileInfoBox>
        <S.EditButtonBox>
          <div>
            <S.ProfileEditButton>사진 수정</S.ProfileEditButton>
          </div>
          <div>
            <S.ProfileEditButton>변경사항 저장</S.ProfileEditButton>
          </div>
        </S.EditButtonBox>
      </S.InfoAndBtnBox>
    </S.ProfileInfoMainBox>
  );
};
