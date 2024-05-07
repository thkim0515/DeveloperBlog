import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

// hooks
import { useFormFields } from "../../hooks/form/useprojectFormFields";

// utils
import { handleUpdateCode } from "../../utils/handleProject";
import { timeString } from "../../utils/timeString";
import { validateProjectForm } from "../../utils/validation";

// svgs
const getSvgsData = await axios.get("/contents/svgsdata");
const TECH_STACK_OPTIONS = getSvgsData.data[0].svgs
  .map((item) => item.replace(/\.svg$/, ""))
  .filter((item) => item !== "back" && item !== "unknown")
  .map((item) => item.toUpperCase());

export const ProjectEditForm = (props) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
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
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
    recruitmentCompleted: 0,
    tableOfOrganization: 0,
    content: "",
    hashTags: [],
    roles: [],
    stacks: [],
  });

  useEffect(() => {
    if (props.postData) {
      Object.keys(props.postData).forEach((key) => {
        handleProjectForm({
          target: {
            name: key,
            value: props.postData[key],
          },
        });
      });
    }
  }, [props.postData]);

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

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return TECH_STACK_OPTIONS;
    }

    return TECH_STACK_OPTIONS.filter((stack) =>
      stack.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredStacks = getFilteredData();

  const handleHashTags = (e) => {
    const { value } = e.target;
    setHashTag(value);
  };

  const onSubmit = async () => {
    // TODO 에러메시지 추가예정
    const errors = validateProjectForm(projectFields);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      await handleUpdateCode(projectFields, navigate);
    } else {
      return false;
    }
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
            name="projectManager"
            onChange={handleCheckboxChange}
            checked={projectFields.roles.includes("projectManager")}
          />
          <Form.Check
            inline
            label="디자이너"
            type="checkbox"
            name="designer"
            onChange={handleCheckboxChange}
            checked={projectFields.roles.includes("designer")}
          />
          <Form.Check
            inline
            label="프론트엔드"
            type="checkbox"
            name="frontEnd"
            onChange={handleCheckboxChange}
            checked={projectFields.roles.includes("frontEnd")}
          />
          <Form.Check
            inline
            label="백엔드"
            type="checkbox"
            name="backEnd"
            onChange={handleCheckboxChange}
            checked={projectFields.roles.includes("backEnd")}
          />
          <Form.Check
            inline
            label="추후결정"
            type="checkbox"
            name="undecided"
            onChange={handleCheckboxChange}
            checked={projectFields.roles.includes("undecided")}
          />
        </div>
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-5 mb-3">사용 기술</Form.Label>
        <div>
          {projectFields.stacks.map((item, idx) => (
            <span key={idx} className="me-2">
              <span className="text-primary">{item}</span>
              <button
                type="button"
                className="border rounded-2 ms-2 p-1"
                onClick={() => handleRemoveStacks(idx)}
              >
                x
              </button>
            </span>
          ))}
        </div>
        <div className="position-relative w-50">
          <Form.Control
            className="w-50"
            type="search"
            placeholder="검색어를 입력하세요."
            value={search}
            onChange={handleSearch}
            name="stacks"
          />
          <ListGroup
            as="ul"
            className={search.trim() !== "" ? "d-block w-50" : "d-none w-50"}
            style={{ cursor: "pointer" }}
            onClick={handleAddStack}
          >
            {filteredStacks.map((item, idx) => (
              <ListGroup.Item as="li" key={idx}>
                {item.toLowerCase()}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
        <div>
          <Form.Label className="fs-5 mb-3">모집 기간</Form.Label>
          <span className="ms-3 text-primary">{`${timeString(
            projectFields.startDate
          )} ~ ${timeString(projectFields.endDate)}`}</span>
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
          <span className="ms-3 text-primary">{`${projectFields.recruitmentCompleted} / ${projectFields.tableOfOrganization}`}</span>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div>
            <Form.Label className="mb-2">기존 인원</Form.Label>
            <Form.Range
              value={projectFields.recruitmentCompleted}
              onChange={handleProjectForm}
              name="recruitmentCompleted"
              min="0"
              max="10"
            />
          </div>
          <div>
            <Form.Label className="mb-2">시작 인원</Form.Label>
            <Form.Range
              value={projectFields.tableOfOrganization}
              onChange={handleProjectForm}
              name="tableOfOrganization"
              min="0"
              max="10"
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
          {projectFields.hashTags.map((item, idx) => (
            <span key={idx} className="ms-3">
              <span className="text-primary">{`#${item}`}</span>
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
        {isLoading ? "Loading…" : "수정하기"}
      </Button>
    </Form>
  );
};
