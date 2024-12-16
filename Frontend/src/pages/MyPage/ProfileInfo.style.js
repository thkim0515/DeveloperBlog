import styled from "styled-components";

// ProfileInfo
export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 1.5rem 2.5rem;
`;

export const ProfileImageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #d0d0d0;
  position: relative;
  margin-right: 1rem;

  img {
    width: 70%;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  input {
    display: none;
  }
`;

export const EditIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "✏️";
    font-size: 0.75rem;
  }
`;

export const ProfileText = styled.span`
  font-size: 1.25rem;
  color: #333;
  font-weight: 500;
`;

// 한 줄 소개
export const CommentTitle = styled.h3`
  color: #112d4e;
`;

export const Comment = styled.h3`
  margin-top: 1.25rem;
`;

// 가입 정보
export const FormRow = styled.div`
  display: flex;
  gap: 0.938rem;
  margin-bottom: 2rem;
`;

export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  margin-right: 0.625rem;
  color: #112d4e;
  white-space: nowrap;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 0.625rem;
  border-radius: 12px;
  border: none;
  color: ${props => (props.readOnly ? "#b1b1b1" : "#000000")};
  background-color: #dbe2ef;
  cursor: ${props => (props.readOnly ? "not-allowed" : "text")};
`;

//변경사항 저장
export const ProfileEditButton = styled.button`
  padding: 0.75rem 1.75rem;
  background-color: #3f72af;
  border-radius: 8px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #345f99;
  }
`;
