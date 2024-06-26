/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ProjectDetail } from "./ProjectDetail";
import { ProjectDetailCountArgs } from "./ProjectDetailCountArgs";
import { ProjectDetailFindManyArgs } from "./ProjectDetailFindManyArgs";
import { ProjectDetailFindUniqueArgs } from "./ProjectDetailFindUniqueArgs";
import { CreateProjectDetailArgs } from "./CreateProjectDetailArgs";
import { UpdateProjectDetailArgs } from "./UpdateProjectDetailArgs";
import { DeleteProjectDetailArgs } from "./DeleteProjectDetailArgs";
import { Project } from "../../project/base/Project";
import { ProjectDetailService } from "../projectDetail.service";
@graphql.Resolver(() => ProjectDetail)
export class ProjectDetailResolverBase {
  constructor(protected readonly service: ProjectDetailService) {}

  async _projectDetailsMeta(
    @graphql.Args() args: ProjectDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProjectDetail])
  async projectDetails(
    @graphql.Args() args: ProjectDetailFindManyArgs
  ): Promise<ProjectDetail[]> {
    return this.service.projectDetails(args);
  }

  @graphql.Query(() => ProjectDetail, { nullable: true })
  async projectDetail(
    @graphql.Args() args: ProjectDetailFindUniqueArgs
  ): Promise<ProjectDetail | null> {
    const result = await this.service.projectDetail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProjectDetail)
  async createProjectDetail(
    @graphql.Args() args: CreateProjectDetailArgs
  ): Promise<ProjectDetail> {
    return await this.service.createProjectDetail({
      ...args,
      data: {
        ...args.data,

        project: args.data.project
          ? {
              connect: args.data.project,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ProjectDetail)
  async updateProjectDetail(
    @graphql.Args() args: UpdateProjectDetailArgs
  ): Promise<ProjectDetail | null> {
    try {
      return await this.service.updateProjectDetail({
        ...args,
        data: {
          ...args.data,

          project: args.data.project
            ? {
                connect: args.data.project,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ProjectDetail)
  async deleteProjectDetail(
    @graphql.Args() args: DeleteProjectDetailArgs
  ): Promise<ProjectDetail | null> {
    try {
      return await this.service.deleteProjectDetail(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Project, {
    nullable: true,
    name: "project",
  })
  async getProject(
    @graphql.Parent() parent: ProjectDetail
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
