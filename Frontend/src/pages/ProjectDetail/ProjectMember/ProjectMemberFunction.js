import axios from "axios";

export const getProjectMemberData = async (memberList, participateList) => {
  try {
    const memberResponses = await Promise.all(
      memberList.map(id => axios.post(`/users/readproject/${id}`, { _id: id }).then(response => response.data))
    );

    const participateResponses = await Promise.all(
      participateList.map(id => axios.post(`/users/readproject/${id}`, { _id: id }).then(response => response.data))
    );

    return {
      memberResponses,
      participateResponses,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
