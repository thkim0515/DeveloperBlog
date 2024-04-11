import { PostUpdatData } from "../CodeCreate/PostUpdatData";
import { useParams } from "react-router-dom";

export const PostUpdate = () => {
  let { _id } = useParams();

  return (
    <div>
      <PostUpdatData _id={_id} />
    </div>
  );
};
