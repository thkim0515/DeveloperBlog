import { useState, useEffect } from "react";
import axios from "axios";

export function useLike(content_id, user_id) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isToggling, setIsToggling] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/contents/read/${content_id}`);
        if (response.data.likeUser.includes(user_id)) {
          setLiked(true);
        }
        setLikes(response.data.likes);
      } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      }
    }
    fetchData();
  }, [content_id, user_id]);

  const toggleLike = async () => {
    if (isToggling) return;
    setIsToggling(true);
    try {
      await axios.post("/contents/like", { content_id, user_id });
      setLiked(!liked);
      setLikes((prevLikes) => prevLikes + (liked ? -1 : 1));
    } catch (error) {
      console.error("좋아요 처리 중 에러 발생:", error);
    }
    setIsToggling(false);
  };

  return { liked, likes, toggleLike };
}
