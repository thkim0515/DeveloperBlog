import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLeaf, faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

// hooks
import { useFormFields } from "../../hooks/form/useprojectFormFields";

// utils
import { handlePostProject } from "../../utils/handleProject";
import { validateProjectForm } from "../../utils/validation";
import { decryptData } from "../../utils/secure";

// styled
const ErrorMessage = styled.div`
  display: inline-block;
  margin-left: 1rem;
  color: red;
`;

// svgs
const getSvgsData = await axios.get("/contents/svgsdata");
const TECH_STACK_OPTIONS = getSvgsData.data[0].svgs
  .map(item => item.replace(/\.svg$/, ""))
  .filter(item => item !== "back" && item !== "unknown")
  .map(item => item.toUpperCase());

export const ProjectCreateForm = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  // const [hashTag, setHashTag] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userSessionInfo, setUserSessionInfo] = useState([]);

  const [
    projectFields,
    handleProjectForm,
    handleAddStack,
    handleRemoveStacks,
    handleAddMember,
    handleIncrement,
    handleDecrement,
  ] = useFormFields({
    title: "",
    updatedDate: new Date().toLocaleDateString(),
    startDate: "",
    endDate: "",
    memberList: [],
    tableOfOrganization: 0,
    content: "",
    hashTags: [],
    roles: [],
    stacks: [],
    counts: {
      planning: 0,
      design: 0,
      frontend: 0,
      backend: 0,
    },
  });

  useEffect(() => {
    const init = async () => {
      const userSession = await decryptData("user", sessionStorage);
      userSession._id = userSession.id;
      delete userSession.id;
      handleAddMember(userSession._id);
      setUserSessionInfo(userSession);
    };
    init();
  }, []);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise(resolve => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleSearch = e => {
    const { value } = e.target;
    setSearch(value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return TECH_STACK_OPTIONS;
    }

    return TECH_STACK_OPTIONS.filter(stack => stack.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredStacks = getFilteredData();

  // const handleHashTags = e => {
  //   const { value } = e.target;
  //   setHashTag(value);
  // };

  const onSubmit = async () => {
    const errors = validateProjectForm(projectFields);
    setErrorMessage(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      const response = await handlePostProject(projectFields);
      const data = response;
      data.userId = userSessionInfo;
      navigate(`/project/${data._id}`, { state: { data } });
    } else {
      window.scroll(0, 0);
      alert("알림에 따라 글 작성 해주세요!");
      return false;
    }
  };

  return (
    <Form>
      {/* 제목 */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-5 mb-3 ">프로젝트 제목</Form.Label>
        <ErrorMessage>{errorMessage.title}</ErrorMessage>
        <Form.Control
          size="lg"
          type="text"
          placeholder="프로젝트 제목을 입력하세요."
          value={projectFields.title}
          onChange={handleProjectForm}
          name="title"
        />
      </Form.Group>

      {/* 내용 */}
      <Form.Group className="mt-3 mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="fs-5 mt-2 mb-3">내용</Form.Label>
        <ErrorMessage>{errorMessage.content}</ErrorMessage>
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-5 mb-3">모집 분야</Form.Label>
        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Arial, sans-serif" }}>
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            {[
              { key: "planning", icon: faPen, label: "기획" },
              { key: "design", icon: faLeaf, label: "디자인" },
              { key: "frontend", icon: faCode, label: "프론트엔드" },
              { key: "backend", icon: faDatabase, label: "백엔드" },
            ].map(({ key, icon, label }) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "100px",
                  textAlign: "center",
                  backgroundColor: "#f9f9f9",
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      handleDecrement(key);
                    }}
                    style={{ border: "none", background: "none", cursor: "pointer" }}>
                    -
                  </button>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      handleIncrement(key);
                    }}
                    style={{ border: "none", background: "none", cursor: "pointer" }}>
                    +
                  </button>
                </div>
                <FontAwesomeIcon icon={icon} size="2x" style={{ margin: "10px 0" }} />
                <p>{label}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "20px", fontSize: "16px" }}>
            기획 {projectFields.counts.planning} 디자인 {projectFields.counts.design} 프론트엔드
            {projectFields.counts.frontend} 백엔드 {projectFields.counts.backend}
          </div>
        </div>
      </Form.Group>

      {/*  */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-5 mb-3">사용 기술</Form.Label>
        <div>
          {projectFields.stacks.map((item, idx) => (
            <span key={idx} className="me-2">
              <span className="text-primary">{item}</span>
              <button type="button" className="border rounded-2 ms-2 p-1" onClick={() => handleRemoveStacks(idx)}>
                x
              </button>
            </span>
          ))}
        </div>
        <div className="position-relative w-75">
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
            onClick={handleAddStack}>
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
          <span className="ms-3 text-primary">{`${projectFields.startDate} ~ ${projectFields.endDate}`}</span>
          <ErrorMessage>{errorMessage.startDate || errorMessage.endDate}</ErrorMessage>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div>
            <Form.Label className="mb-2">시작 날짜</Form.Label>
            <Form.Control type="date" value={projectFields.startDate} onChange={handleProjectForm} name="startDate" />
          </div>
          <div>
            <Form.Label className="mb-2">종료 날짜</Form.Label>
            <Form.Control type="date" value={projectFields.endDate} onChange={handleProjectForm} name="endDate" />
          </div>
        </div>
      </Form.Group>

      {/* <Form.Group className="w-75">
          <div>
            <Form.Label className="fs-5 mb-3">모집인원</Form.Label>
            <span className="ms-3 text-primary">{`${Number(
              projectFields.memberList.length
            )} / ${projectFields.tableOfOrganization}`}</span>
            <ErrorMessage>{errorMessage.recruitment}</ErrorMessage>
          </div>

          <Form.Range
            value={projectFields.tableOfOrganization}
            onChange={handleProjectForm}
            name="tableOfOrganization"
            min="0"
            max="10"
            className="w-50"
          />
        </Form.Group> */}

      {/* <div>
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
                }}>
                Button
              </Button>
            </InputGroup>
            {projectFields.hashTags.map((elem, idx) => (
              <span key={idx} className="ms-3">
                <span className="text-primary">{`#${elem}`}</span>
                <button type="button" className="border rounded-2 ms-1 p-1" onClick={() => handleRemoveHashTags(idx)}>
                  x
                </button>
              </span>
            ))}
          </div>
        </div> */}

      <Button className="w-100 p-2" variant="primary" disabled={isLoading} onClick={!isLoading ? onSubmit : null}>
        {isLoading ? "Loading…" : "올리기"}
      </Button>
    </Form>
  );
};
