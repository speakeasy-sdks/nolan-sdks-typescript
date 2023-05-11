/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  httpBearer: string;
}

/**
 * Type the names of the files you want to delete, separated with commas.
 */
export class DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteFileNames extends SpeakeasyBase {
  /**
   * The names of the files to delete.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "names" })
  names: string[];
}

export class DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteFileNames;

  /**
   * Type the name of the workspace.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace_name",
  })
  workspaceName: string;
}

export class DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Validation Error
   */
  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successful Response
   */
  @SpeakeasyMetadata()
  deleteFilesApiV1WorkspacesWorkspaceNameFilesDelete200ApplicationJSONAny?: any;
}
