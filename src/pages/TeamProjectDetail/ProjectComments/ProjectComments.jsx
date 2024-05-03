import { Comment } from "../../../components/Comment/Comment";

export const ProjectComments = ({ content }) => {
  return (
    <section>
      <Comment content={content} />
    </section>
  );
};
