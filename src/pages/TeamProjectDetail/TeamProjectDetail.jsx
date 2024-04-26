import { ProjectInformation } from "./ProjectInformation/ProjectInformation";
import { ProjectContents } from "./ProjectContents/ProjectContents";
import { ProjectComments } from "./ProjectComments/ProjectComments";

export const TeamProjectDetail = () => {
  return (
    <div>
      <ProjectInformation />
      <ProjectContents />
      <ProjectComments />
    </div>
  );
};
