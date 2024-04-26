import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Metas } from "./../../components/common/Metas";
import { useLocation } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { PostingComp } from "../../components/codePosting/PostingComp";
import axios from "axios";

export const PostUpdate = () => {
  // _id값을 받아옴 > PostUpdatData 로 전송 >> API 호출 >> return >>
  // return 값 상태 저장 >> ToastEditor 전송 >> 수정 >> 수정데이터 반환 >>
  // 반환 데이터 PostUpdatData 로 전송 >> API Update
  let { _id } = useParams();

  //작성자만 접근 가능하게
  const location = useLocation();
  const userId = location.state?.userId;

  const [postDataToToast, setPostDataToToast] = useState(null);

  const [postData, setPostData] = useState({
    _id: "",
    title: "",
    ace_contents: "",
    toast_contents: "",
    language: "",
    imagePath: "",
    postdate: "",
    publicPrivate: false,
    views: 0,
    likes: 0,
    likeUser: [],
    userId: {
      nickname: "",
      profileImg: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      if (_id) {
        try {
          const response = await axios.get(`/contents/read/${_id}`);
          const data = response.data;
          setPostData({
            ...data,
          });
          setPostDataToToast(data.toast_contents);
        } catch (error) {
          console.error("에러:", error);
        }
      }
    };

    fetchData();
  }, [_id, setPostDataToToast]);

  return userId ? (
    <div>
      <Metas title="게시글 업로드" none />
      <PostingComp
        edit={true}
        postData={postData}
        postDataToToast={postDataToToast}
        setPostData={setPostData}
        setPostDataToToast={setPostDataToToast}
      />
    </div>
  ) : (
    <NotFound />
  );
};
