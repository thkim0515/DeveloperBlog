import { useState, useEffect } from "react";
import axios from "axios";

export const usePaginationSetValue = (imagesPerPage) => {
  const [images, setImages] = useState([]);
  const [svgImages, setSvgImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedImages = localStorage.getItem("images");
    const storedSvgImages = localStorage.getItem("svgImages");
    const storedCurrentPage = localStorage.getItem("currentPage");

    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
    if (storedSvgImages) {
      setSvgImages(JSON.parse(storedSvgImages));
    }
    if (storedCurrentPage) {
      setCurrentPage(parseInt(storedCurrentPage));
    }
    console.log(
      storedImages + " <> " + storedSvgImages + " <> " + storedCurrentPage
    );
    axios
      .get("/json/dummy.json")
      .then((res) => {
        setImages(res.data.items);
        setSvgImages(res.data.svgs);
        localStorage.setItem("images", JSON.stringify(res.data.items));
        localStorage.setItem("svgImages", JSON.stringify(res.data.svgs));
      })
      .catch((e) => console.error(e));
  }, []);
  //console.log(svgImages ? svgImages : 'noData')

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const firstPage = () => setCurrentPage(1);
  const lastPage = () => setCurrentPage(totalPages);

  return {
    svgImages,
    currentImages,
    currentPage,
    totalPages,
    paginate,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
  };
};
