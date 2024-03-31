import { useState, useEffect } from "react";
import { ProfileInfo } from "./ProfileInfo";
import { PasswordAndUserOut } from "./PasswordAndUserOut";
import axios from "axios";

export const ProfileEdit = () => {
  //유저정보 받아오기
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./data/loginuser.json");
        setUserData(response.data);
      } catch (error) {
        console.log(`AXIOS 실패!${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {userData && (
        <>
          <ProfileInfo userData={userData} />
          <PasswordAndUserOut userData={userData} />
        </>
      )}
    </>
  );
};
