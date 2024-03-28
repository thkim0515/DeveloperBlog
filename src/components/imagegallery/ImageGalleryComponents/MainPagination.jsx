import styled from "styled-components";
import { Pagination } from "react-bootstrap";

const SPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const MainPagination = ({
  currentPage,
  totalPages,
  paginate,
  nextPage,
  prevPage,
  firstPage,
  lastPage,
}) => {
  const startPage = Math.max(currentPage - 2, 1);
  const endPage = Math.min(startPage + 4, totalPages);

  // 부트스트랩 >> https://getbootstrap.kr/docs/5.0/components/pagination/
  // 리엑트 부트스트랩 >> https://react-bootstrap.netlify.app/docs/components/pagination
  // ref . https://codesandbox.io/p/sandbox/react-bootstrap-pagination-example-tpgtb?file=%2Fsrc%2Findex.js
  return (
    <SPagination>
      <Pagination.First onClick={firstPage} />
      <Pagination.Prev onClick={prevPage} />
      {Array.from({ length: endPage - startPage + 1 }, (_, idx) => (
        <Pagination.Item
          key={startPage + idx}
          active={startPage + idx === currentPage}
          onClick={() => paginate(startPage + idx)}
        >
          {startPage + idx}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={nextPage} />
      <Pagination.Last onClick={lastPage} />
    </SPagination>
  );
};
