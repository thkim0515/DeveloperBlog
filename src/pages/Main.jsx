import { Metas } from "./../components/common/Metas";
import { ImageGrid } from "../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { LiveChatComp } from "../components/LiveChat/LivaChatComp";

export const Main = () => {
  const value = "all";

  return (
    <div>
      <Metas main="main" />
      <LiveChatComp />
      <ImageGrid value={value} />
    </div>
  );
};
