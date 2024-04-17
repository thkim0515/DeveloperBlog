import * as S from "./ProfileEdit.style.js";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext.jsx";
import axios from "axios";

export const ProfileInfo = () => {
  const { profileDB, setIsChange } = useUserLogin();

  //user정보변경상태 false로 초기화
  const memoizedSetIsChange = useCallback(setIsChange, [setIsChange]);
  useEffect(() => {
    memoizedSetIsChange(false);
  }, [memoizedSetIsChange]);

  //로그인 유저정보
  const [nickname, setNickname] = useState(profileDB.nickname);
  const email = profileDB.email;
  const imgSrc = profileDB.profileimg;

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

  //업데이트 요쳥
  const handleSubmit = async (e) => {
    e.preventDefault();
    //입력값 공백이면 함수 중단
    if (nickname.trim() === "") {
      alert("닉네임을 입력해주세요");
      return;
    }
    if (nickname.length > 14) {
      alert("닉네임은 14글자를 초과할 수 없습니다. ");
      return;
    }
    const editData = { ...profileDB };
    editData.nickname = nickname;
    try {
      await axios.put(`/users/update/${profileDB._id}`, editData);
      setIsChange(true);
      navigate("/profile");
      //TODO 새로고침 줄이기...
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message);
      } else {
        alert("정보 변경 실패");
      }
    }
  };

  return (
    <S.ProfileInfoMainBox>
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.InfoAndBtnFormBox onSubmit={handleSubmit}>
        <S.ProfileInfoBox>
          <S.ProfileImgBox>
            <S.ProfileImg
              alt="프로필 이미지"
              src={imgPreview ? imgPreview : imgSrc}
            />
          </S.ProfileImgBox>
          <S.ProfileTextBox>
            <S.TextBoxItem>
              <p>아이디</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
              {/* id변경 못 하게 div*/}
              <div>{profileDB.id}</div>
            </S.TextBoxItem>
            <S.TextBoxItem>
              <p>닉네임</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
              <input
                value={nickname}
                onChange={handleInputChange(setNickname)}
              />
            </S.TextBoxItem>
            <S.TextBoxItem>
              <p>이메일</p>
            </S.TextBoxItem>
            <S.TextBoxItem>
              {/* 이메일 변경 못하게 */}
              <div>{email}</div>
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
