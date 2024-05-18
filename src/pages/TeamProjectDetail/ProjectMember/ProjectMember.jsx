import React from "react";
import * as S from "./ProjectMember.style";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import axios from "axios";

export const ProjectMember = (props) => {
  const [memberList, setMemberList] = useState([]);
  const imageUrl = useSelector((state) => state.butketUrl.imageUrl);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        await Promise.all(
          props.data.map((id) =>
            axios
              .post(`/users/readproject/${id}`, { _id: id })
              .then((response) => response.data)
          )
        ).then((responses) => setMemberList(responses));
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    };

    fetchMemberData();
  }, [props.data]);

  return (
    <>
      <S.Container>
        <S.MmeberList>
          <h3>참여인원</h3>
          {memberList.map((member, index) => (
            <S.MemberItem key={index}>
              <S.ProfileImage
                alt="프로필 사진"
                src={`${imageUrl}profileImg/${member.profileimg}`}
              />
              <S.MemberText>
                {member.nickname}
                {/* {index < memberList.length - 1 && " , "} */}
              </S.MemberText>
            </S.MemberItem>
          ))}
        </S.MmeberList>
        <S.ParticipateButton>
          <Button>참여하기</Button>
        </S.ParticipateButton>
      </S.Container>
    </>
  );
};
