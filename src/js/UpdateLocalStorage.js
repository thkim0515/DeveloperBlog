import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { encryptData, decryptData } from "./secure";

export const UpdateLocalStorage = async (newContent) => {
  console.log(newContent);
  const storedContents = await decryptData("contents", localStorage);
  if (storedContents) {
    const updatedContents = [...storedContents, newContent];
    encryptData(updatedContents, "contents", localStorage);
  }
};
