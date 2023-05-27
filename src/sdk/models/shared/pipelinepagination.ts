/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PipelineIndexing } from "./pipelineindexing";
import { Expose, Type } from "class-transformer";

/**
 * Successful Response
 */
export class PipelinePagination extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: PipelineIndexing })
    @Expose({ name: "data" })
    @Type(() => PipelineIndexing)
    data: PipelineIndexing[];

    @SpeakeasyMetadata()
    @Expose({ name: "has_more" })
    hasMore: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total: number;
}
