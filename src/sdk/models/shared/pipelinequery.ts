/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PipelineQuery extends SpeakeasyBase {
  /**
   * Shows debug output for the pipeline (for example, prompt).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "debug" })
  debug?: boolean;

  /**
   * Filters you can use to narrow down the search. For more information, see [metadata filtering](https://docs.haystack.deepset.ai/docs/metadata-filtering).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  /**
   * Parameters you can use to customize the pipeline.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "params" })
  params?: Record<string, any>;

  /**
   * A list of queries you want to run through the pipeline.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "queries" })
  queries: string[];
}
