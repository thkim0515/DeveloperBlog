import React from "react";
import * as S from "./ProjectMember.style";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { decryptData } from "../../../utils/secure";
import axios from "axios";
import { getProjectMemberData } from "./ProjectMemberFunction/ProjectMemberFunction";

export const ProjectMember = (props) => {
  const imageUrl = useSelector((state) => state.butketUrl.imageUrl);
  const [memberList, setMemberList] = useState([]);
  const [participateList, setParticipateList] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [buttonText, setButtonText] = useState("신청하기");

  useEffect(() => {
    const fetchMemberData = async () => {
      const userSession = await decryptData("user", sessionStorage);
      setUserInfo(userSession);

      try {
        const { memberResponses, participateResponses } =
          await getProjectMemberData(props.memberList, props.participateList);
        setMemberList(memberResponses);
        setParticipateList(participateResponses);
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    };

    fetchMemberData();
  }, [props.memberList, props.participateList]);

  // 참여자 여부에 따른 버튼 핸들러 상태값
  useEffect(() => {
    if (userInfo) {
      if (props.memberList.includes(userInfo.id)) {
        setButtonText("참여중");
      } else if (props.participateList.includes(userInfo.id)) {
        setButtonText("신청완료");
      } else {
        setButtonText("신청하기");
      }
    }
  }, [userInfo, props.memberList, props.participateList]);

  //  참여신청 API 호출
  const handlePostToServer = async () => {
    try {
      const response = await axios.put(
        `/project/participate/update/${props.postid}`,
        {
          userId: userInfo.id,
        }
      );

      if (response.status === 200) {
        setButtonText("신청완료");
        setParticipateList((prevList) => [
          ...prevList,
          {
            nickname: userInfo.nickname,
            profileimg: userInfo.profileimg,
          },
        ]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 버튼 핸들러
  const handleParticipate = async () => {
    if (!userInfo) {
      alert("로그인이 필요한 영역입니다.");
      return;
    }

    const isConfirmed = window.confirm("프로젝트에 참여 신청 하시겠습니까?");

    if (isConfirmed) {
      await handlePostToServer();
      alert("참여 신청되었습니다.");
    } else {
      alert("취소 되었습니다.");
    }
  };

  const acceptButton = async (targetId) => {
    const response = await axios.put(
      `/project/participate/accept/${props.postid}`,
      {
        userId: targetId,
      }
    );
    if (response.status === 200) {
      setMemberList((prevList) => [
        ...prevList,
        participateList.find((participant) => participant._id === targetId),
      ]);
      setParticipateList((prevList) =>
        prevList.filter((participant) => participant._id !== targetId)
      );
      alert("성공적으로 수락!");
    }
  };
  const rejctButton = async (targetId) => {
    const response = await axios.put(
      `/project/participate/reject/${props.postid}`,
      {
        userId: targetId,
      }
    );
    if (response.status === 200) {
      setParticipateList((prevList) =>
        prevList.filter((participant) => participant._id !== targetId)
      );
      alert("성공적으로 거절!");
    }
  };
  return (
    <>
      <S.Container>
        <S.MemberConatiner>
          <S.MmeberList>
            <h3>참여인원</h3>
            {memberList.map((member, index) => (
              <S.MemberItem key={index}>
                <S.ProfileImage
                  alt="프로필 사진"
                  src={`${imageUrl}profileImg/${member.profileimg}`}
                />
                <S.MemberText>{member.nickname}</S.MemberText>
              </S.MemberItem>
            ))}
          </S.MmeberList>
          <S.ParticipateButton>
            <Button
              onClick={handleParticipate}
              disabled={buttonText === "참여중" || buttonText === "신청완료"}
            >
              {buttonText}
            </Button>
          </S.ParticipateButton>
        </S.MemberConatiner>
        <S.ParticipateConatiner>
          <h3>신청인원</h3>
          {participateList.map((member, index) => (
            <S.MemberItem key={index}>
              <S.ProfileImage
                alt="프로필 사진"
                src={`${imageUrl}profileImg/${member.profileimg}`}
              />
              <S.MemberText>{member.nickname}</S.MemberText>
              {props.userid === userInfo?.id && (
                <>
                  <Button onClick={() => acceptButton(member._id)}>수락</Button>
                  <Button onClick={() => rejctButton(member._id)}>거절</Button>
                </>
              )}
            </S.MemberItem>
          ))}
        </S.ParticipateConatiner>
      </S.Container>
    </>
  );
};
