import Pagination from "react-bootstrap/Pagination";
import { useState, useEffect } from "react";

export const BPagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
    setDisplayData(
      data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    );
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Display data */}
      <ul>
        {displayData.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
      {/* Pagination controls */}
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <Pagination.Item key={page} onClick={() => handlePageChange(page)}>
              {page}
            </Pagination.Item>
          )
        )}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default Pagination;
