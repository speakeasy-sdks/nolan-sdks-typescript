/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Workspace {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create Workspace [private]
     *
     * @remarks
     * This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async create(
        req: shared.WorkspaceName,
        security: operations.CreateWorkspaceApiV1WorkspacesPostSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateWorkspaceApiV1WorkspacesPostResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.WorkspaceName(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/workspaces";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateWorkspaceApiV1WorkspacesPostSecurity(security);
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

        const res: operations.CreateWorkspaceApiV1WorkspacesPostResponse =
            new operations.CreateWorkspaceApiV1WorkspacesPostResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createWorkspaceApiV1WorkspacesPost201ApplicationJSONAny = httpRes?.data;
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
     * Delete Workspace [private]
     *
     * @remarks
     * Deletes a workspace and everything that is associated with it. Be careful as this action cannot be undone. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async delete(
        req: operations.DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteRequest,
        security: operations.DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/v1/workspaces/{workspace_name}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteSecurity(
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

        const res: operations.DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteResponse =
            new operations.DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 204:
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
     * Get Workspace [private]
     *
     * @remarks
     * Returns the workspace and its properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async get(
        req: operations.GetWorkspaceApiV1WorkspacesWorkspaceNameGetRequest,
        security: operations.GetWorkspaceApiV1WorkspacesWorkspaceNameGetSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetWorkspaceApiV1WorkspacesWorkspaceNameGetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspaceApiV1WorkspacesWorkspaceNameGetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/v1/workspaces/{workspace_name}", req);

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetWorkspaceApiV1WorkspacesWorkspaceNameGetSecurity(security);
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

        const res: operations.GetWorkspaceApiV1WorkspacesWorkspaceNameGetResponse =
            new operations.GetWorkspaceApiV1WorkspacesWorkspaceNameGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.workspace = utils.objectToClass(httpRes?.data, shared.Workspace);
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
     * Get Workspace Stats [private]
     *
     * @remarks
     * Displays the number of files and documents in a workspace, the number of search requests, and the average response time. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async getStats(
        req: operations.GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetRequest,
        security: operations.GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/workspaces/{workspace_name}/stats",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetSecurity(
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
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetResponse =
            new operations.GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.workspaceStats = utils.objectToClass(httpRes?.data, shared.WorkspaceStats);
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
     * List Workspaces [private]
     *
     * @remarks
     * Lists all deepset Cloud workspaces and their properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async list(
        security: operations.ListWorkspacesApiV1WorkspacesGetSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ListWorkspacesApiV1WorkspacesGetResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/workspaces";

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ListWorkspacesApiV1WorkspacesGetSecurity(security);
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

        const res: operations.ListWorkspacesApiV1WorkspacesGetResponse =
            new operations.ListWorkspacesApiV1WorkspacesGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.workspaceList = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.workspaceList = utils.objectToClass(
                        httpRes?.data,
                        shared.Workspace,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Search Count [private]
     *
     * @remarks
     * Returns the number of search requests on a given day for a specified period of time. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async searchCount(
        req: operations.SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetRequest,
        security: operations.SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/workspaces/{workspace_name}/search_count",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetSecurity(
                security
            );
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetResponse =
            new operations.SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.searchCountPagination = utils.objectToClass(
                        httpRes?.data,
                        shared.SearchCountPagination
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
     * Search History [private]
     *
     * @remarks
     * Returns the search history which includes information such as the query, the answer, the pipeline used, and more. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
     */
    async searchHistory(
        req: operations.SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetRequest,
        security: operations.SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetRequest(
                req
            );
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/workspaces/{workspace_name}/search_history",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security =
                new operations.SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetSecurity(
                    security
                );
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetResponse =
            new operations.SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.searchHistoryPagination = utils.objectToClass(
                        httpRes?.data,
                        shared.SearchHistoryPagination
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
}
