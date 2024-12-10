import styled from "styled-components";

// 카테고리
export const CategoryBox = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  border-radius: 20px;
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  min-width: 120px;

  &:focus {
    outline: none;
    border-color: #999;
  }
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #999;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #f06b6b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e45b5b;
  }
`;

// 카테고리 선택
export const ValueBox = styled.div`
  margin-top: 2rem;
  background-color: #ffffff;
  border-radius: 20px;
`;
