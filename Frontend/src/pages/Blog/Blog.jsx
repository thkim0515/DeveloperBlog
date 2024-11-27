import { Metas } from "../../components/common/Metas";
import { PostList } from "../../components/PostList/PostList";
import { Category } from "../../components/Category/Category";
import { useFetchData } from "../../hooks/useFetchData";
import { ImageGrid } from "../../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { useState } from "react";
// import { Imagegrid } from "./../../components/imagegallery/ImageGalleryComponents/ImageGrid";
export const Blog = () => {
  const [data, loading, error] = useFetchData("/contents/contents");
  const value = "all";

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  return (
    <>
      {/* <Metas main="main" />
      <Category />
      <ImageGrid value={value} /> */}
      <Metas main="main" />
      <Category onCategoryChange={handleCategoryChange} />
      <ImageGrid value={selectedCategory} />
    </>
  );
};
