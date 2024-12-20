import { useState, useEffect } from "react";
import { useCalculatePage } from "./useCalculatePage";
import { filterImages } from "./dataFetchFilter/filterImages";
import { filterByCategory } from "../utils/filterByCategory";
import axios from "axios";
export const useGetData = (value, PageCount, selectedIcon, searchTerm) => {
  const [svgImages, setSvgImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const { currentImages, currentPage, setCurrentPage, totalPages, paginate, nextPage, prevPage, firstPage, lastPage } =
    useCalculatePage(PageCount, filteredImages);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: userData } = await axios.get("/contents/svgsdata");
        const { data: contentData } = await axios.get("/contents/contents");
        const contents = contentData;
        setSvgImages(userData[0].svgs);

        const filterLanguage = filterByCategory(value, svgImages);

        // 조건부 필터링기능 ( 필터 , 검색)
        const images = await filterImages(
          contents,
          searchTerm.replace(/[A-Za-z]+/g, match => match.toLowerCase()),
          value,
          selectedIcon,
          filterLanguage
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
  }, [value, selectedIcon, searchTerm]);

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
