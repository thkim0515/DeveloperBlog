import { Metas } from "../../components/common/Metas";
import { PostList } from "../../components/PostList/PostList";
import { Category } from "../../components/Category/Category";
import { useFetchData } from "../../hooks/useFetchData";
import { ImageGrid } from "../../components/imagegallery/ImageGalleryComponents/ImageGrid";
// import { Imagegrid } from "./../../components/imagegallery/ImageGalleryComponents/ImageGrid";
export const Blog = () => {
  const [data, loading, error] = useFetchData("/contents/contents");
  const value = "all";
  return (
    <>
      <Metas main="main" />
      <Category />
      <ImageGrid value={value} />
      {/* <PostList post={data} /> */}
    </>
  );
};
