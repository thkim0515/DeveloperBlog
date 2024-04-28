import * as S from "./TeamProject.style";
import { useState, useEffect } from "react";
import axios from "axios";

// component
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const TeamProject = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    axios
      .get("/mock/projectData.json")
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
    </>
  );
};
