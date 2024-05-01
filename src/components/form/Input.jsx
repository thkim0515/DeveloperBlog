import styled from "styled-components";
import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return <SInput ref={ref} {...props} />;
});

const SInput = styled.input`
  font-family: inherit;
  padding: 0.75rem 0;
  width: 100%;
`;
