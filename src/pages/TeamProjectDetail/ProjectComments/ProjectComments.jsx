import styled from "styled-components";
import { UserProfileBox } from "./../../../components/user/UserProfileBox";
import { LikeButton } from "../../../components/imagegallery/ImageGalleryComponents/LikeButton";
import { useUserLogin } from "../../../context/UserLoginContext";
import { useState } from "react";
export const ProjectComments = (content_id) => {
  const { user } = useUserLogin();
  const userId = user && user.id ? user.id : null;

  return (
    <section>
      <LikeButton
        content_id={content_id.content_id}
        user_id={userId}
        boardSortation="project"
      />
      <h3>댓글</h3>
      <CommentForm>
        <input type="text" placeholder="댓글을 입력해주세요." />
        <button type="submit">작성</button>
      </CommentForm>
      <CommentContent>
        <UserProfileBox nickname="dd" />
        <p>댓글영역</p>
      </CommentContent>
    </section>
  );
};

const CommentForm = styled.form`
  display: flex;
  margin: 20px auto;

  input {
    width: 90%;
    height: 60px;
    padding: 8px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: 1px solid #dbe2ef;
  }

  button {
    width: 10%;
    height: 60px;
    border: 1px solid #dbe2ef;
    color: #112d4e;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const CommentContent = styled.div`
  margin-bottom: 1.75rem;
  padding: 1rem 0;
  border-bottom: 1px solid #dbe2ef;

  div {
    margin-bottom: 1rem;
  }
`;
