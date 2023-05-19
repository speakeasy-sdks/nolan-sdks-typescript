/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListFilesApiV1WorkspacesWorkspaceNameFilesGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  httpBearer: string;
}

/**
 * The name of the entity you want to sort by.
 */
export enum ListFilesApiV1WorkspacesWorkspaceNameFilesGetFieldField {
  CreatedAt = "created_at",
  Name = "name",
}

/**
 * Choose how you want to sort the results.
 */
export enum ListFilesApiV1WorkspacesWorkspaceNameFilesGetOrderOrder {
  Asc = "ASC",
  Desc = "DESC",
}

export class ListFilesApiV1WorkspacesWorkspaceNameFilesGetRequest extends SpeakeasyBase {
  /**
   * Enter a file ID if you want to see all files after this file ID.You can only use this parameter in combination with the 'after_value' parameter. If you are using the default sorting by created_at, you can set this value to a datetime in iso format. Example: '2023-04-25T07:37:58.326042+00:00'.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=after_file_id",
  })
  afterFileId?: string;

  /**
   * Enter a value if you want to see all files that are sorted after this value and a file ID defined in the 'after_file_id' parameter. This value must match the type of the field you want to sort by. You can only use this parameter in combination with the 'after_file_id' parameter.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=after_value",
  })
  afterValue?: any;

  /**
   * What file do you want to see? Enter its content.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=content",
  })
  content?: string;

  /**
   * The name of the entity you want to sort by.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" })
  field?: ListFilesApiV1WorkspacesWorkspaceNameFilesGetFieldField;

  /**
   * The OData filter you want to use to in your query. It supports exact match and `AND` operations. For example, to filter for a metadata `category:news`, here's what the URL could look like: 'url = "https://api.cloud.deepset.ai/api/v1/workspaces/production/files?limit=10&filter=category eq 'news'"'. OData filters only work with cursor-based pagination (leave the `page_number` field blank to enable it).To learn more about the OData filter syntax, see: [Querying Data](https://www.odata.org/getting-started/basic-tutorial/#queryData).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter",
  })
  filter?: string;

  /**
   * How many entries do you want to display? Leaving this field empty keeps the default and max 10 results are returned.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  /**
   * Type the metadata key by which you want to filter the files.
   *
   * @deprecated this field will be removed in a future release, please migrate away from it as soon as possible
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=meta_key",
  })
  metaKey?: string;

  /**
   * Type the metadata value by which you want to filter the files.
   *
   * @deprecated this field will be removed in a future release, please migrate away from it as soon as possible
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=meta_value",
  })
  metaValue?: string;

  /**
   * What file do you want to see? Type its name.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  /**
   * Choose how you want to sort the results.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ListFilesApiV1WorkspacesWorkspaceNameFilesGetOrderOrder;

  /**
   * Which page do you want to see? Type the number.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_number",
  })
  pageNumber?: number;

  /**
   * Type the name of the workspace.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace_name",
  })
  workspaceName: string;
}

export class ListFilesApiV1WorkspacesWorkspaceNameFilesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful Response
   */
  @SpeakeasyMetadata()
  filePagination?: shared.FilePagination;

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
