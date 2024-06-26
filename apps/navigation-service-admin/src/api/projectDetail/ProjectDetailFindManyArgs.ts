import { ProjectDetailWhereInput } from "./ProjectDetailWhereInput";
import { ProjectDetailOrderByInput } from "./ProjectDetailOrderByInput";

export type ProjectDetailFindManyArgs = {
  where?: ProjectDetailWhereInput;
  orderBy?: Array<ProjectDetailOrderByInput>;
  skip?: number;
  take?: number;
};
