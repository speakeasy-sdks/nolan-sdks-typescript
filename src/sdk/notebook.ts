/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Notebook {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;

    constructor(
        defaultClient: AxiosInstance,
        securityClient: AxiosInstance,
        serverURL: string,
        language: string,
        sdkVersion: string,
        genVersion: string
    ) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }

    /**
     * Post Notebook [private]
     *
     * @remarks
     * Creates a Jupyter notebook on the Jupyter server. You must have a server ready to create a notebook. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async create(
        req: operations.PostNotebookApiV1NotebookPostRequest,
        security: operations.PostNotebookApiV1NotebookPostSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.PostNotebookApiV1NotebookPostResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostNotebookApiV1NotebookPostRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/notebook";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostNotebookApiV1NotebookPostSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(this._defaultClient, security);

        const headers = { ...reqBodyHeaders, ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostNotebookApiV1NotebookPostResponse =
            new operations.PostNotebookApiV1NotebookPostResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.notebook = utils.objectToClass(httpRes?.data, shared.Notebook);
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
     * Get Jupyter Lab [private]
     *
     * @remarks
     * Returns the state of the Jupyter lab server. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async getServerState(
        security: operations.GetJupyterLabApiV1NotebookServerGetSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetJupyterLabApiV1NotebookServerGetResponse> {
        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/notebook-server";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetJupyterLabApiV1NotebookServerGetSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(this._defaultClient, security);

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

        const res: operations.GetJupyterLabApiV1NotebookServerGetResponse =
            new operations.GetJupyterLabApiV1NotebookServerGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.server = utils.objectToClass(httpRes?.data, shared.Server);
                }
                break;
        }

        return res;
    }

    /**
     * Start Jupyter Lab [private]
     *
     * @remarks
     * Opens the Jupyter lab. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async start(
        req: shared.NotebookServerPost,
        security: operations.StartJupyterLabApiV1NotebookServerPostSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.StartJupyterLabApiV1NotebookServerPostResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.NotebookServerPost(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/notebook-server";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.StartJupyterLabApiV1NotebookServerPostSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(this._defaultClient, security);

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

        const res: operations.StartJupyterLabApiV1NotebookServerPostResponse =
            new operations.StartJupyterLabApiV1NotebookServerPostResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.startJupyterLabApiV1NotebookServerPost200ApplicationJSONAny = httpRes?.data;
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
