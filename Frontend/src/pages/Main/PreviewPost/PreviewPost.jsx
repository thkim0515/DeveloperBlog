import * as S from "./PreviewPost.style";
import { PostList } from "../../../components/PostList/PostList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PreviewPost = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("/main/data");
      setPost(response.data.codes);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.PreviewPostBox>
      <h2>새로 업로드된 글</h2>
      <PostList post={post} />
      <S.MoreButton>
        <button onClick={() => navigate("/blog")}>더보기</button>
      </S.MoreButton>
    </S.PreviewPostBox>
  );
};
