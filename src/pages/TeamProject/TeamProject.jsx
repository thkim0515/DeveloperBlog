import * as S from "./TeamProject.style";
import { useState, useEffect } from "react";

import { ProjectCard } from "./ProjectCard/ProjectCard";
import { MainPagination } from "../../components/imagegallery/ImageGalleryComponents/MainPagination";

// hooks
import { useGetData } from "../../hooks/useGetData";
import axios from "axios";

export const TeamProject = () => {
  const [projectData, setProjectData] = useState([]);

  const maxcount = 9;
  const {
    currentPage,
    totalPages,
    paginate,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
  } = useGetData(maxcount);

  useEffect(() => {
    axios
      .get("/json/getProjectData.json")
      .then((res) => setProjectData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Team Project 모집</h2>
      <S.TeamProjectBox>
        {projectData.map((data) => (
          <ProjectCard key={data.id} props={data} />
        ))}
      </S.TeamProjectBox>
      <MainPagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        firstPage={firstPage}
        lastPage={lastPage}
      />
    </>
  );
};
