import * as S from "./ProfileInfo.style.js";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext.js";
import { decryptData, encryptData } from "../../utils/secure.js";
import { handleUpload } from "../../utils/uploadImage.js";
import { useSelector } from "react-redux";

export const ProfileInfo = () => {
  const bucketUrl = useSelector(state => state.bucketUrl);
  const imageUrl = bucketUrl ? bucketUrl.imageUrl : "";
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
  const handleInputChange = setState => e => {
    setState(e.target.value);
  };

  //페이지 이동
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
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

  const handleEditIconClick = () => {
    document.getElementById("image-edit").click();
  };

  //업데이트 요쳥
  const handleSubmit = async e => {
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
      navigate("/mypage/info");
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

  const updateSessionStorage = async newData => {
    const storedData = await decryptData("user", sessionStorage);
    const updatedData = { ...storedData, ...newData };
    delete updatedData.email;
    delete updatedData.id;
    updatedData.id = updatedData._id;
    delete updatedData._id;

    await encryptData(updatedData, "user", sessionStorage);
  };

  return (
    <S.ProfileInfoBox>
      <S.ProfileImageBox>
        <S.ProfileImage>
          <img src={imgPreview ? imgPreview : imgSrc} alt="프로필 이미지" />
          <S.EditIcon onClick={handleEditIconClick} />
          <input id="image-edit" accept="image/*" type="file" onChange={e => handleFileChange(e)} />
        </S.ProfileImage>
        <S.ProfileText>{profileDB.id}</S.ProfileText>
      </S.ProfileImageBox>

      {/* 한 줄 소개 */}
      <div>
        <S.CommentTitle>한 줄 소개</S.CommentTitle>
        <S.Comment>한줄소개 crud 코드 추가하기</S.Comment>
      </div>

      {/* 가입 정보 */}
      <div>
        <S.FormRow>
          <S.FormGroup>
            <S.Label>아이디</S.Label>
            <S.StyledInput value={profileDB.id} readOnly />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>닉네임</S.Label>
            <S.StyledInput value={nickname} onChange={e => handleInputChange(setNickname)(e)} />
          </S.FormGroup>
        </S.FormRow>
        <S.FormGroup>
          <S.Label>이메일</S.Label>
          <S.StyledInput value={email} readOnly />
        </S.FormGroup>
      </div>

      <S.ProfileEditButton type="submit" onClick={handleSubmit}>
        변경사항 저장
      </S.ProfileEditButton>
    </S.ProfileInfoBox>
  );
};
