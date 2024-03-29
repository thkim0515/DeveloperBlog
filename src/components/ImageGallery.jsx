import { ImageItem } from "./imagegallery/ImageGalleryComponents/ImageItem";
import { MainPagination } from "./imagegallery/ImageGalleryComponents/MainPagination";
import { usePaginationSetValue } from "../hook/usePagination";
// import { Container, SPContainer, Spacer } from "../layout/ImageGallryLayout";
import * as S from "../layout/ImageGallryLayout";

export const ImageGallery = () => {
  const maxCount = 9;
  const {
    svgImages,
    currentImages,
    currentPage,
    totalPages,
    paginate,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
  } = usePaginationSetValue(maxCount);

  console.log(currentImages);
  return (
    <S.Container>
      <S.Spacer>
        {svgImages.map((svgName, idx) => (
          <img key={idx} src={`/svg/${svgName}`} alt={svgName} />
        ))}
      </S.Spacer>
      {currentImages.map((img, idx) => (
        <ImageItem key={idx} image={img} />
      ))}
      <S.SPContainer>
        <MainPagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          firstPage={firstPage}
          lastPage={lastPage}
        />
      </S.SPContainer>
    </S.Container>
  );
};
