import * as S from "./ProfileEdit.style.js";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext.jsx";

export const ProfileInfo = () => {
  const { user, setIsChange } = useUserLogin();

  //user정보변경상태 false로 초기화
  const memoizedSetIsChange = useCallback(setIsChange, [setIsChange]);
  useEffect(() => {
    memoizedSetIsChange(false);
    console.log("실행중");
  }, [memoizedSetIsChange]);

  //로그인 유저정보
  const [userNickname, setUserNickname] = useState(user.nickname);
  const [userEmail, setUserEmail] = useState(user.email);
  const userImgSrc = user.profile;
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

    // 이미지를 Blob URL로 변환(서버에 이미지 저장되면 지우기)
    let imgBlobUrl = null;
    if (imgPreview) {
      const response = await fetch(imgPreview);
      const blob = await response.blob();
      imgBlobUrl = URL.createObjectURL(blob);
    }
    // TODO 백엔드 완성되면 해당 값 PUT요청보내기
    const editData = { ...user };
    editData.nickname = userNickname;
    editData.email = userEmail;
    editData.profile = imgBlobUrl ? imgBlobUrl : userImgSrc;
    sessionStorage.setItem("user", JSON.stringify(editData));
    setIsChange(true);
    navigate("/profile");
  };

  return (
    <S.ProfileInfoMainBox>
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.InfoAndBtnFormBox onSubmit={handleSubmit}>
        <S.ProfileInfoBox>
          <S.ProfileImgBox>
            <S.ProfileImg
              alt="프로필 이미지"
              src={imgPreview ? imgPreview : userImgSrc}
            />
          </S.ProfileImgBox>
          <S.ProfileTextBox>
            <S.TextBoxItem>
              <p>아이디</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
              {/* id변경 못 하게 div*/}
              <div>{user.id}</div>
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
            <S.ProfileEditButton type="submit">
              변경사항 저장
            </S.ProfileEditButton>
          </div>
        </S.EditButtonBox>
      </S.InfoAndBtnFormBox>
    </S.ProfileInfoMainBox>
  );
};
