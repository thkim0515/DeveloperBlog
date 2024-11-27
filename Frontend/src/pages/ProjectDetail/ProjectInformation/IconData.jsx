import styled from "styled-components";

export const IconData = ({ iconElement, label }) => {
  return (
    <IconBox>
      {iconElement}
      <span>{label}</span>
    </IconBox>
  );
};

const IconBox = styled.div`
  display: inline-block;

  span {
    margin-left: 1rem;
  }
`;
