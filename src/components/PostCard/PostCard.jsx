import styled from "styled-components";
import { PostCardHeader } from "./PostCardHeader/PostCardHeader";
import { PostCardBody } from "./PostCardBody/PostCardBody";
import { PostCardFooter } from "./PostCardFooter/PostCardFooter";
import { useNavigate } from "react-router-dom";

const PostCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 13px 15px 14px -5px rgba(212, 207, 207, 0.75);
  -webkit-box-shadow: 13px 15px 14px -5px rgba(212, 207, 207, 0.75);
  -moz-box-shadow: 13px 15px 14px -5px rgba(212, 207, 207, 0.75);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PostCard = ({ post }) => {
  const navigate = useNavigate();
  // const onClickPostCard = () => {
  //   if (post) {
  //     navigate(`/post/${post._id}`, { state: { post } });
  //   }
  // };

  return (
    <PostCardBox>
      <PostCardHeader language={post.language} />
      <PostCardBody title={post.title} postdate={post.postdate} />
      <PostCardFooter {...post} />
    </PostCardBox>
  );
};
