import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useState } from "react";
import { ImageItem } from "./ImageItem";
import { MainPagination } from "./MainPagination";
import { useGetData } from "../../../hooks/useGetData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import * as S from "./ImageGrid.style";

export const ImageGrid = (value) => {
  const [selectedIcon, setSelectedIcon] = useState(null); // 선택된 아이콘의 이름
  const [searchTerm, setSearchTerm] = useState(""); // 검색내용

  const maxcount = 9;
  const data = useGetData(value, maxcount, selectedIcon, searchTerm);

  const handleUpdateSelectedIcon = (iconName = searchTerm) => {
    setSelectedIcon(iconName);
  };

  return (
    <S.Container>
      <S.Spacer>
        {value.value === "all" ? (
          <div>Code Gallery</div>
        ) : (
          <div>My Gallery </div>
        )}

        <div>
          <InputGroup>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              style={{ border: "2px solid #000", width: "350px" }}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleUpdateSelectedIcon();
                }
              }}
            />
            <InputGroup.Text
              style={{ border: "2px solid #000", cursor: "pointer" }}
              onClick={handleUpdateSelectedIcon}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div>
          {value.value === "all"
            ? data.svgImages.map((svgName, idx) => {
                return (
                  <img
                    key={idx}
                    src={`
https://starblog-bucket.s3.ap-northeast-2.amazonaws.com/svgs/${svgName}.svg`}
                    alt={svgName}
                    onClick={() => handleUpdateSelectedIcon(svgName)}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        svgName === selectedIcon && svgName !== "back"
                          ? "#fff"
                          : "transparent",
                      padding:
                        svgName === selectedIcon && svgName !== "back"
                          ? "4px"
                          : "0",
                    }}
                  />
                );
              })
            : null}
        </div>
      </S.Spacer>

      {data.currentImages.map((content, idx) => (
        <ImageItem key={idx} content={content} />
      ))}

      <S.SPContainer>
        <MainPagination
          currentPage={data.currentPage}
          totalPages={data.totalPages}
          paginate={data.paginate}
          nextPage={data.nextPage}
          prevPage={data.prevPage}
          firstPage={data.firstPage}
          lastPage={data.lastPage}
        />
      </S.SPContainer>
    </S.Container>
  );
};

// 인풋박스 ref . https://react-bootstrap.netlify.app/docs/forms/input-group/
// 아이콘   ref . https://fontawesome.com/icons/magnifying-glass?f=classic&s=solid
