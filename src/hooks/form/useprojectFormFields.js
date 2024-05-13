import { useState } from "react";

export const useFormFields = (initialState) => {
  const [fields, setFields] = useState(initialState);
  const handleProjectForm = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleAddMember = (userId) => {
    if (!fields.memberList.includes(userId)) {
      setFields((prevFields) => ({
        ...prevFields,
        memberList: [...prevFields.memberList, userId],
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFields((prevFields) => ({
      ...prevFields,
      roles: checked
        ? [...prevFields.roles, name]
        : prevFields.roles.filter((role) => role !== name),
    }));
  };

  const handleAddStack = (e) => {
    const { className, textContent } = e.target;
    if (className === "list-group-item") {
      if (!fields.stacks.includes(textContent)) {
        setFields((prevFields) => ({
          ...prevFields,
          stacks: [...prevFields.stacks, textContent],
        }));
      }
    }
  };

  const handleRemoveStacks = (idx) => {
    setFields((prevFields) => ({
      ...prevFields,
      stacks: prevFields.stacks.filter((_, index) => index !== idx),
    }));
  };

  const handleAddHashTags = (hashTag) => {
    if (hashTag.trim() !== "") {
      if (fields.hashTags.length < 3) {
        setFields((prevFields) => ({
          ...prevFields,
          hashTags: [...prevFields.hashTags, hashTag],
        }));
      } else {
        alert("더 이상 해시태그를 추가할 수 없습니다.");
      }
    }
  };

  const handleRemoveHashTags = (idx) => {
    setFields((prevFields) => ({
      ...prevFields,
      hashTags: prevFields.hashTags.filter((_, index) => index !== idx),
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
  ];
};
