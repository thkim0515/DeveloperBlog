import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

// components
import { ProjectEditForm } from "./ProjectEditForm";

export const TeamProjectEdit = () => {
  const [postData, setPostData] = useState([]);
  let params = useParams();
  const _id = params._id;

  useEffect(() => {
    const fetchData = async () => {
      if (_id) {
        try {
          const response = await axios.get(`/project/read/${_id}`);
          const data = response.data;
          setPostData({
            ...data,
          });
        } catch (error) {
          console.error("에러:", error);
        }
      }
    };

    fetchData();
  }, [_id]);

  const handleDeleteProject = async (_id) => {
    alert("정말 삭제하시겠습니까?");
    try {
      await axios.delete(`/delete/${_id}`);
    } catch (error) {
      console.error("에러:", error);
      alert("삭제 실패");
    }
  };

  return (
    <section>
      <H2>팀 프로젝트 글 수정</H2>
      <Box>
        <Button
          className="delete-button"
          variant="info"
          onClick={() => handleDeleteProject(_id)}
        >
          삭제하기
        </Button>
        <ProjectEditForm postData={postData} />
      </Box>
    </section>
  );
};

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 4.25rem;
  margin-bottom: 1.5rem;
`;

const Box = styled.section`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  background-color: #ffffff;

  .delete-button {
    position: absolute;
    right: 30px;
    top: 20px;
  }
`;
