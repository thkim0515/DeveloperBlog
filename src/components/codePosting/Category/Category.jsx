import React from "react";
import styled from "styled-components";

export const Category = ({ category, setCategory }) => {
  const svgImages = [
    "html",
    "css",
    "javascript",
    "typescript",
    "java",
    "react",
    "c",
    "python",
    "spring",
    "vue",
    "unknown",
  ];

  const handleCategory = (svgName) => {
    setCategory(svgName);
  };

  return (
    <CategoryBox>
      <p>카테고리를 선택하세요:</p>
      {svgImages.map((svgName, idx) => {
        return (
          <ImageWrapper
            key={idx}
            onClick={() => handleCategory(svgName)}
            $isSelected={category === svgName}
          >
            <img src={`/svg/${svgName}.svg`} alt={svgName} />
          </ImageWrapper>
        );
      })}
      <p className="selected">{category}</p>
    </CategoryBox>
  );
};

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  .selected {
    margin-left: 8px;
  }
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
    transform: scale(${({ $isSelected }) => ($isSelected ? 1.2 : 1)});
  }
`;
