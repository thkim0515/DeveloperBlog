import styled from "styled-components";

//패스워드, 회원탈퇴 메인 박스
export const PasswordAndUserOutBox = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

//패스워드 폼
export const PwdForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  label {
    color: #112d4e;
    margin: 1rem 0;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #dbe2ef;
    text-align: center;
  }
`;

export const PwdEditButton = styled.button`
  margin-top: 1.25rem;
  padding: 0.75rem 1.75rem;
  background-color: #3f72af;
  border-radius: 8px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #345f99;
  }
`;

/**회원 탈퇴 */
export const UseroutBtnBox = styled.div`
  margin-top: 40px;
  padding-top: 16px;
  border-top: 1px solid #dbe2ef;
  width: 60%;
  display: flex;
  justify-content: end;

  button {
    font-size: 0.8rem;
    color: #dbe2ef;
  }
`;
