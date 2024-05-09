import axios from "axios";

export const handleUpload = async (selectedFile) => {
  if (!selectedFile) {
    // alert("파일을 선택해주세요.");
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    const response = await axios.post(`/awss3/userprofileimg`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    alert(`성공적으로 변경되었습니다.`);
    return response.data.filename;
  } catch (err) {
    const errorMessage =
      err.response?.data?.message || "파일 업로드 중 오류가 발생했습니다.";
    alert(errorMessage);
  }
};
