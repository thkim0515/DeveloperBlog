import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Comment } from "../../../components/Comment/Comment";
import { LikeButton } from "./../../../components/imagegallery/ImageGalleryComponents/LikeButton";

// context
import { useUserLogin } from "../../../context/UserLoginContext";

export const ProjectComments = ({ content }) => {
  const location = useLocation();
  const { data } = location.state;
  const { user } = useUserLogin();
  const userId = user && user.id ? user.id : null;

  return (
    <ProjectCommentBox>
      <LikeButton
        content_id={data._id}
        user_id={userId}
        boardSortation="project"
      />
      <Comment content={content} />
    </ProjectCommentBox>
  );
};

const ProjectCommentBox = styled.div`
  position: relative;

  > div:nth-child(1) {
    position: absolute;
    top: 20px;
    right: 10px;
  }
`;
