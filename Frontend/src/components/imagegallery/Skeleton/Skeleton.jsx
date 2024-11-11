import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 0.5; }
  100% { opacity: 0.8; }
`;

const SkeletonCardBox = styled.div`
  width: calc(33.333% - 14px);
  height: 240px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #dbe2ef;
  border-radius: 12px;
  background-color: #cccaca;
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
`;

const SkeletonCardTop = styled.div`
  height: 48px;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
`;

const SkeletonCardBody = styled.div`
  height: calc(100% - 48px);
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
`;

const SkeletonCardBottom = styled.div`
  height: 25%;
  display: flex;
  padding: 0 10px;
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
`;

export const Skeleton = () => {
  return (
    <SkeletonCardBox>
      <SkeletonCardTop></SkeletonCardTop>
      <SkeletonCardBody></SkeletonCardBody>
      <SkeletonCardBottom></SkeletonCardBottom>
    </SkeletonCardBox>
  );
};
