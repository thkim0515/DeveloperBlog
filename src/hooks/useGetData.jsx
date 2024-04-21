import { useState, useEffect } from "react";
import { useCalculatePage } from "./useCalculatePage";
import { getFromDB } from "./dataFetchFilter/getFromDB";
import { filterImages } from "./dataFetchFilter/filterImages";
import { decryptData } from "../js/secure";
export const useGetData = (
  value,
  PageCount,
  selectedIcon,
  searchTerm,
  selectInfo
) => {
  const [svgImages, setSvgImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]); // publicPrivate가 true인 이미지만 필터링해서 저장하는 상태, 그 상태에서 필터링 효과도 동시 적용
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
        await getFromDB();

        const storedContents = await decryptData("contents", localStorage);
        const storedSvgImages = await decryptData("svgImages", localStorage);

        let contents = [];

        if (storedContents && storedSvgImages) {
          contents = storedContents;
          setSvgImages(storedSvgImages);
        }

        // 조건부 필터링기능 ( 필터 , 검색)
        const images = await filterImages(
          contents,
          searchTerm,
          value,
          selectedIcon
        );
        setFilteredImages(images);

        setCurrentPage(1);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
    //  현재페이지     겔러리 구분   아이콘 필터    검색 구문    필터 조건
  }, [
    setCurrentPage,
    value.value,
    selectedIcon,
    searchTerm,
    selectInfo,
    setFilteredImages,
  ]);

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
