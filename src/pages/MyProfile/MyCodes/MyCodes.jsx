import { ImageGrid } from "../../../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { Metas } from "../../../components/common/Metas";
import { WriteButton } from "../../../components/imagegallery/WriteButton";

export const MyCodes = () => {
  const value = "my";

  return (
    <div>
      <Metas title="My Codes" none />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>My Code</h2>
        <WriteButton />
      </div>
      <ImageGrid value={value} />
    </div>
  );
};
