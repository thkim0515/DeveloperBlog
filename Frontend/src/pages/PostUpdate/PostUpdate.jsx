import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { PostingComp } from "../../components/codePosting/PostingComp";
import axios from "axios";

export const PostUpdate = () => {
  // _id값을 받아옴 > PostUpdatData 로 전송 >> API 호출 >> return >>
  // return 값 상태 저장 >> postingcomp 전송 >> 수정 >> 수정데이터 반환 >> API Update
  let { _id } = useParams();

  //작성자만 접근 가능하게
  const location = useLocation();
  const userId = location.state?.userId;

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (_id) {
        try {
          const response = await axios.get(`/contents/read/${_id}`);
          const data = response.data;
          setPostData({
            ...data,
          });
        } catch (error) {
          console.error("에러:", error);
        }
      }
    };

    fetchData();
  }, [_id]);

  return userId ? (
    <div>
      <PostingComp edit={true} postData={postData} />
    </div>
  ) : (
    <NotFound />
  );
};
