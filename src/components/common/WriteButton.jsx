import { useUserLogin } from "../../context/UserLoginContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WriteBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #b2eaff;
  color: #112d4e;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #dbe2ef;
  }
`;

export const WriteButton = ({ project }) => {
  const { isLogin, user } = useUserLogin();
  const path = !project ? "/codeCreate" : "/projectCreate";
  return (
    <WriteBox>
      {isLogin && user && (
        <Link to={path}>
          <Button>글쓰기</Button>
        </Link>
      )}
    </WriteBox>
  );
};
