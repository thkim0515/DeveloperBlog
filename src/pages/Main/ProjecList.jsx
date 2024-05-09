import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export const ProjectList = () => {
  const [projectList, setProjectList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("/project/project");
      // 처음 세 항목만 가져와서 projectList에 할당
      setProjectList(res.data.slice(0, 3)); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SProjectListBox>
      {projectList &&
        projectList.map((item, idx) => <ProjectCard key={idx} data={item} />)}
    </SProjectListBox>
  );
};

const SProjectListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
