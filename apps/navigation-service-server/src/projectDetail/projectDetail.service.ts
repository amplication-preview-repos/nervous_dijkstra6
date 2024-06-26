import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectDetailServiceBase } from "./base/projectDetail.service.base";

@Injectable()
export class ProjectDetailService extends ProjectDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
