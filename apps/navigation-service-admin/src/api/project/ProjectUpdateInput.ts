import { ProjectDetailUpdateManyWithoutProjectsInput } from "./ProjectDetailUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  name?: string | null;
  projectDetails?: ProjectDetailUpdateManyWithoutProjectsInput;
  url?: string | null;
};
