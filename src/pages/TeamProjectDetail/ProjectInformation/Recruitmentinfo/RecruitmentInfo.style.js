import styled from "styled-components";

export const Table = styled.table`
  margin: 0 auto 1rem;
  border-collapse: collapse;
  width: 80%;
`;

export const TR = styled.tr`
  .recruitment-info-title {
    padding: 10px;
    text-align: center;
    color: #3e4756;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const ProjectRole = styled.li`
  display: inline-block;
  padding: 0.188rem 0.625rem;
  margin-right: 0.5rem;
  height: 22px;
  background: #f2f4f8;
  border-radius: 14px;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 0.75rem;
  color: #3e86f5;
`;

export const IconBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;

  li {
    width: 36px;
    list-style: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
