import { useState, useEffect } from "react";

export const useFormFields = (initialState) => {
  const [fields, setFields] = useState(initialState);
  const [checkboxes, setCheckboxes] = useState([]);

  useEffect(() => {
    setFields((prevFields) => ({
      ...prevFields,
      roles: { ...checkboxes },
    }));
  }, [checkboxes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prevCheckboxes) => {
      if (checked) {
        return [...prevCheckboxes, name];
      } else {
        return prevCheckboxes.filter((checkbox) => checkbox !== name);
      }
    });
  };

  return [fields, handleChange, handleCheckboxChange];
};
