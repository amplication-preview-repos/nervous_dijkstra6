import { Project } from "../project/Project";

export type ProjectDetail = {
  createdAt: Date;
  detail: string | null;
  id: string;
  project?: Project | null;
  updatedAt: Date;
};
