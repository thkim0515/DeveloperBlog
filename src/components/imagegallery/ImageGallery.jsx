import { ImageItem } from "./ImageGalleryComponents/ImageItem";
import { MainPagination } from "./ImageGalleryComponents/MainPagination";
import { usePaginationSetValue } from "../../hook/usePagination";
import * as S from "./ImageGallry.style";

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
