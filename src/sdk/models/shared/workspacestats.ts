/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Successful Response
 */
export class WorkspaceStats extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "average_response_time" })
    averageResponseTime: number;

    @SpeakeasyMetadata()
    @Expose({ name: "document_count" })
    documentCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "file_count" })
    fileCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "search_request_count" })
    searchRequestCount: number;
}
