// import { Pagination } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import styled from "styled-components";

const SPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  .page-link {
    color: #112d4e;
    background-color: #fff;
    border: 1px solid #ccc;
  }

  .page-item.active .page-link {
    z-index: 1;
    color: #fff;
    font-weight: bold;
    background-color: #dbe2ef;
    border-color: #ccc;
  }

  .page-link:focus,
  .page-link:hover {
    color: #112d4e;
    background-color: #fafafa;
    border-color: #ccc;
  }
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
