import styled from "styled-components";

export const MyPageBox = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  background-color: #ffffff;
  font-size: 1.25rem;
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  gap: 20px;
`;

export const Sidebar = styled.div`
  width: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  font-size: 1.125rem;

  ul {
    margin-top: 2.75rem;
    padding-left: 1.5rem;
  }
`;

export const MenuItem = styled.li`
  margin-bottom: 1.75rem;

  a {
    color: ${({ $active }) => ($active ? "#007bff" : "black")};
    border-bottom: ${({ $active }) => ($active ? "2px solid #007bff" : "none")};
    padding-bottom: 0.313rem;
    display: inline-block;
  }

  a:hover {
    color: #0056b3;
  }
`;

export const ProfileSection = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.div`
  position: relative;
`;

export const ImagePlaceholder = styled.div`
  width: 80px;
  height: 80px;
  background-color: pink;
  border-radius: 50%;
`;

export const EditButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Nickname = styled.h2`
  font-size: 1.5em;
`;

export const ProfileInfo = styled.div`
  .info-row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  label {
    width: 100px;
    font-weight: bold;
  }

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const SaveButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
