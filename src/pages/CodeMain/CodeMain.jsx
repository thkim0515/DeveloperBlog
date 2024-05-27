import { Metas } from "../../components/common/Metas";
import { ImageGrid } from "../../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { WriteButton } from "../../components/common/WriteButton";
import { TeamProjectTitle } from "../TeamProject/TeamProject.style";

export const CodeMain = () => {
  const value = "all";

  return (
    <div>
      <Metas main="main" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <TeamProjectTitle>Code</TeamProjectTitle>
        <WriteButton />
      </div>
      <ImageGrid value={value} />
    </div>
  );
};
