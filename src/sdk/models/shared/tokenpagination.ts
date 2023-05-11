/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Token } from "./token";
import { Expose, Type } from "class-transformer";

/**
 * Successful Response
 */
export class TokenPagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Token })
  @Expose({ name: "data" })
  @Type(() => Token)
  data: Token[];

  @SpeakeasyMetadata()
  @Expose({ name: "has_more" })
  hasMore: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;
}
