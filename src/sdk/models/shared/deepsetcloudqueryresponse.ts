/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DeepsetCloudAnswer } from "./deepsetcloudanswer";
import { DeepsetCloudDocument } from "./deepsetclouddocument";
import { Expose, Type } from "class-transformer";

export class DeepsetCloudQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_debug" })
  debug?: Record<string, any>;

  /**
   * List of deepset Cloud answers.
   */
  @SpeakeasyMetadata({ elemType: DeepsetCloudAnswer })
  @Expose({ name: "answers" })
  @Type(() => DeepsetCloudAnswer)
  answers?: DeepsetCloudAnswer[];

  /**
   * List of deepset Cloud documents.
   */
  @SpeakeasyMetadata({ elemType: DeepsetCloudDocument })
  @Expose({ name: "documents" })
  @Type(() => DeepsetCloudDocument)
  documents?: DeepsetCloudDocument[];

  /**
   * The search query
   */
  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  query: string;

  /**
   * Unique identifier of the search query.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "query_id" })
  queryId?: string;
}
