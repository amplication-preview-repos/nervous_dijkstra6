import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectDetailListRelationFilter } from "../projectDetail/ProjectDetailListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  projectDetails?: ProjectDetailListRelationFilter;
  url?: StringNullableFilter;
};
