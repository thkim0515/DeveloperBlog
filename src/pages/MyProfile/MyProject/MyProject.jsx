import axios from "axios";
import { useEffect } from "react";
import { ProjectCard } from "../../../components/ProjectCard/ProjectCard";
import { useUserLogin } from "../../../context/UserLoginContext";

export const MyProject = ({ user }) => {
  console.log(`myProject-user: ${user}`);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/project/myproject/${user}`);
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return <></>;
};
