/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UploadFileApiV1WorkspacesWorkspaceNameFilesPostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  httpBearer: string;
}

/**
 * An enumeration.
 */
export enum UploadFileApiV1WorkspacesWorkspaceNameFilesPostWriteModeFileWriteModeEnumEnum {
  Keep = "KEEP",
  Overwrite = "OVERWRITE",
  Fail = "FAIL",
}

export class UploadFileApiV1WorkspacesWorkspaceNameFilesPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  bodyUploadFileApiV1WorkspacesWorkspaceNameFilesPost?: shared.BodyUploadFileApiV1WorkspacesWorkspaceNameFilesPost;

  /**
   * How do you want to call your file? Use this field only if you're creating a file to upload. If you're uploading a ready file, leave this field empty.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=file_name",
  })
  fileName?: string;

  /**
   * Type the name of the workspace.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace_name",
  })
  workspaceName: string;

  /**
   * The write mode determines how to handle uploading a file if it's already in the workspace. Your options are: keep the file with the same name, make the request fail if a file with the same name already exists, or overwrite the file. If you choose to overwrite, all files with the same name are overwritten.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=write_mode",
  })
  writeMode?: UploadFileApiV1WorkspacesWorkspaceNameFilesPostWriteModeFileWriteModeEnumEnum;
}

export class UploadFileApiV1WorkspacesWorkspaceNameFilesPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Validation Error
   */
  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  /**
   * Your file's in the workspace.
   */
  @SpeakeasyMetadata()
  responseUploadFileApiV1WorkspacesWorkspaceNameFilesPost?: Record<
    string,
    string
  >;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
