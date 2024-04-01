import { ImageGrid } from "./ImageGalleryComponents/ImageGrid";

export const ImageGallery = () => {
  const value = "all";
  return (
    <div>
      <ImageGrid value={value} />
    </div>
  );
};
