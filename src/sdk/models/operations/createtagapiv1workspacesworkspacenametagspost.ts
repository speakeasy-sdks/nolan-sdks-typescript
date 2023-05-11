/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class CreateTagApiV1WorkspacesWorkspaceNameTagsPostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  httpBearer: string;
}

/**
 * The parameters of the tag you want to create.
 */
export class CreateTagApiV1WorkspacesWorkspaceNameTagsPostCreateTag extends SpeakeasyBase {
  /**
   * The name of the tag.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class CreateTagApiV1WorkspacesWorkspaceNameTagsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: CreateTagApiV1WorkspacesWorkspaceNameTagsPostCreateTag;

  /**
   * Type the name of the workspace.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace_name",
  })
  workspaceName: string;
}

export class CreateTagApiV1WorkspacesWorkspaceNameTagsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful Response
   */
  @SpeakeasyMetadata()
  createTagResponse?: shared.CreateTagResponse;

  /**
   * Validation Error
   */
  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
