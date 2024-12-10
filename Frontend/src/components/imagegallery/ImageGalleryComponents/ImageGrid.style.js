import styled from "styled-components";

export const Container = styled.div`
  //width: 1140px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  //margin: 0 auto;
  //justify-content: center;
`;

export const Spacer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  top: 20px;

  img {
    cursor: pointer;
  }
  div {
    color: #112d4e;
    font-size: 1.5rem;
  }
`;

export const SPContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
