import styled from "styled-components";

// components
import { ProjectEditForm } from "./ProjectEditForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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

  return (
    <section>
      <H2>팀 프로젝트 글 수정</H2>
      <Box>
        <ProjectEditForm postData={postData} />
      </Box>
    </section>
  );
};

const H2 = styled.h2`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Box = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  background-color: #ffffff;
`;
