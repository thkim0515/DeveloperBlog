// components
import { ProjectInformation } from "./ProjectInformation/ProjectInformation";
import { ProjectContent } from "./ProjectContent/ProjectContent";
import { ProjectComments } from "./ProjectComments/ProjectComments";

export const TeamProjectDetail = () => {
  return (
    <div>
      <ProjectInformation />
      <ProjectContent />
      <ProjectComments />
    </div>
  );
};
