import { useUserLogin } from "../../context/UserLoginContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WriteBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  padding: 10px;
  background-color: #dbe2ef;
  color: #112d4e;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

export const WriteButton = () => {
  const { isLogin, user } = useUserLogin();
  return (
    <WriteBox>
      {isLogin && user && (
        <Link to="/codeCreate">
          <Button>글쓰기</Button>
        </Link>
      )}
    </WriteBox>
  );
};
