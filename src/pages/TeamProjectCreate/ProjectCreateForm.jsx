import styled from "styled-components";
import { useState, useEffect, forwardRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { IMAGE_PATHS, IMAGE_ALT_TEXT } from "./../../utils/stacks";

export const FormGroup = forwardRef((props, ref) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>프로젝트 제목</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="프로젝트 제목을 입력하세요."
        />
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>모집 분야</Form.Label>
        <div>
          <Form.Check
            inline
            label="기획자"
            name="group1"
            type="checkbox"
            value="projectManager"
          />
          <Form.Check
            inline
            label="디자이너"
            name="group1"
            type="checkbox"
            value="designer"
          />
          <Form.Check
            inline
            label="프론트엔드"
            name="group1"
            type="checkbox"
            value="frontEnd"
          />
          <Form.Check
            inline
            label="백엔드"
            name="group1"
            type="checkbox"
            value="backEnd"
          />
        </div>
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>사용 기술</Form.Label>
        <Form.Control type="search" placeholder="검색어를 입력하세요." />
        <IconBox>
          <li>
            <img src={IMAGE_PATHS.react} alt={IMAGE_ALT_TEXT.react} />
          </li>
          <li>
            <img src={IMAGE_PATHS.redux} alt={IMAGE_ALT_TEXT.redux} />
          </li>
          <li>
            <img src={IMAGE_PATHS.node} alt={IMAGE_ALT_TEXT.node} />
          </li>
          <li>
            <img src={IMAGE_PATHS.mongoDB} alt={IMAGE_ALT_TEXT.mongoDB} />
          </li>
        </IconBox>
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>모집 기한</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>내용</Form.Label>
        <Form.Control
          as="textarea"
          rows={20}
          placeholder="내용을 입력하세요."
          style={{ resize: "none" }}
        />
      </Form.Group>

      {/*  */}
      <InputGroup className="mb-3">
        <Form.Label>관련 키워드 추가</Form.Label>
        <Form.Control placeholder="키워드 3개까지 추가가능" />
        <Button variant="outline-secondary" id="button-addon2">
          추가
        </Button>
      </InputGroup>

      <div>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Loading…" : "올리기"}
        </Button>
      </div>
    </Form>
  );
});

const IconBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  li {
    width: 48px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
