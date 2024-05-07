import { Metas } from "./../components/common/Metas";
import { ImageGrid } from "../components/imagegallery/ImageGalleryComponents/ImageGrid";

export const Main = () => {
  const value = "all";

  return (
    <div>
      <Metas main="main" />
      <ImageGrid value={value} />
    </div>
  );
};
