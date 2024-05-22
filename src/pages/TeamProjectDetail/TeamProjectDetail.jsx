import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// components
import { ProjectInformation } from "./ProjectInformation/ProjectInformation";
import { ProjectContent } from "./ProjectContent/ProjectContent";
import { ProjectComments } from "./ProjectComments/ProjectComments";
import { ProjectMember } from "./ProjectMember/ProjectMember";

// context
import { useUserLogin } from "../../context/UserLoginContext";

// hooks
import { useScrollReset } from "../../hooks/useScrollReset";

export const TeamProjectDetail = () => {
  const location = useLocation();
  const { data } = location.state;
  const { user } = useUserLogin();
  const userId = user && user.id ? user.id : null;
  const [ptPostingId, setPtPostingId] = useState(null);

  const navigate = useNavigate();
  const updateContents = _id => () => {
    navigate(`/projectEdit/${_id}`, { state: { _id } });
  };

  useScrollReset();

  useEffect(() => {
    axios
      .post("/project/view", { _id: data._id })
      .then(() => setPtPostingId(data.userId._id))
      .catch(error => console.error("Error:", error));
  }, [data._id]);

  useEffect(() => {
    if (data) {
      setPtPostingId(data);
    }
  }, [data]);

  return (
    <TeamProjectDetailBox>
      <Buttons>
        <button className="back-button" onClick={() => navigate("/teamProject")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {user && userId === ptPostingId && (
          <Button variant="info" onClick={updateContents(data._id)}>
            수정하기
          </Button>
        )}
      </Buttons>

      <ProjectInformation data={data} />
      <ProjectMember
        postid={data._id}
        memberList={data.memberList}
        participateList={data.participateList}
        userid={data.userId._id}
      />
      <ProjectContent content={data.content} />
      <ProjectComments content={data} />
    </TeamProjectDetailBox>
  );
};

const TeamProjectDetailBox = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0.25rem 3.5rem 0.75rem 3.5rem;
`;

const Buttons = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;

  .back-button {
    font-size: 1.5rem;
    width: 42px;
    height: 42px;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid #ebebeb;
      border-radius: 3px;
    }
  }
`;
