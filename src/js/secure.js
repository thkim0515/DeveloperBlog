import axios from "axios";

export const encryptData = async (data, storageKey, storage, where) => {
  try {
    if (data) {
      const response = await axios.post("/endecrypt/encrypt", data);
      return storage.setItem(storageKey, response.data.encryptedData);
    }
  } catch (error) {
    console.error("Encryption error:", error);
    throw error;
  }
};

// 데이터 복호화를 서버에 요청하는 함수
export const decryptData = async (storageKey, storage, where) => {
  const data = storage.getItem(storageKey);
  try {
    if (data) {
      const response = await axios.post("/endecrypt/decrypt", { data });
      return response.data.decryptedData;
    }
  } catch (error) {
    console.error("Decryption error:", error);
    throw error;
  }
};
