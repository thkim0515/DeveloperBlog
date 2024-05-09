import * as S from "./TeamProject.style";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// components
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Metas } from "../../components/common/Metas";

import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

export const TeamProject = () => {
  const [projectData, setProjectData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("/project/project");
      setProjectData(res.data);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const { sentinelRef } = useInfiniteScroll(fetchData);

  const handleSearchProject = useCallback((e) => {
    const { value } = e.target;
    setSearch(value);
  }, []);

  const getFilteredData = () => {
    if (search === "") {
      return projectData;
    }

    return projectData.filter((project) =>
      project.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  const filteredProject = getFilteredData();

  return (
    <>
      <Metas title="Team Project" />
      <section>
        <S.TeamProjectTitle>Team Project</S.TeamProjectTitle>
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
          {filteredProject.map((item, idx) => (
            <ProjectCard key={idx} data={item} />
          ))}
        </S.TeamProjectBox>
        {isLoading && <div>Loading...</div>}
        <div ref={sentinelRef}></div>
      </section>
    </>
  );
};
