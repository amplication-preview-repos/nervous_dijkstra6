import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectDetailUpdateInput = {
  detail?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
