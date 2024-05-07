import styled from "styled-components";

export const UuorderListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, max-content));
`;

export const Li = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.5rem 0;
  font-weight: 700;
  font-size: 1.25rem;

  &:not(:nth-child(even)) {
    margin-right: 2rem;
  }

  .title {
    color: #717171;
    margin-right: 1.5rem;
  }
`;

export const RoleBox = styled.ul`
  display: flex;

  li {
    display: inline-block;
    padding: 0.188rem 0.625rem;
    height: 22px;
    background: #f2f4f8;
    border-radius: 14px;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.75rem;
    color: #3e86f5;
    margin-right: 0.5rem;
  }
`;

export const IconBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 36px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
  }
`;
