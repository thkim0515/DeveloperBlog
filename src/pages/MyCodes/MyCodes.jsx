import { ImageGrid } from "../../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { Metas } from "./../../components/common/Metas";

export const MyCodes = () => {
  const value = "my";

  return (
    <div>
      <Metas title="내 코드" none />
      <ImageGrid value={value} />
    </div>
  );
};
