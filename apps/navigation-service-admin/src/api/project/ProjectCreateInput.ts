import { ProjectDetailCreateNestedManyWithoutProjectsInput } from "./ProjectDetailCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  projectDetails?: ProjectDetailCreateNestedManyWithoutProjectsInput;
  url?: string | null;
};
