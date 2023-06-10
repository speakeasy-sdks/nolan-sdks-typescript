/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Filters you can use to narrow down the search. For more information, see [metadata filtering](https://docs.haystack.deepset.ai/docs/metadata-filtering).
 */
export class FetchDocumentsParamsHaystackFilters extends SpeakeasyBase {}

export class FetchDocumentsParams extends SpeakeasyBase {
    /**
     * Filters you can use to narrow down the search. For more information, see [metadata filtering](https://docs.haystack.deepset.ai/docs/metadata-filtering).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "filters" })
    @Type(() => FetchDocumentsParamsHaystackFilters)
    filters?: FetchDocumentsParamsHaystackFilters;

    /**
     * Returns vector representations of the documents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "return_embedding" })
    returnEmbedding?: boolean;

    /**
     * Specifies if documents should be prefiltered in the document store instead of within the retriever.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "use_prefiltering" })
    usePrefiltering?: boolean;
}
