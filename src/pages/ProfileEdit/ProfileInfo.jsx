import * as S from "./ProfileEdit.style.js";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext.jsx";
import { decryptData, encryptData } from "../../utils/secure.js";
import { handleUpload } from "../../utils/uploadImage";
import { useSelector } from "react-redux";

export const ProfileInfo = () => {
  const imageUrl = useSelector((state) => state.butketUrl.imageUrl);
  const { profileDB, setIsChange } = useUserLogin();

  //user정보변경상태 false로 초기화
  const memoizedSetIsChange = useCallback(setIsChange, [setIsChange]);
  useEffect(() => {
    memoizedSetIsChange(false);
  }, [memoizedSetIsChange]);

  //로그인 유저정보
  const [nickname, setNickname] = useState(profileDB.nickname);
  const email = profileDB.email;
  const imgSrc = `${imageUrl}profileImg/${profileDB.profileimg}`;
  let checkNull = false;

  //이미지 미리보기
  const [imgPreview, setImgPreview] = useState(null);

  //이름, 닉네임 state 변경 함수
  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };

  //페이지 이동
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("파일 크기는 5MB를 초과할 수 없습니다.");
        event.target.value = null;
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgPreview(reader.result);
      };
    }
  };

  //업데이트 요쳥
  const handleSubmit = async (e) => {
    e.preventDefault();
    //입력값 공백이면 함수 중단
    if (nickname.trim() === "") {
      alert("닉네임을 입력해주세요");
      return;
    }
    if (nickname.length < 2 || nickname.length > 14) {
      alert("2 ~ 14 글자의 닉네임을 작성해주세요.");
      return;
    }
    const floderPath = "profileImg/";
    let changeImgaeName = await handleUpload(selectedFile, floderPath);

    if (changeImgaeName === null) {
      changeImgaeName = profileDB.profileimg;
      checkNull = true;
    }

    const editData = {
      ...profileDB,
      nickname: nickname,
      profileimg: changeImgaeName,
    };

    try {
      await axios.put(`/users/update/${profileDB._id}`, editData);

      if (profileDB.profileimg !== "noprofile.jpg" && checkNull !== true) {
        await axios.delete(`/awss3/deleteimg/${profileDB.profileimg}`);
      }

      alert("정보가 성공적으로 수정되었습니다.");
      setIsChange(true);
      navigate("/profile");
      //TODO 새로고침 줄이기... >> 완료
      await updateSessionStorage(editData);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message);
      } else {
        alert("정보 변경 실패");
      }
    }
  };

  const updateSessionStorage = async (newData) => {
    const storedData = await decryptData("user", sessionStorage);
    const updatedData = { ...storedData, ...newData };
    delete updatedData.email;
    delete updatedData.id;
    updatedData.id = updatedData._id;
    delete updatedData._id;

    await encryptData(updatedData, "user", sessionStorage);
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
              onChange={(e) => handleFileChange(e)}
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
