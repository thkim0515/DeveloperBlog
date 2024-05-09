import React, { useState } from "react";
import axios from "axios";

export const S3Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("파일 크기는 5MB를 초과할 수 없습니다.");
        event.target.value = null;
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      // alert("파일을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("/s3bucket/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(`파일이 성공적으로 업로드되었습니다`);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "파일 업로드 중 오류가 발생했습니다.";
      alert(errorMessage);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
};
