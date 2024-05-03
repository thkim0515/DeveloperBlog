import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as colorHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as whiteHeart } from "@fortawesome/free-regular-svg-icons";
import { useLike } from "../../../hooks/useLike";

export function LikeButton({ content_id, user_id, boardSortation }) {
  const { liked, likes, toggleLike } = useLike(
    content_id,
    user_id,
    boardSortation
  );
  const handleLike = () => {
    if (user_id) {
      toggleLike();
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <div
      style={{
        fontSize: "2rem",
        alignItems: "center",
        cursor: "pointer",
      }}
      // marginTop: "1rem",
    >
      <FontAwesomeIcon
        icon={liked ? colorHeart : whiteHeart}
        style={{ margin: "0 10px" }}
        onClick={handleLike}
        color={!user_id ? "gray" : "red"}
      />
      {likes}
    </div>
  );
}
