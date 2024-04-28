import { useState, useEffect } from "react";
import { useCalculatePage } from "./useCalculatePage";
import { filterImages } from "./dataFetchFilter/filterImages";
import axios from "axios";
export const useGetData = (value, PageCount, selectedIcon, searchTerm) => {
  const [svgImages, setSvgImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const {
    currentImages,
    currentPage,
    setCurrentPage,
    totalPages,
    paginate,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
  } = useCalculatePage(PageCount, filteredImages);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: userData } = await axios.get("/contents/svgsdata");
        const { data: contentData } = await axios.get("/contents/contents");
        const contents = contentData;
        setSvgImages(userData[0].svgs);

        // 조건부 필터링기능 ( 필터 , 검색)
        const images = await filterImages(
          contents,
          searchTerm,
          value,
          selectedIcon
        );
        setFilteredImages(images);

        if (searchTerm || selectedIcon) {
          setCurrentPage(1);
          sessionStorage.setItem("currentPage", "1");
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [value.value, selectedIcon, searchTerm]);

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
