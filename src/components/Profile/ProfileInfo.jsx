import styled from "styled-components";

export const ProfileInfo = () => {
  return (
    <SProfileInfoMainBox>
      <SProfileTitle>Profile</SProfileTitle>
      <SInfoAndBtnBox>
        <SProfileInfoBox>
          <SProfileImgBox>
            <SProfileImg
              alt="프로필 이미지"
              src="./img/layout/user-profile.jpg"
            />
          </SProfileImgBox>
          <SProfileTextBox>
            <TextBoxItem>
              <p>이름</p>
            </TextBoxItem>
            <TextBoxItem>
              <div>
                <p>정세은</p>
              </div>
            </TextBoxItem>
            <TextBoxItem>
              <p>닉네임</p>
            </TextBoxItem>
            <TextBoxItem>
              <div>
                <p>css혐오자</p>
              </div>
            </TextBoxItem>
            <TextBoxItem>
              <p>이메일</p>
            </TextBoxItem>
            <TextBoxItem>
              <div className="email_box">
                <p>123@gmail.com</p>
              </div>
            </TextBoxItem>
          </SProfileTextBox>
        </SProfileInfoBox>
        <SProfileEditButton>정보 수정</SProfileEditButton>
      </SInfoAndBtnBox>
    </SProfileInfoMainBox>
  );
};

const SProfileInfoMainBox = styled.div`
  width: 80%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SProfileTitle = styled.h2`
  font-size: 1.5rem;
  color: #112d4e;
  margin-bottom: 32px;
`;

const SInfoAndBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SProfileInfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const SProfileImgBox = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SProfileImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

const SProfileTextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 4fr;
  width: 60%;
  height: 200px;
`;

const TextBoxItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* 이메일 박스에 적용되는 스타일 */
  &:nth-child(6) {
    grid-column: 2/5;
  }
  /* 자식 p태그 스타일 적용 */
  p {
    color: #112d4e;
    font-weight: 600;
  }
  /* 자식 div 태그 스타일 적용 */
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50px;
    border-radius: 20px;
    background-color: #dbe2ef;
  }
  .email_box {
    width: 90%;
  }
`;

const SProfileEditButton = styled.button`
  margin-top: 24px;
  width: 800px;
  height: 60px;
  background-color: #3f72af;
  border-radius: 12px;
  color: white;
`;
