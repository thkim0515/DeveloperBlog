import { ImageGrid } from "../../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { Metas } from "./../../components/common/Metas";
import { WriteButton } from "../../components/imagegallery/WriteButton";

export const MyCodes = () => {

  const value = "my";

  return (
    <div>
      <Metas title="내 코드" none />
      <WriteButton/>
      <ImageGrid value={value} />
    </div>
  );
};
