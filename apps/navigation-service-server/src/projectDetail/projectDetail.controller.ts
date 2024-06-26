import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectDetailService } from "./projectDetail.service";
import { ProjectDetailControllerBase } from "./base/projectDetail.controller.base";

@swagger.ApiTags("projectDetails")
@common.Controller("projectDetails")
export class ProjectDetailController extends ProjectDetailControllerBase {
  constructor(protected readonly service: ProjectDetailService) {
    super(service);
  }
}
