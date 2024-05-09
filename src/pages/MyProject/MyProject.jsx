import { useState, useEffect } from "react";
import axios from "axios";
import { Metas } from "../../components/common/Metas";
import { WriteButton } from "../../components/imagegallery/WriteButton";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export const MyProject = () => {
  const [projectData, setProjectData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("/project/project");
      setProjectData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Metas title="내 프로젝트" none />
      <div>내 프로젝트</div>
      <WriteButton project />
      {projectData.map((project, idx) => (
        <ProjectCard key={idx} data={project} />
      ))}
    </>
  );
};
