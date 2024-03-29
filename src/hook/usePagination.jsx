import { useState, useEffect } from "react";
import axios from "axios";

export const usePaginationSetValue = (imagesPerPage) => {
  const [allImages, setAllImages] = useState([]); // 모든 이미지를 저장하는 상태
  const [filteredImages, setFilteredImages] = useState([]); // publicPrivate가 true인 이미지만 필터링해서 저장하는 상태
  const [svgImages, setSvgImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedImages = localStorage.getItem("images");
        const storedSvgImages = localStorage.getItem("svgImages");
        const storedCurrentPage = localStorage.getItem("currentPage");

        let images = [];
        if (storedImages) {
          images = JSON.parse(storedImages);
        } else {
          // 서버에서 이미지 데이터를 가져온다
          const res = await axios.get("/json/dummy.json");
          images = res.data.items;
          // 로컬 스토리지에 이미지 데이터를 저장
          localStorage.setItem("images", JSON.stringify(res.data.items));
          localStorage.setItem("svgImages", JSON.stringify(res.data.svgs));
        }

        setAllImages(images);
        // publicPrivate가 true인 이미지만 필터링하여 상태 업데이트
        setFilteredImages(images.filter((img) => img.publicPrivate));

        if (storedSvgImages) {
          setSvgImages(JSON.parse(storedSvgImages));
        }
        if (storedCurrentPage) {
          setCurrentPage(parseInt(storedCurrentPage));
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  // 현재 페이지에 따른 이미지 계산은 filteredImages를 기준으로 함
  // 이렇게 하면 publicPrivate가 true인 이미지만 페이지네이션 대상이 됨
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  // filteredImages 배열에서 현재 페이지에 해당하는 이미지 목록을 계산
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );
  // 전체 페이지 수는 필터링된 이미지 목록의 길이를 기준으로 계산
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  // 페이지네이션 관련 함수들
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
