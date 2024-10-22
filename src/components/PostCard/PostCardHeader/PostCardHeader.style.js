import styled from "styled-components";
import { switchColor } from "../../../utils/switchColor";

export const PostCardHeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ $bgColor }) => switchColor($bgColor)};
  border-radius: 12px 12px 0 0;
  padding: 0.625rem;
`;

export const ProgrammingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 32px;
  height: 32px;
  border-radius: 6px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProgrammingLangauge = styled.span`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
`;
