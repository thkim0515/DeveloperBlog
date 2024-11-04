import styled from "styled-components";
import { PostCard } from "../PostCard/PostCard";

const PostListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.125rem;
  margin: 2.75rem 0;
`;

export const PostList = ({ post }) => {
  return (
    <PostListBox>
      {post.map((data, idx) => (
        <PostCard key={`post-${idx}`} post={data} />
      ))}
    </PostListBox>
  );
};
