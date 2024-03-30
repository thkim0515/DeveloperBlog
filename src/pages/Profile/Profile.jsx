import * as S from "./Profile.style.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Profile = () => {
  //유저정보 받아오기
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./data/loginuser.json");
        setUserData(response.data);
      } catch (error) {
        console.log(`AXIOS 실패!${error}`);
      }
    };
    fetchData();
  }, []);

  //정보 수정 버튼 클릭시 이동 함수
  const navigate = useNavigate();
  const handleEditButtonClick = () => {
    navigate("/profileEdit");
  };

  return (
    <S.ProfileInfoMainBox>
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.InfoAndBtnBox>
        {userData && (
          <S.ProfileInfoBox>
            <S.ProfileImgBox>
              <S.ProfileImg alt="프로필 이미지" src={userData.userImg} />
            </S.ProfileImgBox>
            <S.ProfileTextBox>
              <S.TextBoxItem>
                <p>이름</p>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <div>
                  <p>{userData.userName}</p>
                </div>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <p>닉네임</p>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <div>
                  <p>{userData.userNickname}</p>
                </div>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <p>이메일</p>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <div className="email_box">
                  <p>{userData && userData.userEmail}</p>
                </div>
              </S.TextBoxItem>
            </S.ProfileTextBox>
          </S.ProfileInfoBox>
        )}

        <S.ProfileEditButton onClick={handleEditButtonClick}>
          정보 수정
        </S.ProfileEditButton>
      </S.InfoAndBtnBox>
    </S.ProfileInfoMainBox>
  );
};
