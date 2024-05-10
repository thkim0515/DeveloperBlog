import styled from "styled-components";
import { useState, forwardRef } from "react";

const isValidName = (name) => {
  return name.trim() !== "";
};

export const InputField = forwardRef(({ type, id, content, onChange }, ref) => {
  const [isValid, setIsValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setIsValid(isValidName(value));
    onChange(e);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <InputBox>
      <Input
        type={type}
        id={`${id}Field`}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={ref}
        isValid={isValid}
        isFocused={isFocused}
      />
      <Label
        htmlFor={`${id}Field`}
        className={!isValid ? "invalid" : ""}
        isFocused={isFocused}
      >
        {content}
      </Label>
    </InputBox>
  );
});

const InputBox = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  left: ${(props) => (props.isFocused ? "5px" : "20px")};
  top: ${(props) => (props.isFocused ? "-10px" : "15px")};
  transition: all 0.3s ease;
  pointer-events: none;
  color: #aaaaaa;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 0.65rem;
  border: 1px solid #d9d9d9;
  background: #ffffff;

  &:focus + ${Label} {
    left: 5px;
    top: -22px;
    color: #000000;
  }
`;
