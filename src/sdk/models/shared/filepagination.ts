/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { File } from "./file";
import { Expose, Type } from "class-transformer";

/**
 * Successful Response
 */
export class FilePagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: File })
  @Expose({ name: "data" })
  @Type(() => File)
  data: File[];

  @SpeakeasyMetadata()
  @Expose({ name: "has_more" })
  hasMore: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;
}
