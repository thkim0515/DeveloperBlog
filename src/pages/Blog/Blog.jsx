import { Metas } from "../../components/common/Metas";
import { PostList } from "../../components/PostList/PostList";
import { Category } from "../../components/Category/Category";
import { useFetchData } from "../../hooks/useFetchData";

export const Blog = () => {
  const [data, loading, error] = useFetchData("/contents/contents");

  return (
    <>
      <Metas main="main" />
      <Category />
      <PostList post={data} />
    </>
  );
};
