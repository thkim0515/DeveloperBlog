import styled from "styled-components";

export const TeamProjectBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  place-items: center;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

export const TeamProjectTitle = styled.h2`
  color: #112d4e;
  max-width: 1000px;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
