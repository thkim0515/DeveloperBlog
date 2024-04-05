import { useState, useEffect } from "react";
import * as S from "./ImageGrid.style";
import { ImageItem } from "./ImageItem";
import { MainPagination } from "./MainPagination";
import { useGetData } from "../../../hooks/useGetData";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const ImageGrid = (value) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectInfo, setSelectInfo] = useState("");
  const [selectedSvg, setSelectedSvg] = useState("");

  const maxcount = 9;
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
  } = useGetData(value, maxcount, selectedIcon, searchTerm, selectInfo);

  const handleIconClick = (iconName) => {
    console.log(iconName);
    setSelectedIcon(iconName);
    setSelectedSvg(iconName);
    setSelectInfo("img");
  };

  const handleSearch = () => {
    setSelectedIcon(searchTerm);
    setSelectInfo("searchbox");
    setSelectedSvg("");
  };
  return (
    <S.Container>
      <S.Spacer>
        <div>Code Gallery</div>
        <div>
          <InputGroup>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              style={{ border: "2px solid #000", width: "350px" }}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <InputGroup.Text
              style={{ border: "2px solid #000", cursor: "pointer" }}
              onClick={handleSearch}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div>
          {value.value === "all"
            ? svgImages.map((svgName, idx) => {
                return (
                  <img
                    key={idx}
                    src={`/svg/${svgName}.svg`}
                    alt={svgName}
                    onClick={() => handleIconClick(svgName)}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        svgName === selectedSvg ? "#fff" : "transparent",
                      padding: svgName === selectedSvg ? "4px" : "0",
                    }}
                  />
                );
              })
            : null}
        </div>
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

// 인풋박스 ref . https://react-bootstrap.netlify.app/docs/forms/input-group/
// 아이콘   ref . https://fontawesome.com/icons/magnifying-glass?f=classic&s=solid
