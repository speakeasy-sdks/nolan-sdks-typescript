/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  httpBearer: string;
}

export class DeletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeleteRequest extends SpeakeasyBase {
  /**
   * The name of the pipeline you want to delete.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pipeline_name",
  })
  pipelineName: string;

  /**
   * Type the name of the workspace.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace_name",
  })
  workspaceName: string;
}

export class DeletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeleteResponse extends SpeakeasyBase {
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
   * The pipeline was successfully deleted
   */
  @SpeakeasyMetadata()
  deletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDelete200ApplicationJSONAny?: any;
}
