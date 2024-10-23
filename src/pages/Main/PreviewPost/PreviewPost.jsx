import * as S from "./PreviewPost.style";
import { PostCard } from "../../../components/PostCard/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <S.PreviewPostBox>
      <h2>새로 업로드된 글</h2>
      <S.PostCardList>
        {post.map((item, idx) => (
          <PostCard key={`post-${idx}`} post={item} />
        ))}
      </S.PostCardList>
      <S.MoreButton>
        <button>더보기</button>
      </S.MoreButton>
    </S.PreviewPostBox>
  );
};
