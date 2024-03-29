import { DynamicContent } from "./js/dummy";
import { ImageGallery } from "./components/ImageGallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostDetail } from "./components/imagegallery/ImageGalleryComponents/postDetail";
import { AnnotationCord } from "./components/AnnotationCord";

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
      <AnnotationCord />
    </>
  );
}
