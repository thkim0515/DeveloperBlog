import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
// components
import { ProjectInformation } from "./ProjectInformation/ProjectInformation";
import { ProjectContent } from "./ProjectContent/ProjectContent";
import { ProjectComments } from "./ProjectComments/ProjectComments";
import { LikeButton } from "../../components/imagegallery/ImageGalleryComponents/LikeButton";
import { useUserLogin } from "../../context/UserLoginContext";
import { useEffect } from "react";

export const TeamProjectDetail = () => {
  const location = useLocation();
  const { data } = location.state;
  const { user } = useUserLogin();
  const userId = user && user.id ? user.id : null;

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
      <LikeButton
        content_id={data._id}
        user_id={userId}
        boardSortation="project"
      />
      <ProjectComments content={data} />
    </TeamProjectDetailBox>
  );
};

const TeamProjectDetailBox = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0.25rem 3.5rem 0.75rem 3.5rem;
`;
