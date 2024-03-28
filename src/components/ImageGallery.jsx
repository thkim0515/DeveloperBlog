import { ImageItem } from "./imagegallery/ImageGalleryComponents/ImageItem";
import { MainPagination } from "./imagegallery/ImageGalleryComponents/MainPagination";
import { usePaginationSetValue } from "../hook/usePagination";
import { Container, SPContainer, Spacer } from "../layout/ImageGallryLayout";

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
    <Container>
      <Spacer>
        {svgImages.map((svgName, idx) => (
          <img key={idx} src={`/svg/${svgName}`} alt={svgName} />
        ))}
      </Spacer>
      {/* {currentImages
        .filter((img) => img.publicPrivate)
        .map((img, idx) => (
          <ImageItem key={idx} image={img} /> */}

      {currentImages.map((img, idx) => (
        <ImageItem key={idx} image={img} />
      ))}
      <SPContainer>
        <MainPagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          firstPage={firstPage}
          lastPage={lastPage}
        />
      </SPContainer>
    </Container>
  );
};
