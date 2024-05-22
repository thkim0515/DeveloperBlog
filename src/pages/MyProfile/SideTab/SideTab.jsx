import styled from "styled-components";
import { useDispatch } from "react-redux";
import { selectTab } from "../../../_slice/tabSlice";

export const SideTab = () => {
  const dispatch = useDispatch();
  const handleSelectedTap = e => {
    dispatch(selectTab(e.target.getAttribute("data-name")));
  };

  return (
    <SideTabBox onClick={handleSelectedTap}>
      <TabItem data-name="myProject">My Project</TabItem>
      <TabItem data-name="projectAlarm">Project Alarm</TabItem>
    </SideTabBox>
  );
};

const SideTabBox = styled.aside`
  display: flex;
  gap: 2rem;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 2.75rem 0;
`;

const TabItem = styled.p`
  cursor: pointer;
`;
