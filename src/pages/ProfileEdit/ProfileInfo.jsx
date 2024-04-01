import * as S from "./ProfileEdit.style.js";
<<<<<<< HEAD
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext.jsx";

export const ProfileInfo = () => {
  const { loginUser, setIsChange } = useUserLogin();

  //user정보변경상태 false로 초기화
  const memoizedSetIsChange = useCallback(setIsChange, [setIsChange]);
  useEffect(() => {
    memoizedSetIsChange(false);
    console.log("실행중");
  }, [memoizedSetIsChange]);

  //로그인 유저정보
  const [userNickname, setUserNickname] = useState(loginUser.userNickname);
  const [userEmail, setUserEmail] = useState(loginUser.userEmail);
  const userImgSrc = loginUser.userImg;
  //이미지 미리보기
  const [imgPreview, setImgPreview] = useState(null);

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
          setImgPreview(reader.result || null);
          resolve();
        };
      });
    }
  };

  //페이지 이동
  const navigate = useNavigate();
  //TODO 변경사항 저장 함수(임시로 세션스토리지 이용중)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 이미지를 Blob URL로 변환
    let imgBlobUrl = null;
    if (imgPreview) {
      const response = await fetch(imgPreview);
      const blob = await response.blob();
      imgBlobUrl = URL.createObjectURL(blob);
    }

    const editData = { ...loginUser };
    editData.userNickname = userNickname;
    editData.userEmail = userEmail;
    editData.userImg = imgBlobUrl ? imgBlobUrl : userImgSrc;
    sessionStorage.setItem("loginUser", JSON.stringify(editData));
    setIsChange(true);
    navigate("/profile");
  };

  return (
    <S.ProfileInfoMainBox>
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.InfoAndBtnFormBox onSubmit={handleSubmit}>
=======

export const ProfileInfo = () => {
  //TODO 컴포넌트화해서 조회,수정 페이지에 같이 적용하게 만들기
  return (
    <S.ProfileInfoMainBox>
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.InfoAndBtnBox>
>>>>>>> serverDB
        <S.ProfileInfoBox>
          <S.ProfileImgBox>
            <S.ProfileImg
              alt="프로필 이미지"
<<<<<<< HEAD
              src={imgPreview ? imgPreview : userImgSrc}
            />
          </S.ProfileImgBox>
          <S.ProfileTextBox>
=======
              src="./img/layout/user-profile.jpg"
            />
          </S.ProfileImgBox>
          <S.ProfileTextForm>
>>>>>>> serverDB
            <S.TextBoxItem>
              <p>이름</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
<<<<<<< HEAD
              {/* 이름은 변경 못 하게 div*/}
              <div>{loginUser.userName}</div>
=======
              <input />
>>>>>>> serverDB
            </S.TextBoxItem>
            <S.TextBoxItem>
              <p>닉네임</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
<<<<<<< HEAD
              <input
                value={userNickname}
                onChange={handleInputChange(setUserNickname)}
              />
=======
              <input />
>>>>>>> serverDB
            </S.TextBoxItem>
            <S.TextBoxItem>
              <p>이메일</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
<<<<<<< HEAD
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
            <S.ProfileEditButton type="submit">
              변경사항 저장
            </S.ProfileEditButton>
          </div>
        </S.EditButtonBox>
      </S.InfoAndBtnFormBox>
=======
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
>>>>>>> serverDB
    </S.ProfileInfoMainBox>
  );
};
