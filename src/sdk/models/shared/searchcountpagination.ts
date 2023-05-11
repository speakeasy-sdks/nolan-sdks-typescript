/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SearchCount } from "./searchcount";
import { Expose, Type } from "class-transformer";

/**
 * Successful Response
 */
export class SearchCountPagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SearchCount })
  @Expose({ name: "data" })
  @Type(() => SearchCount)
  data: SearchCount[];

  @SpeakeasyMetadata()
  @Expose({ name: "has_more" })
  hasMore?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}
