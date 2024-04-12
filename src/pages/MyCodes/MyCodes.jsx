import { Helmet } from "react-helmet-async";
import { ImageGrid } from "../../components/imagegallery/ImageGalleryComponents/ImageGrid";

export const MyCodes = () => {
  const value = "my";

  return (
    <div>
      <Helmet>
        <title>MyCodes - StarBlog</title>
      </Helmet>
      <ImageGrid value={value} />
    </div>
  );
};
