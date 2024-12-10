import styled, { keyframes } from "styled-components";

const moveBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -200px 0; // 이미지가 왼쪽으로 이동
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px); 
  }
`;

export const BannerBox = styled.section`
  padding: 0 1.5rem;
  margin-bottom: 2.5rem;
`;

export const Banner = styled.div`
  background-image: url("/galaxy.webp");
  background-repeat: repeat-x;
  background-size: cover;
  display: flex;
  align-items: center;
  width: 100%;
  height: 360px;
  border-radius: 20px;
  animation: ${moveBackground} 20s linear infinite;
`;

export const BannerText = styled.div`
  color: #ffffff;
  font-size: 2rem;
  padding-left: 5rem;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  font-weight: bold;
  opacity: 1;
  animation: ${({ $isFading }) => ($isFading ? fadeOut : fadeIn)} 0.5s ease-in-out;
`;
