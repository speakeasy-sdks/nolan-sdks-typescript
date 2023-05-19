/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTokenApiV1ModelRegistryTokensProviderGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
  })
  httpBearer: string;
}

/**
 * The provider of the model registry
 */
export enum GetTokenApiV1ModelRegistryTokensProviderGetProviderModelProvider {
  Huggingface = "huggingface",
  Openai = "openai",
  Cohere = "cohere",
}

export class GetTokenApiV1ModelRegistryTokensProviderGetRequest extends SpeakeasyBase {
  /**
   * The provider of the model registry
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=provider",
  })
  provider: GetTokenApiV1ModelRegistryTokensProviderGetProviderModelProvider;
}

export class GetTokenApiV1ModelRegistryTokensProviderGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Validation Error
   */
  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

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
