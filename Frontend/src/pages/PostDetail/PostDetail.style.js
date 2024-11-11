import styled from "styled-components";

export const SContainer = styled.div`
  //width: 1140px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  h2 {
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 24px;
    margin: 10px;
    overflow: hidden;
    white-space: nowrap;
  }

  h3{
      font-weight: bold;
      font-size: 1.2rem;
      padding: 20px;
      color: #112d4e;
    }
`;

export const STitle = styled.div`
  background-color: #3f72af;
  width: 100%;
  height: 60px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  color: white;
  border-radius: 12px 12px 0 0;

  .img_box {
    background-color: white;
    width: 3rem;
    height: 3rem;
    left: 10px;
    margin-left: 20px;
    border-radius: 6px;
    img {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
    }
  }

`;

//작성자일 때 나타나는 아이콘
export const WriterBox = styled.div`
  position: relative;
  margin-left: auto;
  height: 100%;
  display: flex;
  align-items: center;
  .drop-box-btn {
    width: 60px;
    height: 24px;
    text-align: center;
    line-height: 12px;
    cursor: pointer;
  }
`;

//수정하기, 삭제하기 드롭박스
export const DropList = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  position: absolute;
  z-index: 10;
  top: 60px;
  right: 0;
  flex-direction: column;
  background-color: #3f72af;

  button {
    width: 80px;
    height: 40px;
    color: white;
    font-size: 1rem;
  }

  button:first-child {
    border-bottom: 1px solid #dbe2ef;
  }
`;

export const SSpace = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid #dbe2ef;
  div {
    justify-content: space-between;
    margin: 0 10px;
  }
`;

export const CodeContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  .content_box{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 12px;
    .text_area {
      width: 95%;
    }
  }

  p {
    width: 100%;
    overflow-wrap: break-word;
    white-space: normal;
    background-color: white;
    line-height: 2;
  }
  button {
    margin-top: 24px;
    width: 80px;
    height: 40px;
    padding: 10px;
    background-color: #3f72af;
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
  }
`;
export const SLikeBackButton = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbe2ef;

  button {
    width: 80px;
    height: 40px;
    padding: 10px;
    background-color: #3f72af;
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
  }
`;

export const SProfileImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  border-radius: 70%;
  overflow: hidden;
  margin-left: 20px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


