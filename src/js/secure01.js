import CryptoJS from "crypto-js";

const SECURECODE = process.env.REACT_APP_SECURECODE;

// export function encryptData(data, storageKey, storage) {
//   console.log(data);
//   const secretKey = SECURECODE;
//   const encryptedData = CryptoJS.AES.encrypt(
//     JSON.stringify(data),
//     secretKey
//   ).toString();
//   storage.setItem(storageKey, encryptedData);
// }

// export function decryptData(storageKey, storage) {
//   const secretKey = SECURECODE;
//   const data = storage.getItem(storageKey);
//   if (data) {
//     const bytes = CryptoJS.AES.decrypt(data, secretKey);
//     const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//     return decryptedData;
//   }
//   return null;
// }

// 데이터 암호화 함수를 비동기 함수로 정의
export async function encryptData(data, storageKey, storage) {
  const secretKey = SECURECODE;
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();
  storage.setItem(storageKey, encryptedData);
}

// 데이터 복호화 함수를 비동기 함수로 정의
export async function decryptData(storageKey, storage) {
  const secretKey = SECURECODE;
  const data = storage.getItem(storageKey);
  if (data) {
    const bytes = CryptoJS.AES.decrypt(data, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
  return null;
}
