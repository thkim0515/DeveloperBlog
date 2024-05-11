import styled from "styled-components";

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SignUpFiled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.65rem;
  border: 1px solid #d9d9d9;
  background: #ffffff;

  &:focus {
    background-color: #dbe2ef;
    outline: none;
  }
`;

export const SignUpTitle = styled.p`
  font-size: 1.375rem;
  text-align: center;
  margin: 0.75rem 0 1.25rem 0;
`;

export const SignUpButton = styled.button`
  width: 100%;
  margin: 0.5rem 0 1.25rem;
  padding: 0.75rem;
  border-style: none;
  border-radius: 20px;
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? "#c0c0c0" : "#3f72af")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#c0c0c0" : "#2a5298")};
  }
`;

// export const PasswordStrength = styled.span`
//   color: ${(props) => {
//     switch (props.children) {
//       case "Weak":
//         return "#ff4d4f";
//       case "Medium":
//         return "#faad14";
//       case "Strong":
//         return "#52c41a";
//       default:
//         return "#ff4d4f";
//     }
//   }};
// `;

export const MoveLink = styled.p`
  font-size: 0.9rem;
  color: #112d4e;
  text-align: center;
`;
