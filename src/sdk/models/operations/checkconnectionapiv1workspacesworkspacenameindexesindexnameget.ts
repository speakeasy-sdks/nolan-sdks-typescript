/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CheckConnectionApiV1WorkspacesWorkspaceNameIndexesIndexNameGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  httpBearer: string;
}

export class CheckConnectionApiV1WorkspacesWorkspaceNameIndexesIndexNameGetRequest extends SpeakeasyBase {
  /**
   * The name of the pipeline.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=index_name",
  })
  indexName: string;

  /**
   * Type the name of the workspace.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace_name",
  })
  workspaceName: string;
}

export class CheckConnectionApiV1WorkspacesWorkspaceNameIndexesIndexNameGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful Response
   */
  @SpeakeasyMetadata()
  documentStore?: shared.DocumentStore;

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
