/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SearchResultHistoryEntry extends SpeakeasyBase {
  /**
   * Documents that contain the search result.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "documents" })
  documents: Record<string, any>[];

  /**
   * The rank of the search result. A lower value means more relevant result.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "rank" })
  rank?: number;

  /**
   * List of search results.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "result" })
  result?: Record<string, any>;

  /**
   * List of search results.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "search_result_history_id" })
  searchResultHistoryId: string;

  /**
   * The type of the search result. This can be either 'document' or 'answer'.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: number;
}
