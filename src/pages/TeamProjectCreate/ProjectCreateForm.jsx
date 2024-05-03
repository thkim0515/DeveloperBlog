import { useState, useEffect, forwardRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useFormFields } from "../../hooks/form/useprojectFormFields";
import { handlePostProject } from "../../utils/handleProject";
import { validateProjectCreate } from "../../utils/validation";

// 하드코딩된 검색어 목록
const getSvgsData = await axios.get("/contents/svgsdata");
const TECH_STACK_OPTIONS = getSvgsData.data[0].svgs
  .map((item) => item.replace(/\.svg$/, ""))
  .filter((item) => item !== "back" && item !== "unknown")
  .map((item) => item.toUpperCase());

export const ProjectCreateForm = forwardRef((props, ref) => {
  const [isLoading, setLoading] = useState(false);
  const [hashTag, setHashTag] = useState("");

  const [
    projectFields,
    handleProjectForm,
    handleCheckboxChange,
    handleAddStack,
    handleRemoveStacks,
    handleAddHashTags,
    handleRemoveHashTags,
  ] = useFormFields({
    title: "",
    updatedDate: new Date().toLocaleDateString(),
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

  const handleHashTags = (e) => {
    setHashTag(e.target.value);
  };

  const onSubmit = async () => {
    if (!validateProjectCreate(projectFields)) return;
    setLoading(true);
    await handlePostProject(projectFields);
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
          onChange={handleProjectForm}
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
        <div className="mb-2">
          {projectFields.stacks.map((elem, idx) => (
            <span key={idx} className="ms-3">
              <span className="text-primary">{elem}</span>
              <button
                type="button"
                className="border rounded-2 ms-1 p-1"
                onClick={() => handleRemoveStacks(idx)}
              >
                x
              </button>
            </span>
          ))}
        </div>
        <div>
          <Form.Control
            type="search"
            placeholder="검색어를 입력하세요."
            onChange={handleProjectForm}
            name="stacks"
          />
          <ul style={{ cursor: "pointer" }} onClick={handleAddStack}>
            {TECH_STACK_OPTIONS.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
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
              onChange={handleProjectForm}
              name="startDate"
            />
          </div>
          <div>
            <Form.Label className="mb-2">종료 날짜</Form.Label>
            <Form.Control
              type="date"
              value={projectFields.endDate}
              onChange={handleProjectForm}
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
              onChange={handleProjectForm}
              name="recruitmentCompleted"
            />
          </div>
          <div>
            <Form.Label className="mb-2">시작 인원</Form.Label>
            <Form.Control
              type="number"
              value={projectFields.tableOfOrganiztion}
              onChange={handleProjectForm}
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
          onChange={handleProjectForm}
          name="content"
        />
      </Form.Group>

      {/*  */}
      <div>
        <div className="mb-3">
          <span className="fs-5">프로젝트 해시태그</span>
          <div></div>
        </div>
        <div className="d-flex mb-4 align-items-center">
          <InputGroup className="w-50">
            <Form.Control
              placeholder="해시태그를 입력하세요. (최대 3개)"
              value={hashTag}
              onChange={handleHashTags}
              name="hashTag"
            />
            <Button
              type="button"
              variant="outline-secondary"
              id="hashTagButton"
              onClick={() => {
                handleAddHashTags(hashTag);
                setHashTag("");
              }}
            >
              Button
            </Button>
          </InputGroup>
          {projectFields.hashTags.map((elem, idx) => (
            <span key={idx} className="ms-3">
              <span className="text-primary">{`#${elem}`}</span>
              <button
                type="button"
                className="border rounded-2 ms-1 p-1"
                onClick={() => handleRemoveHashTags(idx)}
              >
                x
              </button>
            </span>
          ))}
        </div>
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
