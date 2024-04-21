// import CryptoJS from "crypto-js";

// const SECURECODE =
//   "1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e"; //process.env.REACT_APP_SECURECODE;

// // //데이터 암호화 함수를 비동기 함수로 정의
// export async function encryptData(data, storageKey, storage) {
//   const secretKey = SECURECODE;
//   const encryptedData = CryptoJS.AES.encrypt(
//     JSON.stringify(data),
//     secretKey
//   ).toString();
//   storage.setItem(storageKey, encryptedData);
// }

// // 데이터 복호화 함수를 비동기 함수로 정의
// export async function decryptData(storageKey, storage) {
//   const secretKey = SECURECODE;
//   const data = storage.getItem(storageKey);
//   if (data) {
//     const bytes = CryptoJS.AES.decrypt(data, secretKey);
//     const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//     return decryptedData;
//   }
//   return null;
// }

// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

// 서버 암호화 복호화 작업 끝

import axios from "axios";

export const encryptData = async (data, storageKey, storage) => {
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
export const decryptData = async (storageKey, storage) => {
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
