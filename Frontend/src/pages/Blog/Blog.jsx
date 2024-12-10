import { Category } from "../../components/Category/Category";
// import { PostList } from "../../components/PostList/PostList";
// import { useFetchData } from "../../hooks/useFetchData";
import { ImageGrid } from "../../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { useState } from "react";

export const Blog = () => {
  // const [data, loading, error] = useFetchData("/contents/contents");
  const value = "all";

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Category onCategoryChange={handleCategoryChange} />
      <ImageGrid value={selectedCategory} />
    </>
  );
};
