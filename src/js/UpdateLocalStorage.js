import { encryptData, decryptData } from "./secure";

export const UpdateLocalStorage = async (newContent) => {
  const storedContents = await decryptData("contents", localStorage);
  if (storedContents) {
    const updatedContents = [...storedContents, newContent];
    encryptData(updatedContents, "contents", localStorage);
  }
};
