/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ModelRegistryToken {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get Token [private]
     *
     * @remarks
     * Returns the model token. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async get(
        req: operations.GetTokenApiV1ModelRegistryTokensProviderGetRequest,
        security: operations.GetTokenApiV1ModelRegistryTokensProviderGetSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTokenApiV1ModelRegistryTokensProviderGetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTokenApiV1ModelRegistryTokensProviderGetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/model_registry_tokens/{provider}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetTokenApiV1ModelRegistryTokensProviderGetSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTokenApiV1ModelRegistryTokensProviderGetResponse =
            new operations.GetTokenApiV1ModelRegistryTokensProviderGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.modelRegistryToken = utils.objectToClass(
                        httpRes?.data,
                        shared.ModelRegistryToken
                    );
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.httpValidationError = utils.objectToClass(
                        httpRes?.data,
                        shared.HTTPValidationError
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get Token Deprecated [private]
     *
     * @remarks
     * Returns the Hugging Face model token. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     *
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
    async getTokenDeprecated(
        security: operations.GetTokenDeprecatedApiV1ModelRegistryTokenGetSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTokenDeprecatedApiV1ModelRegistryTokenGetResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/model_registry_token";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetTokenDeprecatedApiV1ModelRegistryTokenGetSecurity(
                security
            );
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTokenDeprecatedApiV1ModelRegistryTokenGetResponse =
            new operations.GetTokenDeprecatedApiV1ModelRegistryTokenGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.modelRegistryToken = utils.objectToClass(
                        httpRes?.data,
                        shared.ModelRegistryToken
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get Tokens [private]
     *
     * @remarks
     * Returns the model tokens. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async list(
        security: operations.ListTokensApiV1ModelRegistryTokensGetSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListTokensApiV1ModelRegistryTokensGetResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/model_registry_tokens";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListTokensApiV1ModelRegistryTokensGetSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ListTokensApiV1ModelRegistryTokensGetResponse =
            new operations.ListTokensApiV1ModelRegistryTokensGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.modelRegistryTokens = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.modelRegistryTokens = utils.objectToClass(
                        httpRes?.data,
                        shared.ModelRegistryToken,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Remove Token [private]
     *
     * @remarks
     * Deletes the model token from deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async remove(
        req: operations.RemoveTokenApiV1ModelRegistryTokensProviderDeleteRequest,
        security: operations.RemoveTokenApiV1ModelRegistryTokensProviderDeleteSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.RemoveTokenApiV1ModelRegistryTokensProviderDeleteResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveTokenApiV1ModelRegistryTokensProviderDeleteRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/model_registry_tokens/{provider}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.RemoveTokenApiV1ModelRegistryTokensProviderDeleteSecurity(
                security
            );
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.RemoveTokenApiV1ModelRegistryTokensProviderDeleteResponse =
            new operations.RemoveTokenApiV1ModelRegistryTokensProviderDeleteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 202:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.removeTokenApiV1ModelRegistryTokensProviderDelete202ApplicationJSONAny =
                        httpRes?.data;
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.httpValidationError = utils.objectToClass(
                        httpRes?.data,
                        shared.HTTPValidationError
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Remove Token Deprecated [private]
     *
     * @remarks
     * Deletes the Hugging Face model token from deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     *
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
    async removeTokenDeprecated(
        security: operations.RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/model_registry_token";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteSecurity(
                security
            );
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteResponse =
            new operations.RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 202:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.removeTokenDeprecatedApiV1ModelRegistryTokenDelete202ApplicationJSONAny =
                        httpRes?.data;
                }
                break;
        }

        return res;
    }

    /**
     * Save Token [private]
     *
     * @remarks
     * Imports your model token and saves it in deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async save(
        req: operations.SaveTokenApiV1ModelRegistryTokensProviderPostRequest,
        security: operations.SaveTokenApiV1ModelRegistryTokensProviderPostSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.SaveTokenApiV1ModelRegistryTokensProviderPostResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SaveTokenApiV1ModelRegistryTokensProviderPostRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/model_registry_tokens/{provider}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "createModelRegistryToken",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.SaveTokenApiV1ModelRegistryTokensProviderPostSecurity(
                security
            );
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SaveTokenApiV1ModelRegistryTokensProviderPostResponse =
            new operations.SaveTokenApiV1ModelRegistryTokensProviderPostResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.saveTokenApiV1ModelRegistryTokensProviderPost201ApplicationJSONAny =
                        httpRes?.data;
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.httpValidationError = utils.objectToClass(
                        httpRes?.data,
                        shared.HTTPValidationError
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Save Token Deprecated [private]
     *
     * @remarks
     * Imports your Hugging Face model token and saves it in deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     *
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
    async saveTokenDeprecated(
        req: shared.CreateModelRegistryToken,
        security: operations.SaveTokenDeprecatedApiV1ModelRegistryTokenPostSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.SaveTokenDeprecatedApiV1ModelRegistryTokenPostResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.CreateModelRegistryToken(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/model_registry_token";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.SaveTokenDeprecatedApiV1ModelRegistryTokenPostSecurity(
                security
            );
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SaveTokenDeprecatedApiV1ModelRegistryTokenPostResponse =
            new operations.SaveTokenDeprecatedApiV1ModelRegistryTokenPostResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.saveTokenDeprecatedApiV1ModelRegistryTokenPost201ApplicationJSONAny =
                        httpRes?.data;
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.httpValidationError = utils.objectToClass(
                        httpRes?.data,
                        shared.HTTPValidationError
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update Token [private]
     *
     * @remarks
     * Replaces the current model token with a new one. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async update(
        req: operations.UpdateTokenApiV1ModelRegistryTokensProviderPutRequest,
        security: operations.UpdateTokenApiV1ModelRegistryTokensProviderPutSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateTokenApiV1ModelRegistryTokensProviderPutResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateTokenApiV1ModelRegistryTokensProviderPutRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/model_registry_tokens/{provider}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "updateModelRegistryToken",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateTokenApiV1ModelRegistryTokensProviderPutSecurity(
                security
            );
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateTokenApiV1ModelRegistryTokensProviderPutResponse =
            new operations.UpdateTokenApiV1ModelRegistryTokensProviderPutResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateTokenApiV1ModelRegistryTokensProviderPut201ApplicationJSONAny =
                        httpRes?.data;
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.httpValidationError = utils.objectToClass(
                        httpRes?.data,
                        shared.HTTPValidationError
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update Token Deprecated [private]
     *
     * @remarks
     * Replaces the current Hugging Face model token with a new one. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     *
     * @deprecated this method will be removed in a future release, please migrate away from it as soon as possible
     */
    async updateTokenDeprecated(
        req: shared.UpdateModelRegistryToken,
        security: operations.UpdateTokenDeprecatedApiV1ModelRegistryTokenPutSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateTokenDeprecatedApiV1ModelRegistryTokenPutResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.UpdateModelRegistryToken(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/model_registry_token";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateTokenDeprecatedApiV1ModelRegistryTokenPutSecurity(
                security
            );
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateTokenDeprecatedApiV1ModelRegistryTokenPutResponse =
            new operations.UpdateTokenDeprecatedApiV1ModelRegistryTokenPutResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateTokenDeprecatedApiV1ModelRegistryTokenPut201ApplicationJSONAny =
                        httpRes?.data;
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.httpValidationError = utils.objectToClass(
                        httpRes?.data,
                        shared.HTTPValidationError
                    );
                }
                break;
        }

        return res;
    }
}
