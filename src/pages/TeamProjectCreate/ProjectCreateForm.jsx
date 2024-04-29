import { useState, useEffect, useRef, forwardRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useFormFields } from "../../hooks/form/useprojectFormFields";

// 하드코딩된 검색어 목록
const SEARCH_RESULT = [
  "React",
  "Vue",
  "Svelt",
  "JavaScript",
  "HTML",
  "CSS",
  "redux",
  "node",
  "express",
  "mongoDB",
];

export const ProjectCreateForm = forwardRef((props, ref) => {
  const [isLoading, setLoading] = useState(false);

  const [
    projectFields,
    handleProjectChange,
    handleCheckboxChange,
    // handleHashTags,
    // hashTags,
  ] = useFormFields({
    title: "",
    updatedDate: new Date().toLocaleDateString(),
    search: "",
    startDate: "",
    endDate: "",
    recruitmentCompleted: "",
    tableOfOrganiztion: "",
    content: "",
    hashTags: [],
    roles: [],
    stacks: [],
  });

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

  const onSubmit = () => {
    setLoading(true);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-5 mb-3 ">프로젝트 제목</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="프로젝트 제목을 입력하세요."
          value={projectFields.title}
          onChange={handleProjectChange}
          name="title"
        />
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-5 mb-3">모집 분야</Form.Label>
        <div>
          <Form.Check
            inline
            label="기획자"
            type="checkbox"
            onChange={handleCheckboxChange}
            name="projectManager"
          />
          <Form.Check
            inline
            label="디자이너"
            type="checkbox"
            onChange={handleCheckboxChange}
            name="designer"
          />
          <Form.Check
            inline
            label="프론트엔드"
            type="checkbox"
            onChange={handleCheckboxChange}
            name="frontEnd"
          />
          <Form.Check
            inline
            label="백엔드"
            type="checkbox"
            onChange={handleCheckboxChange}
            name="backEnd"
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
          name="stacks"
        />
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
        <div>
          <Form.Label className="fs-5 mb-3">모집 기간</Form.Label>
          <span className="ms-3 text-primary">{`${projectFields.startDate} ~ ${projectFields.endDate}`}</span>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div>
            <Form.Label className="mb-2">시작 날짜</Form.Label>
            <Form.Control
              type="date"
              value={projectFields.startDate}
              onChange={handleProjectChange}
              name="startDate"
            />
          </div>
          <div>
            <Form.Label className="mb-2">종료 날짜</Form.Label>
            <Form.Control
              type="date"
              value={projectFields.endDate}
              onChange={handleProjectChange}
              name="endDate"
            />
          </div>
        </div>
      </Form.Group>

      {/*  */}
      <Form.Group>
        <div>
          <Form.Label className="fs-5 mb-3">모집 인원</Form.Label>
          <span className="ms-3 text-primary">{`${projectFields.recruitmentCompleted} / ${projectFields.tableOfOrganiztion}`}</span>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div>
            <Form.Label className="mb-2">기존 인원</Form.Label>
            <Form.Control
              type="number"
              value={projectFields.recruitmentCompleted}
              onChange={handleProjectChange}
              name="recruitmentCompleted"
            />
          </div>
          <div>
            <Form.Label className="mb-2">시작 인원</Form.Label>
            <Form.Control
              type="number"
              value={projectFields.tableOfOrganiztion}
              onChange={handleProjectChange}
              name="tableOfOrganiztion"
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
          value={projectFields.content}
          onChange={handleProjectChange}
          name="content"
        />
      </Form.Group>

      {/*  */}
      <div>
        <p className="fs-5 mb-3">프로젝트 해시태그</p>
        <InputGroup className="mb-4 w-50">
          <Form.Control
            placeholder="해시태그 3개까지 추가 가능"
            value={projectFields.hashTag || ""}
            onChange={handleProjectChange}
            name="hashTag"
          />
          <Button variant="outline-secondary" id="hashTagButton">
            Button
          </Button>
        </InputGroup>
      </div>

      <Button
        className="w-100 p-2"
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? onSubmit : null}
      >
        {isLoading ? "Loading…" : "올리기"}
      </Button>
    </Form>
  );
});
