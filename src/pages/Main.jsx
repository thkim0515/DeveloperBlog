import { ImageGrid } from "../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { Helmet } from "react-helmet-async";
import { LiveChat } from "../components/LiveChat";
export const Main = () => {
  const value = "all";

  return (
    <div>
      <Helmet>
        <title>우리의 지식이 별이 되는 공간 - StarBlog</title>
      </Helmet>
      <ImageGrid value={value} />
      <LiveChat />
    </div>
  );
};
