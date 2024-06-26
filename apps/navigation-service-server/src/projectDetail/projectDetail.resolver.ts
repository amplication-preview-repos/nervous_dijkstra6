import * as graphql from "@nestjs/graphql";
import { ProjectDetailResolverBase } from "./base/projectDetail.resolver.base";
import { ProjectDetail } from "./base/ProjectDetail";
import { ProjectDetailService } from "./projectDetail.service";

@graphql.Resolver(() => ProjectDetail)
export class ProjectDetailResolver extends ProjectDetailResolverBase {
  constructor(protected readonly service: ProjectDetailService) {
    super(service);
  }
}
