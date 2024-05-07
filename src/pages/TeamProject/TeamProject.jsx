import * as S from "./TeamProject.style";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// hooks
import { useGetData } from "../../hooks/useGetData";

// component
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { MainPagination } from "./../../components/imagegallery/ImageGalleryComponents/MainPagination";
import { Metas } from "../../components/common/Metas";

export const TeamProject = () => {
  const [projectData, setProjectData] = useState([]);
  const [search, setSearch] = useState("");

  const maxcount = 9;
  const data = useGetData(maxcount);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("/project/project");
      setProjectData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

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

        <div>
          <MainPagination
            currentPage={data.currentPage}
            totalPages={data.totalPages}
            paginate={data.paginate}
            nextPage={data.nextPage}
            prevPage={data.prevPage}
            firstPage={data.firstPage}
            lastPage={data.lastPage}
          />
        </div>
      </section>
    </>
  );
};
