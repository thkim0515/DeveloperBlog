import { useState, useEffect, forwardRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
// import Stack from "react-bootstrap/Stack";

export const ProjectCreateForm = forwardRef((props, ref) => {
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

  const onChange = (e) => {};

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-5 mb-3 ">프로젝트 제목</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="프로젝트 제목을 입력하세요."
          onChange={onChange}
        />
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-5 mb-3">모집 분야</Form.Label>
        <div>
          <Form.Check
            inline
            label="기획자"
            name="group1"
            type="checkbox"
            data-name="projectManager"
            onChange={onChange}
          />
          <Form.Check
            inline
            label="디자이너"
            name="group1"
            type="checkbox"
            data-name="designer"
            onChange={onChange}
          />
          <Form.Check
            inline
            label="프론트엔드"
            name="group1"
            type="checkbox"
            data-name="frontEnd"
            onChange={onChange}
          />
          <Form.Check
            inline
            label="백엔드"
            name="group1"
            type="checkbox"
            data-name="backEnd"
            onChange={onChange}
          />
        </div>
      </Form.Group>

      {/*  */}
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-5 mb-3">사용 기술</Form.Label>
        <Form.Control
          className="mb-4"
          type="search"
          placeholder="검색어를 입력하세요."
          onChange={onChange}
        />
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
        <div>
          <Form.Label className="fs-5 mb-3">모집 기간</Form.Label>
          <span className="ms-3 text-primary">2024.03.24~2024.04.21</span>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div>
            <Form.Label className="mb-2 ">시작 날짜</Form.Label>
            <Form.Control type="date" onChange={onChange} />
          </div>
          <div>
            <Form.Label className="mb-2">종료 날짜</Form.Label>
            <Form.Control type="date" onChange={onChange} />
          </div>
        </div>
      </Form.Group>

      {/*  */}
      <Form.Group>
        <div>
          <Form.Label className="fs-5 mb-3">모집 인원</Form.Label>
          <span className="ms-3 text-primary">0/6</span>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div>
            <Form.Label className="mb-2">기존 인원</Form.Label>
            <Form.Control
              type="number"
              data-name="recruitmentCompleted"
              onChange={onChange}
            />
          </div>
          <div>
            <Form.Label className="mb-2">시작 인원</Form.Label>
            <Form.Control
              type="number"
              data-name="tableOfOrganiztion"
              onChange={onChange}
            />
          </div>
        </div>
      </Form.Group>

      {/*  */}
      <Form.Group
        className="mt-3 mb-4"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label className="fs-5 mt-2 mb-3">내용</Form.Label>
        <Form.Control
          as="textarea"
          rows={20}
          placeholder="내용을 입력하세요."
          style={{ resize: "none" }}
          onChange={onChange}
        />
      </Form.Group>

      {/*  */}
      <div>
        <p className="fs-5 mb-3">프로젝트 해시태그</p>
        <InputGroup className="mb-4 w-50">
          <Form.Control
            placeholder="프로젝트 관련 해시태그는 3개까지 가능"
            onChange={onChange}
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </div>

      <Button
        className="w-100 p-2"
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading…" : "올리기"}
      </Button>
    </Form>
  );
});
