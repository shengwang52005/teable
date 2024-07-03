/* eslint-disable sonarjs/no-duplicate-string */
import { Body, Controller, Param, Patch, Post, Get, Delete, Query } from '@nestjs/common';
import { Event } from '@teable/core';
import type {
  ICreateSpaceVo,
  IUpdateSpaceVo,
  IGetSpaceVo,
  EmailInvitationVo,
  ListSpaceInvitationLinkVo,
  CreateSpaceInvitationLinkVo,
  UpdateSpaceInvitationLinkVo,
  ListSpaceCollaboratorVo,
  IGetBaseVo,
} from '@teable/openapi';
import {
  createSpaceRoSchema,
  ICreateSpaceRo,
  updateSpaceRoSchema,
  IUpdateSpaceRo,
  emailSpaceInvitationRoSchema,
  updateSpaceInvitationLinkRoSchema,
  CreateSpaceInvitationLinkRo,
  EmailSpaceInvitationRo,
  UpdateSpaceInvitationLinkRo,
  createSpaceInvitationLinkRoSchema,
  updateSpaceCollaborateRoSchema,
  UpdateSpaceCollaborateRo,
} from '@teable/openapi';
import { EmitControllerEvent } from '../../event-emitter/decorators/emit-controller-event.decorator';
import { ZodValidationPipe } from '../../zod.validation.pipe';
import { Permissions } from '../auth/decorators/permissions.decorator';
import { CollaboratorService } from '../collaborator/collaborator.service';
import { InvitationService } from '../invitation/invitation.service';
import { SpaceService } from './space.service';

@Controller('api/space/')
export class SpaceController {
  constructor(
    private readonly spaceService: SpaceService,
    private readonly invitationService: InvitationService,
    private readonly collaboratorService: CollaboratorService
  ) {}

  @Post()
  @Permissions('space|create')
  @EmitControllerEvent(Event.SPACE_CREATE)
  async createSpace(
    @Body(new ZodValidationPipe(createSpaceRoSchema))
    createSpaceRo: ICreateSpaceRo
  ): Promise<ICreateSpaceVo> {
    return await this.spaceService.createSpace(createSpaceRo);
  }

  @Permissions('space|update')
  @Patch(':spaceId')
  @EmitControllerEvent(Event.SPACE_UPDATE)
  async updateSpace(
    @Param('spaceId') spaceId: string,
    @Body(new ZodValidationPipe(updateSpaceRoSchema))
    updateSpaceRo: IUpdateSpaceRo
  ): Promise<IUpdateSpaceVo> {
    return await this.spaceService.updateSpace(spaceId, updateSpaceRo);
  }

  @Permissions('space|read')
  @Get(':spaceId')
  async getSpaceById(@Param('spaceId') spaceId: string): Promise<IGetSpaceVo> {
    return await this.spaceService.getSpaceById(spaceId);
  }

  @Get()
  async getSpaceList(): Promise<IGetSpaceVo[]> {
    return await this.spaceService.getSpaceList();
  }

  @Permissions('space|delete')
  @Delete(':spaceId')
  @EmitControllerEvent(Event.SPACE_DELETE)
  async deleteSpace(@Param('spaceId') spaceId: string) {
    await this.spaceService.deleteSpace(spaceId);
    return null;
  }

  @Permissions('space|invite_link')
  @Post(':spaceId/invitation/link')
  async createInvitationLink(
    @Param('spaceId') spaceId: string,
    @Body(new ZodValidationPipe(createSpaceInvitationLinkRoSchema))
    spaceInvitationLinkRo: CreateSpaceInvitationLinkRo
  ): Promise<CreateSpaceInvitationLinkVo> {
    return await this.invitationService.generateInvitationLinkBySpace(
      spaceId,
      spaceInvitationLinkRo
    );
  }

  @Permissions('space|invite_link')
  @Delete(':spaceId/invitation/link/:invitationId')
  async deleteInvitationLink(
    @Param('spaceId') spaceId: string,
    @Param('invitationId') invitationId: string
  ): Promise<void> {
    return await this.invitationService.deleteInvitationLinkBySpace(spaceId, invitationId);
  }

  @Permissions('base|read')
  @Get(':spaceId/base')
  async getBaseList(@Param('spaceId') spaceId: string): Promise<IGetBaseVo[]> {
    return await this.spaceService.getBaseListBySpaceId(spaceId);
  }

  @Permissions('space|invite_link')
  @Patch(':spaceId/invitation/link/:invitationId')
  async updateInvitationLink(
    @Param('spaceId') spaceId: string,
    @Param('invitationId') invitationId: string,
    @Body(new ZodValidationPipe(updateSpaceInvitationLinkRoSchema))
    updateSpaceInvitationLinkRo: UpdateSpaceInvitationLinkRo
  ): Promise<UpdateSpaceInvitationLinkVo> {
    return await this.invitationService.updateInvitationLinkBySpace(
      spaceId,
      invitationId,
      updateSpaceInvitationLinkRo
    );
  }

  @Permissions('space|invite_link')
  @Get(':spaceId/invitation/link')
  async listInvitationLinkBySpace(
    @Param('spaceId') spaceId: string
  ): Promise<ListSpaceInvitationLinkVo> {
    return await this.invitationService.getInvitationLinkBySpace(spaceId);
  }

  @Permissions('space|invite_email')
  @Post(':spaceId/invitation/email')
  async emailInvitation(
    @Param('spaceId') spaceId: string,
    @Body(new ZodValidationPipe(emailSpaceInvitationRoSchema))
    emailSpaceInvitationRo: EmailSpaceInvitationRo
  ): Promise<EmailInvitationVo> {
    return await this.invitationService.emailInvitationBySpace(spaceId, emailSpaceInvitationRo);
  }

  @Permissions('space|read')
  @Get(':spaceId/collaborators')
  async listCollaborator(@Param('spaceId') spaceId: string): Promise<ListSpaceCollaboratorVo> {
    return await this.collaboratorService.getListBySpace(spaceId);
  }

  @Permissions('space|grant_role')
  @Patch(':spaceId/collaborators')
  async updateCollaborator(
    @Param('spaceId') spaceId: string,
    @Body(new ZodValidationPipe(updateSpaceCollaborateRoSchema))
    updateSpaceCollaborateRo: UpdateSpaceCollaborateRo
  ): Promise<void> {
    await this.collaboratorService.updateCollaborator(spaceId, updateSpaceCollaborateRo);
  }

  @Permissions('space|delete')
  @Delete(':spaceId/collaborators')
  async deleteCollaborator(
    @Param('spaceId') spaceId: string,
    @Query('userId') userId: string
  ): Promise<void> {
    await this.collaboratorService.deleteCollaborator(spaceId, userId);
  }
}
