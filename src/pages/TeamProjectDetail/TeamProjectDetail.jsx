// components
import { ProjectInformation } from "./ProjectInformation/ProjectInformation";
import { ProjectContent } from "./ProjectContent/ProjectContent";
import { ProjectComments } from "./ProjectComments/ProjectComments";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { decryptData } from "../../js/secure";
export const TeamProjectDetail = () => {
  const location = useLocation();
  const { data } = location.state;

  const navigate = useNavigate();
  const updateContents = (_id) => () => {
    navigate(`/projectEdit/${_id}`, { state: { _id } });
  };

  return (
    <TeamProjectDetailBox>
      <button
        onClick={updateContents(data._id)}
        style={{
          fontSize: "3rem",
          border: "2px solid black",
          backgroundColor: "yellow",
        }}
      >
        수정하기
      </button>
      <ProjectInformation data={data} />
      <ProjectContent content={data.content} />
      <ProjectComments content_id={data._id} />
    </TeamProjectDetailBox>
  );
};

const TeamProjectDetailBox = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0.25rem 3.5rem 0.75rem 3.5rem;
`;
