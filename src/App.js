import { DynamicContent } from "./js/dummy";
import { ImageGallery } from "./components/ImageGallery";
import { Refact } from "./components/Refact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ImageItem } from "./components/imagegallery/ImageGalleryComponents/ImageItem";
import { PostDetail } from "./components/imagegallery/ImageGalleryComponents/postDetail";

export function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/image/:id" element={<PostDetail />} />
        </Routes>
      </div>
      {/* <DynamicContent /> */}
      {/* <ImageGallery /> */}
      <Refact />
    </>
  );
}
