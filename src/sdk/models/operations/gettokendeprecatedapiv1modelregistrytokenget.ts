/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTokenDeprecatedApiV1ModelRegistryTokenGetSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    httpBearer: string;
}

export class GetTokenDeprecatedApiV1ModelRegistryTokenGetResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful Response
     */
    @SpeakeasyMetadata()
    modelRegistryToken?: shared.ModelRegistryToken;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
