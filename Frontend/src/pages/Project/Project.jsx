import * as S from "./Project.style";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Pagination from "react-bootstrap/Pagination";

// hooks
import { useFetchData } from "../../hooks/useFetchData";

// components
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export const Project = () => {
  const [projectData, isLoading, error] = useFetchData("/project/project");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayData, setDisplayData] = useState([]);

  const itemsPerPage = 9;

  // 데이터 필터링 및 페이지네이션 처리
  useEffect(() => {
    const filteredData = getFilteredData();
    setTotalPages(Math.ceil(filteredData.length / itemsPerPage));
    setDisplayData(filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
  }, [projectData, currentPage, search]);

  const handleSearchProject = e => {
    const { value } = e.target;
    setSearch(value);
    setCurrentPage(1);
  };

  const getFilteredData = () => {
    if (search === "") return projectData;
    return projectData.filter(project => project.title.toLowerCase().includes(search.toLowerCase()));
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading projects: {error.message}</p>;
  }

  return (
    <section>
      <InputGroup className="mb-3 mx-auto w-50">
        <Form.Control
          className="py-2"
          placeholder="프로젝트를 검색하세요"
          value={search}
          onChange={handleSearchProject}
        />
        <Button variant="outline-secondary" id="button-addon2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </InputGroup>
      <S.TeamProjectBox>
        {displayData.map((item, idx) => (
          <ProjectCard key={idx} data={item} />
        ))}
      </S.TeamProjectBox>

      {/* 페이지네이션 */}
      <Pagination className="d-flex justify-content-center mt-5">
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
          <Pagination.Item key={page} onClick={() => handlePageChange(page)} active={page === currentPage}>
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </section>
  );
};
