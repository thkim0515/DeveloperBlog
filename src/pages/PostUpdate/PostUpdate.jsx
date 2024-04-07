import { PostUpdatData } from "../CodeCreate/PostUpdatData";
import { useParams } from "react-router-dom";

export const PostUpdate = () => {
  let { pid } = useParams();
  return (
    <div>
      <PostUpdatData isPid={pid} />
    </div>
  );
};
