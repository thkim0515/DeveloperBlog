// import AWS from 'aws-sdk';

// const s3 = new AWS.S3({
//   accessKeyId: 'YOUR_ACCESS_KEY_ID',
//   secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
//   region: 'YOUR_S3_REGION',
// });

// export const uploadImage = async (blob, callback) => {
//   const params = {
//     Bucket: 'YOUR_S3_BUCKET_NAME',
//     Key: `images/${Date.now()}_${blob.name}`, // 이미지의 고유한 키 생성
//     Body: blob,
//     ACL: 'public-read', // 업로드한 이미지를 공개로 설정
//     ContentType: blob.type, // 이미지의 MIME 타입
//   };

//   try {
//     const data = await s3.upload(params).promise();
//     const imageUrl = data.Location; // 업로드된 이미지의 URL
//     callback(imageUrl, 'alt text'); // 콜백 함수 호출
//     return true;
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     return false;
//   }
// };
