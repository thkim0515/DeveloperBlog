import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

// components
import { ProjectInformation } from "./ProjectInformation/ProjectInformation";
import { ProjectContent } from "./ProjectContent/ProjectContent";
import { ProjectComments } from "./ProjectComments/ProjectComments";

export const TeamProjectDetail = () => {
  const location = useLocation();
  const { data } = location.state;

  const navigate = useNavigate();
  const updateContents = (_id) => () => {
    navigate(`/projectEdit/${_id}`, { state: { _id } });
  };

  useEffect(() => {
    axios
      .post("/project/view", { _id: data._id })
      .catch((error) => console.error("Error:", error));
  }, [data._id]);

  return (
    <TeamProjectDetailBox>
      <Button
        className="edit-button"
        variant="info"
        onClick={updateContents(data._id)}
      >
        수정하기
      </Button>
      <ProjectInformation data={data} />
      <ProjectContent content={data.content} />
      <ProjectComments content={data} />
      {/* 임시 style 적용 */}
      <div style={{ borderTop: "3px dashed #dbe2ef", padding: "2rem 0" }}>
        <h2>프로젝트 모집 현황</h2>
        <p>OO님이 프로젝트에 합류했어요!</p>
      </div>
    </TeamProjectDetailBox>
  );
};

const TeamProjectDetailBox = styled.section`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0.25rem 3.5rem 0.75rem 3.5rem;

  .edit-button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
