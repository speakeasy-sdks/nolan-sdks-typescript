/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Session } from "./session";
import { Expose, Type } from "class-transformer";

/**
 * Your upload sessions.
 */
export class PaginatedSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Session })
  @Expose({ name: "data" })
  @Type(() => Session)
  data: Session[];

  /**
   * Whether the session has more files.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "has_more" })
  hasMore: boolean;

  /**
   * The total number of files in the session.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;
}
