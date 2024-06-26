import { ProjectDetail as TProjectDetail } from "../api/projectDetail/ProjectDetail";

export const PROJECTDETAIL_TITLE_FIELD = "id";

export const ProjectDetailTitle = (record: TProjectDetail): string => {
  return record.id?.toString() || String(record.id);
};
