/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class QueryDocumentsParams extends SpeakeasyBase {
    /**
     * Specifies if returned documents must match all query terms.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "all_terms_must_match" })
    allTermsMustMatch?: boolean;

    /**
     * Sends a custom query.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "custom_query" })
    customQuery?: string;

    /**
     * Filters you can use to narrow down the search. For more information, see [metadata filtering](https://docs.haystack.deepset.ai/docs/metadata-filtering).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "filters" })
    filters?: Record<string, any>;

    /**
     * The search query
     */
    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query?: string;

    /**
     * The vector representation of the query.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "query_emb" })
    queryEmb?: number[];

    /**
     * Returns vector representations of the documents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "return_embedding" })
    returnEmbedding?: boolean;

    /**
     * The number of results to return.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "top_k" })
    topK?: number;

    /**
     * Specifies if documents should be prefiltered in the document store instead of within the retriever.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "use_prefiltering" })
    usePrefiltering?: boolean;
}
