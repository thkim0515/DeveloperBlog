import { useState, useEffect } from "react";
import { encryptData, decryptData } from "../js/secure";

export const useCalculatePage = (PageCount, filteredImages) => {
  const savedCurrentPage = Number(
    decryptData("currentPage", sessionStorage) || 1
  );
  const [currentPage, setCurrentPage] = useState(savedCurrentPage);

  useEffect(() => {
    const encryptAndStoreData = async () => {
      try {
        await encryptData(currentPage, "currentPage", sessionStorage);
      } catch (error) {
        console.error("Failed to encrypt and store data:", error);
      }
    };

    encryptAndStoreData();
  }, [currentPage]);

  const indexOfLastImage = currentPage * PageCount;
  const indexOfFirstImage = indexOfLastImage - PageCount;
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );
  const totalPages = Math.ceil(filteredImages.length / PageCount);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const firstPage = () => setCurrentPage(1);
  const lastPage = () => setCurrentPage(totalPages);

  return {
    currentImages,
    currentPage,
    setCurrentPage,
    totalPages,
    paginate,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
  };
};
