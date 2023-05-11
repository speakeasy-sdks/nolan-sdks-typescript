/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreateTagID } from "./createtagid";
import { Expose, Type } from "class-transformer";

/**
 * Successful Response
 */
export class CreateTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CreateTagID)
  data: CreateTagID;
}
