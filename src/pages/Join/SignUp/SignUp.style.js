import styled from "styled-components";

// form
export const SignUpFiled = styled.div`
  label {
    display: inline-block;
  }

  div {
    position: relative;
  }

  input {
    width: 100%;
    margin: 0.5rem 0 0.75rem 0;
    padding: 0.75rem;
    display: inline-block;
    border: 1px solid #d9d9d9;
    background: #ffffff;
  }

  input:focus {
    background-color: #dbe2ef;
    outline: none;
  }
`;

export const SignUpText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 0;
`;

export const SignUpButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-style: none;
  border-radius: 20px;
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? "#c0c0c0" : "#3f72af")};
`;

export const MoveLink = styled.p`
  font-size: 0.9rem;
  color: #112d4e;
  text-align: center;
`;
