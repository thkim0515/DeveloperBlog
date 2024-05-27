import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Metas } from "../../components/common/Metas";
import { CodeList } from "./CodeList";
import { ProjectList } from "./ProjecList";
import { timeStringWithKo } from "../../utils/timeString";

export const Main = () => {
  const [codeList, setCodeList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const navigate = useNavigate();

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

  const handleButton = e => {
    if (e.target.name === "code") {
      navigate("/codeMain");
    } else {
      navigate("/teamProject");
    }
  };

  return (
    <>
      <Metas main="main" />
      <MainBox>
        <div>
          <Box>
            <h2 className="main-subtitle">최신 Code</h2>
            <div>
              <Button name="code" onClick={handleButton}>
                더 보러가기
              </Button>
            </div>
          </Box>
          <CodeList codeList={codeList} />
        </div>

        <div>
          <Box>
            <h2 className="main-subtitle">팀 프로젝트 모집</h2>
            <div>
              <Button name="project" onClick={handleButton}>
                더 보러가기
              </Button>
            </div>
          </Box>
          <ProjectList projectList={projectList} />
        </div>
      </MainBox>
    </>
  );
};

const MainBox = styled.div`
  .main-subtitle {
    font-size: 1.5rem;
    font-weight: bold;
    color: #112d4e;
  }
`;

const Button = styled.button`
  background-color: #dbe2ef;
  width: 120px;
  padding: 10px 0;
  border-radius: 12px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 36px 0;
`;
