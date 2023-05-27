/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetEvaluationSetCsvFileApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameCsvGetSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    httpBearer: string;
}

export class GetEvaluationSetCsvFileApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameCsvGetRequest extends SpeakeasyBase {
    /**
     * The name of the evaluation set to fetch.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=evaluation_set_name" })
    evaluationSetName: string;

    /**
     * Type the name of the workspace.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_name" })
    workspaceName: string;
}

export class GetEvaluationSetCsvFileApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameCsvGetResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

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
     * Return the evaluation set as CSV file.
     */
    @SpeakeasyMetadata()
    getEvaluationSetCsvFileApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameCsvGet200ApplicationJSONAny?: any;
}
