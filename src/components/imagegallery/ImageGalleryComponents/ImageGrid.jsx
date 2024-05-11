import { useState } from "react";
import * as S from "./ImageGrid.style";
import { ImageItem } from "./ImageItem";
import { MainPagination } from "./MainPagination";
import { useGetData } from "../../../hooks/useGetData";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const ImageGrid = (value) => {
  const imageUrl = useSelector((state) => state.butketUrl.imageUrl);
  const [selectedIcon, setSelectedIcon] = useState(null); // 선택된 아이콘의 이름
  const [searchTerm, setSearchTerm] = useState(""); // 검색내용

  const maxcount = 9;
  const data = useGetData(value, maxcount, selectedIcon, searchTerm);

  const handleUpdateSelectedIcon = () => {
    setSelectedIcon(searchTerm);
  };

  return (
    <S.Container>
      <S.Spacer>
        <div>
          <InputGroup>
            <Form.Control
              aria-label="Search"
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
          {value.value === "all" &&
            data.svgImages.map((svgName, idx) => (
              <img
                key={idx}
                src={`${imageUrl}svgs/${svgName}.svg`}
                alt={svgName}
                onClick={() => setSelectedIcon(svgName)}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    svgName === selectedIcon ? "#F9F7F7" : "transparent",
                  padding: svgName === selectedIcon ? "4px" : "0",
                }}
              />
            ))}
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
