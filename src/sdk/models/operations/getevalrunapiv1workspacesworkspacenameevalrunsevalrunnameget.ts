/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameGetSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    httpBearer: string;
}

export class GetEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameGetRequest extends SpeakeasyBase {
    /**
     * Which evaluation run do you want to display? Type its name here.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eval_run_name" })
    evalRunName: string;

    /**
     * Type the name of the workspace.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_name" })
    workspaceName: string;
}

export class GetEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameGetResponse extends SpeakeasyBase {
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
    singleEvalRunResponse?: shared.SingleEvalRunResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
