import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectDetailWhereInput = {
  detail?: StringNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
};
