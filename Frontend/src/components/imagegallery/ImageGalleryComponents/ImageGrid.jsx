import { useState } from "react";
import * as S from "./ImageGrid.style";
import { ImageItem } from "./ImageItem";
import { MainPagination } from "./MainPagination";
import { useGetData } from "../../../hooks/useGetData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

export const ImageGrid = value => {
  const [selectedIcon, setSelectedIcon] = useState(null); // 선택된 아이콘의 이름
  const [searchTerm, setSearchTerm] = useState(""); // 검색내용
  const bucketUrl = useSelector(state => state.bucketUrl);
  const imageUrl = bucketUrl ? bucketUrl.imageUrl : "";
  const maxcount = 9;
  const data = useGetData(value, maxcount, selectedIcon, searchTerm);
  const half = Math.ceil(data.svgImages.length / 2);
  const handleUpdateSelectedIcon = () => {
    setSelectedIcon(searchTerm);
  };

  return (
    <S.Container>
      <S.Spacer>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              className="py-2"
              placeholder="코드를 검색하세요"
              onChange={e => setSearchTerm(e.target.value)}
              value={searchTerm}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  handleUpdateSelectedIcon();
                }
              }}
            />
            <Button variant="outline-secondary" id="button-addon2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </InputGroup>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}>
            {data.svgImages.slice(0, half).map((svgName, idx) => (
              <img
                key={idx}
                src={`${imageUrl}svgs/${svgName}.svg`}
                alt={svgName}
                onClick={() => setSelectedIcon(svgName)}
                style={{
                  cursor: "pointer",
                  backgroundColor: svgName === selectedIcon ? "#F9F7F7" : "transparent",
                  padding: svgName === selectedIcon ? "4px" : "0",
                  margin: "-2px 3px",
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {data.svgImages.slice(half).map((svgName, idx) => (
              <img
                key={idx}
                src={`${imageUrl}svgs/${svgName}.svg`}
                alt={svgName}
                onClick={() => setSelectedIcon(svgName)}
                style={{
                  cursor: "pointer",
                  backgroundColor: svgName === selectedIcon ? "#F9F7F7" : "transparent",
                  padding: svgName === selectedIcon ? "4px" : "0",
                  margin: "-2px 3px",
                }}
              />
            ))}
          </div>
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
