import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PostUpdatData } from "../CodeCreate/PostUpdatData";

export const PostUpdate = () => {
  let { _id } = useParams();

  return (
    <div>
      <Helmet>
        <title>PostUpdate - StarBlog</title>
      </Helmet>
      <PostUpdatData _id={_id} />
    </div>
  );
};
