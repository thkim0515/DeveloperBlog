import styled from "styled-components";

export const SContainer = styled.div`
  width: 1140px;
  display: flex;
  flex-wrap: wrap;
`;

export const STitle = styled.div`
  background-color: #3f72af;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  color: white;

  img {
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    margin: 0;
  }

  h3 {
    margin: 0;
  }
`;

export const SSpace = styled.div`
  width: 100%;
  background-color: #dbe2ef;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SImageContent = styled.div`
  width: 100%;
  display: block;
  font-size: 1rem;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100%;
    overflow: hidden;
  }

  p {
    width: 100%;
    overflow-wrap: break-word;
    white-space: normal;
  }
`;

export const SProfileImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  border-radius: 70%;
  overflow: hidden;
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
