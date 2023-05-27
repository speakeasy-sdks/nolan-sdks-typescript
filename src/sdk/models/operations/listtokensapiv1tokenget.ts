/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListTokensApiV1TokenGetSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    httpBearer: string;
}

export class ListTokensApiV1TokenGetRequest extends SpeakeasyBase {
    /**
     * Enter an ID if you want to see all entries after this ID.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
    after?: string;

    /**
     * Enter an ID if you want to see all entries before this ID.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
    before?: string;

    /**
     * How many entries do you want to display? Leaving this field empty keeps the default and max 10 results are returned.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Which page do you want to see? Type the number.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
    pageNumber?: number;
}

export class ListTokensApiV1TokenGetResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Validation Error
     */
    @SpeakeasyMetadata()
    httpValidationError?: shared.HTTPValidationError;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    tokenPagination?: shared.TokenPagination;
}
