/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class SearchSession {
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
   * Create Search Session [private]
   *
   * @remarks
   * This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.
   */
  async create(
    req: operations.CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostRequest,
    security: operations.CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/v1/workspaces/{workspace_name}/search_sessions",
      req
    );

    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostResponse =
      new operations.CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostResponse(
        {
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        }
      );
    switch (true) {
      case httpRes?.status == 201:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.searchSessionPostResponse = utils.objectToClass(
            httpRes?.data,
            shared.SearchSessionPostResponse
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
