import { useState } from "react";

export const useFormFields = initialState => {
  const [fields, setFields] = useState(initialState);

  // handleProjectForm: 폼 필드 업데이트
  const handleProjectForm = e => {
    const { name, value } = e.target;
    setFields(prevFields => ({
      ...prevFields,
      [name]: value,
    }));
  };

  // handleAddMember: 멤버 추가
  const handleAddMember = userId => {
    if (!fields.memberList.includes(userId)) {
      setFields(prevFields => ({
        ...prevFields,
        memberList: [...prevFields.memberList, userId],
      }));
    }
  };

  // handleCheckboxChange: 체크박스 상태 업데이트
  const handleCheckboxChange = e => {
    const { name, checked } = e.target;

    setFields(prevFields => ({
      ...prevFields,
      roles: checked ? [...prevFields.roles, name] : prevFields.roles.filter(role => role !== name),
    }));
  };

  // handleAddStack: 기술 스택 추가
  const handleAddStack = e => {
    const { className, textContent } = e.target;
    if (className === "list-group-item") {
      if (!fields.stacks.includes(textContent)) {
        setFields(prevFields => ({
          ...prevFields,
          stacks: [...prevFields.stacks, textContent],
        }));
      }
    }
  };

  // handleRemoveStacks: 기술 스택 제거
  const handleRemoveStacks = idx => {
    setFields(prevFields => ({
      ...prevFields,
      stacks: prevFields.stacks.filter((_, index) => index !== idx),
    }));
  };

  // handleAddHashTags: 해시태그 추가
  const handleAddHashTags = hashTag => {
    if (hashTag.trim() !== "") {
      if (fields.hashTags.length < 3) {
        setFields(prevFields => ({
          ...prevFields,
          hashTags: [...prevFields.hashTags, hashTag],
        }));
      } else {
        alert("더 이상 해시태그를 추가할 수 없습니다.");
      }
    }
  };

  // handleRemoveHashTags: 해시태그 제거
  const handleRemoveHashTags = idx => {
    setFields(prevFields => ({
      ...prevFields,
      hashTags: prevFields.hashTags.filter((_, index) => index !== idx),
    }));
  };

  // handleIncrement/handleDecrement: 카운트 증가/감소
  const handleIncrement = key => {
    setFields(prevFields => ({
      ...prevFields,
      counts: {
        ...prevFields.counts,
        [key]: prevFields.counts[key] + 1,
      },
    }));
  };

  const handleDecrement = key => {
    setFields(prevFields => ({
      ...prevFields,
      counts: {
        ...prevFields.counts,
        [key]: prevFields.counts[key] > 0 ? prevFields.counts[key] - 1 : 0,
      },
    }));
  };

  return [
    fields,
    handleProjectForm,
    handleCheckboxChange,
    handleAddStack,
    handleRemoveStacks,
    handleAddHashTags,
    handleRemoveHashTags,
    handleAddMember,
    handleIncrement,
    handleDecrement,
  ];
};
