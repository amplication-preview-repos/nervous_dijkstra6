import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectDetailCreateInput = {
  detail?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
