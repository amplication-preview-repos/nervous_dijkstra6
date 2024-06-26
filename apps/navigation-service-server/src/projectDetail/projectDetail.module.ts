import { Module } from "@nestjs/common";
import { ProjectDetailModuleBase } from "./base/projectDetail.module.base";
import { ProjectDetailService } from "./projectDetail.service";
import { ProjectDetailController } from "./projectDetail.controller";
import { ProjectDetailResolver } from "./projectDetail.resolver";

@Module({
  imports: [ProjectDetailModuleBase],
  controllers: [ProjectDetailController],
  providers: [ProjectDetailService, ProjectDetailResolver],
  exports: [ProjectDetailService],
})
export class ProjectDetailModule {}
