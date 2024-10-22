import styled from "styled-components";
import { PostCard } from "../../../components/PostCard/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";

const PostCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.125rem;
`;

export const PreviewPost = () => {
  const [post, setPost] = useState([]);

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
    <section>
      <h2>새로 업로드된 글</h2>
      <PostCardList>
        {post.map((item, idx) => (
          <PostCard key={`post-${idx}`} post={item} />
        ))}
      </PostCardList>
      <button>더보기</button>
    </section>
  );
};
