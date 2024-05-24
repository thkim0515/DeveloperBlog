import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { selectTab } from "../../../_slice/tabSlice";

export const SideTab = ({ selectedTab }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(selectedTab);

  const handleSelectedTab = e => {
    const tabName = e.target.getAttribute("data-name");
    setActiveTab(tabName);
    dispatch(selectTab(tabName));
  };

  return (
    <SideTabBox onClick={handleSelectedTab}>
      <TabItem data-name="myProject" active={activeTab === "myProject"}>
        My Project
      </TabItem>
      <TabItem data-name="projectAlarm" active={activeTab === "projectAlarm"}>
        Project Alarm
      </TabItem>
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
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 4px;
    background-color: #fd7216; /* Change to your desired underline color */
    transition: width 0.3s ease;
  }

  ${props =>
    props.active &&
    css`
      &:after {
        width: 100%;
      }
    `}
`;
