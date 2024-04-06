import styled from "styled-components";

export const SContainer = styled.div`
  //width: 1140px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
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

  div {
    background-color: white;
    width: 3rem;
    left: 10px;
    margin-left: 20px;
    border-radius: 6px;
  }

  div img {
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
  }

  h3 {
    margin-left: 10px;
  }

  span {
    margin-left: auto;
    margin-right: 20px;
    height: 24px;
    line-height: 12px;
    cursor: pointer;
  }
`;

export const SSpace = styled.div`
  width: 100%;
  background-color: #dbe2ef;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  div {
    justify-content: space-between;
    margin: 0 10px;
  }
`;

export const SImageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  img {
    width: 100%;
    overflow: hidden;
  }

  p {
    width: 100%;
    overflow-wrap: break-word;
    white-space: normal;
    background-color: white;
    min-height: 40vh;
    padding: 8px;
    border-radius: 0 0 12px 12px;
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

export const StyledDropdownToggle = styled.div`
  &::after {
    display: none; // 화살표 숨기기
  }
  background-color: #3f72af;
  border: none;
  font-size: 2rem;
  gap: 10px;
`;

export const StyledDropdown = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;
