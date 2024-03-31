import * as S from "./ProfileEdit.style.js";
import { useState } from "react";

export const ProfileInfo = ({ userData }) => {
  //로그인 유저정보 상태관리
  const [userNickname, setUserNickname] = useState(userData.userNickname);
  const [userEmail, setUserEmail] = useState(userData.userEmail);
  const [userImgSrc, setUserImgSrc] = useState(userData.userImg);

  //이름, 닉네임 state 변경 함수
  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };

  //이미지 미리보기 함수
  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => {
          setUserImgSrc(reader.result || null);
          resolve();
        };
      });
    }
  };

  return (
    <S.ProfileInfoMainBox>
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.InfoAndBtnFormBox>
        <S.ProfileInfoBox>
          <S.ProfileImgBox>
            <S.ProfileImg alt="프로필 이미지" src={userImgSrc} />
          </S.ProfileImgBox>
          <S.ProfileTextBox>
            <S.TextBoxItem>
              <p>이름</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
              {/* 이름은 변경 못 하게 div*/}
              <div>김코딩</div>
            </S.TextBoxItem>
            <S.TextBoxItem>
              <p>닉네임</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
              <input
                value={userNickname}
                onChange={handleInputChange(setUserNickname)}
              />
            </S.TextBoxItem>
            <S.TextBoxItem>
              <p>이메일</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
              <input
                value={userEmail}
                onChange={handleInputChange(setUserEmail)}
              />
            </S.TextBoxItem>
          </S.ProfileTextBox>
        </S.ProfileInfoBox>
        <S.EditButtonBox>
          <div>
            <S.ImgEditButton htmlFor="image-edit">사진 수정</S.ImgEditButton>
            <input
              style={{ display: "none" }}
              id="image-edit"
              accept="image/*"
              type="file"
              onChange={(e) => handleUploadFile(e)}
            />
          </div>
          <div>
            <S.ProfileEditButton>변경사항 저장</S.ProfileEditButton>
          </div>
        </S.EditButtonBox>
      </S.InfoAndBtnFormBox>
    </S.ProfileInfoMainBox>
  );
};
