/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RetriggerLabelMatchingApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameLabelMatchingPostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  httpBearer: string;
}

export class RetriggerLabelMatchingApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameLabelMatchingPostRequest extends SpeakeasyBase {
  /**
   * Which evaluation set do you want to view? Type its name.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=evaluation_set_name",
  })
  evaluationSetName: string;

  /**
   * Type the name of the workspace.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace_name",
  })
  workspaceName: string;
}

export class RetriggerLabelMatchingApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameLabelMatchingPostResponse extends SpeakeasyBase {
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
}
