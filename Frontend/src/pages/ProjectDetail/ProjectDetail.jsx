import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as S from "./ProjectDetail.style";

// components
import { ProjectInformation } from "./ProjectInformation/ProjectInformation";
import { ProjectContent } from "./ProjectContent";
import { ProjectComments } from "./ProjectComments";
import { ProjectTeam } from "./ProjectTeam";
import { ProjectMember } from "./ProjectMember/ProjectMember";
import { ProjectTitle } from "./ProjectTitle/ProjectTitle";

// context
import { useUserLogin } from "../../context/UserLoginContext";

// hooks

export const ProjectDetail = () => {
  const location = useLocation();
  const { data } = location.state;
  const { user } = useUserLogin();
  const userId = user && user.id ? user.id : null;
  const [ptPostingId, setPtPostingId] = useState(null);

  const navigate = useNavigate();
  const updateContents = _id => () => {
    navigate(`/projectEdit/${_id}`, { state: { _id } });
  };

  useEffect(() => {
    axios
      .post("/project/view", { _id: data._id })
      .then(() => setPtPostingId(data.userId._id))
      .catch(error => console.error("Error:", error));
  }, [data]);

  return (
    <S.ProjectDetailBox>
      <S.Buttons>
        {user && userId === ptPostingId && (
          <Button variant="info" onClick={updateContents(data._id)}>
            수정하기
          </Button>
        )}
      </S.Buttons>
      <ProjectTitle projectData={data} />
      <ProjectContent content={data.content} />
      <ProjectInformation projectData={data} />
      <ProjectTeam />
      {/* <ProjectMember
        postid={data._id}
        memberList={data.memberList}
        participateList={data.participateList}
        userid={data.userId._id}
      /> */}
      <ProjectComments content={data} />
    </S.ProjectDetailBox>
  );
};
