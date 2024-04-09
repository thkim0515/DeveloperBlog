import styled from "styled-components";

// form
export const SignUpFiled = styled.div`
  label {
    display: inline-block;
  }

  div {
    position: relative;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"] {
    width: 100%;
    margin: 0.5rem 0 0.75rem 0;
    padding: 0.75rem;
    display: inline-block;
    border: 1px solid #d9d9d9;
    background: #ffffff;
  }

  input[type="text"]:focus,
  input[type="password"]:focus,
  input[type="email"]:focus {
    background-color: #dbe2ef;
    outline: none;
  }
`;

export const SignUpButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-style: none;
  border-radius: 20px;
  color: #ffffff;
  background-color: #3f72af;
`;

export const MoveLink = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #112d4e;
  text-align: center;
`;
