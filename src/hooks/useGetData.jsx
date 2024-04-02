import { useState, useEffect, useNavigate } from "react";
import { useCalculatePage } from "./useCalculatePage";
import axios from "axios";

export const useGetData = (
  value,
  PageCount = 9,
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
        const storedImages = localStorage.getItem("images");
        const storedSvgImages = localStorage.getItem("svgImages");
        let res;
        let res2;
        let response;
        let response2;
        let images = [];
        let images2 = [];
        // SOLVED . 첫화면에서 svg 배열 안띄워짐 >> 빈 배열 반환 >> 우선순위로 데이터 삽입
        if (storedImages) {
          images = JSON.parse(storedImages);
        } else {
          try {
            // DB 파싱
            res = await axios.get("/userdata");
            res2 = await axios.get("/contents");
            response = res.data[0];
            response2 = res2;
          } catch (e) {
            // 실패시 JSON 파싱
            res = await axios.get("/json/dummy.json");
            response = res.data;
          }

          //console.log("res는 " + JSON.stringify(response));
          //console.log(res2);

          //images = response.items;
          images = response2.data;
          setSvgImages(response.svgs);
          //localStorage.setItem("images", JSON.stringify(response.items));
          localStorage.setItem("images", JSON.stringify(response2.data));
          localStorage.setItem("svgImages", JSON.stringify(response.svgs));
        }
        // 조건부 필터링기능 ( 필터 , 검색)
        if (images) {
          setFilteredImages(
            images
              .filter((img) => img.publicPrivate === true)
              .sort((a, b) => b.pid - a.pid)
          );

          let nickname = "";

          const userItem = sessionStorage.getItem("user");
          if (userItem) {
            const user = JSON.parse(userItem);
            nickname = user.nickname;
            if (value.value === "my" && userItem) {
              setFilteredImages(
                images
                  .filter((img) => img.nickname === nickname)
                  .sort((a, b) => b.pid - a.pid)
              );
            }
          }

          if (selectInfo === "img") {
            if (!(selectedIcon === "back.svg") && selectedIcon) {
              setFilteredImages(
                images
                  .filter((img) => `${img.language}.svg` === selectedIcon)
                  .sort((a, b) => b.pid - a.pid)
              );
              setCurrentPage(1);
            }
          } else if (selectInfo === "searchbox") {
            if (searchTerm) {
              setFilteredImages(
                images
                  .filter(
                    (image) =>
                      image.title.includes(searchTerm) ||
                      image.nickname.includes(searchTerm)
                  )
                  .sort((a, b) => b.pid - a.pid)
              );
              setCurrentPage(1);
            } else {
              setFilteredImages(images);
            }
          }
        }

        if (storedSvgImages) {
          setSvgImages(JSON.parse(storedSvgImages));
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [selectedIcon, setCurrentPage, value.value]); // 2번째 파라미터 기준 콜백 필터링

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
