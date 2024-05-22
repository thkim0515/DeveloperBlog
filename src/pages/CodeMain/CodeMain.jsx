import { Metas } from "../../components/common/Metas";
import { ImageGrid } from "../../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { WriteButton } from "../../components/imagegallery/WriteButton";

export const CodeMain = () => {
  const value = "all";

  return (
    <div>
      <Metas main="main" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Code</h2>
        <WriteButton />
      </div>
      <ImageGrid value={value} />
    </div>
  );
};
