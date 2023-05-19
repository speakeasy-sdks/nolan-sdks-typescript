/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListEvalRunsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  httpBearer: string;
}

/**
 * The name of the entity you want to sort by.
 */
export enum ListEvalRunsFieldField {
  Name = "name",
  CreatedAt = "created_at",
  CreatedBy = "created_by",
  LastEditedBy = "last_edited_by",
  IntegratedExactMatch = "integrated_exact_match",
  IntegratedF1 = "integrated_f1",
  IsolatedExactMatch = "isolated_exact_match",
  IsolatedF1 = "isolated_f1",
  IntegratedMeanReciprocalRank = "integrated_mean_reciprocal_rank",
  IntegratedMeanAveragePrecision = "integrated_mean_average_precision",
  IntegratedRecallSingleHit = "integrated_recall_single_hit",
  IntegratedRecallMultiHit = "integrated_recall_multi_hit",
  IntegratedNormalDiscountedCumulativeGain = "integrated_normal_discounted_cumulative_gain",
  IntegratedPrecision = "integrated_precision",
}

/**
 * Choose how you want to sort the results.
 */
export enum ListEvalRunsOrderOrder {
  Asc = "ASC",
  Desc = "DESC",
}

export class ListEvalRunsRequest extends SpeakeasyBase {
  /**
   * Enter an ID if you want to see all entries after this ID.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  /**
   * Enter an ID if you want to see all entries before this ID.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=before",
  })
  before?: string;

  /**
   * The name of the entity you want to sort by.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" })
  field?: ListEvalRunsFieldField;

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
   * Choose how you want to sort the results.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ListEvalRunsOrderOrder;

  /**
   * Which page do you want to see? Type the number.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_number",
  })
  pageNumber?: number;

  /**
   * Partial implementation of the OData $select operator. It currently only supports selecting fields from the root entity or a child entity. Selecting fields from children's children is not supported. If you use this parameter, the API answer is always a flat list of distinct JSON objects with the selected properties, for example, '[{"given_name": "user1", "user_id": "..."}, ...]' for 'select=created_by/given_name, created_by/user_id'. The results are ordered by the first selected attribute. To learn more about the OData filter syntax, see: [Querying Data](https://www.odata.org/getting-started/basic-tutorial/#queryData).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=select",
  })
  select?: string;

  /**
   * Type the name of the workspace.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace_name",
  })
  workspaceName: string;
}

export class ListEvalRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful Response
   */
  @SpeakeasyMetadata()
  evalRunsResponse?: shared.EvalRunsResponse;

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
