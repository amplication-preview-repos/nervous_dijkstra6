import { ProjectDetail } from "../projectDetail/ProjectDetail";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  projectDetails?: Array<ProjectDetail>;
  updatedAt: Date;
  url: string | null;
};
