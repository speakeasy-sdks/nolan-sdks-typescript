/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PipelineFeedbackFile extends SpeakeasyBase {
  /**
   * Unique identifier of a file.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Name of the file
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
