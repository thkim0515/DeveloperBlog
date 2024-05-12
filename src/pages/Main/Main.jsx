import { Metas } from "../../components/common/Metas";
import { CodeList } from "./CodeList";
import { ProjectList } from "./ProjecList";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { timeStringWithKo } from "../../utils/timeString";
export const Main = () => {
  const [codeList, setCodeList] = useState([]);
  const [projectList, setProjectList] = useState([]);

  const timestamp = sessionStorage.getItem("timestamp");
  if (!timestamp) {
    const currentTimestamp = timeStringWithKo();
    sessionStorage.setItem("timestamp", currentTimestamp);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/main/data");
        setCodeList(data.codes);
        setProjectList(data.projects);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <SMainBox>
      <Metas main="main" />
      <h2 className="main-subtitle">최신 Code</h2>
      <CodeList codeList={codeList} />
      <h2 className="main-subtitle">팀 프로젝트 모집</h2>
      <ProjectList projectList={projectList} />
    </SMainBox>
  );
};

const SMainBox = styled.div`
  .main-subtitle {
    font-size: 1.5rem;
    font-weight: bold;
    color: #112d4e;
    margin: 36px 0;
  }
`;
