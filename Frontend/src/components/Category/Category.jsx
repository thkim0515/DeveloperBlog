import * as S from "./Category.style";
import { useState } from "react";
import { useGetData } from "../../hooks/useGetData";
const mock = {
  all: ["JavaScript", "TypeScript", "HTML", "CSS", "Java", "C", "Node.js", "Spring"],
  frontend: ["HTML", "CSS", "JavaScript, TypeScript", "React", "Next.js", "Vue.js", "Svelt"],
  backend: ["Java", "C", "Node.js", "Spring"],
};

export const Category = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const onChangeValue = e => {
    const value = e.target.value;
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  return (
    <>
      <S.CategoryBox>
        <S.Select value={selectedCategory} onChange={onChangeValue}>
          <option disabled>카테고리</option>
          <option value="all">전체</option>
          <option value="frontend">프론트엔드</option>
          <option value="backend">백엔드</option>
          <option value="etc">다른 언어</option>
        </S.Select>

        {/* <S.SearchBox>
          <S.Input type="text" />
          <S.Button>검색</S.Button>
        </S.SearchBox> */}
      </S.CategoryBox>
    </>
  );
};
