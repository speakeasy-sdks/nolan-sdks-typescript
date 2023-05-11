/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PipelineName } from "./pipelinename";
import { SearchResultHistoryEntry } from "./searchresulthistoryentry";
import { UserIdName } from "./useridname";
import { Expose, Transform, Type } from "class-transformer";

export class SearchHistory extends SpeakeasyBase {
  /**
   * Duration in ms.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pipeline" })
  @Type(() => PipelineName)
  pipeline: PipelineName;

  /**
   * Query request
   */
  @SpeakeasyMetadata()
  @Expose({ name: "request" })
  request: Record<string, any>;

  /**
   * Response list from Haystack open source
   */
  @SpeakeasyMetadata({ elemType: SearchResultHistoryEntry })
  @Expose({ name: "response" })
  @Type(() => SearchResultHistoryEntry)
  response: SearchResultHistoryEntry[];

  /**
   * Unique identifier of the search
   */
  @SpeakeasyMetadata()
  @Expose({ name: "search_history_id" })
  searchHistoryId: string;

  /**
   * Timestamp when the query was sent
   */
  @SpeakeasyMetadata()
  @Expose({ name: "time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  time: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => UserIdName)
  user: UserIdName;
}
