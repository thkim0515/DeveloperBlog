import { ImageGrid } from "../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { Helmet } from "react-helmet-async";

export const Main = () => {
  const value = "all";

  return (
    <div>
      <Helmet>
        <title>StarBlog</title>
      </Helmet>
      <ImageGrid value={value} />
    </div>
  );
};
