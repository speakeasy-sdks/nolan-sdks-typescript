/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AddFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackPostSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    httpBearer: string;
}

export class AddFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackPostRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    postPipelineFeedback: shared.PostPipelineFeedback;

    /**
     * The name of the pipeline used for search.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline_name" })
    pipelineName: string;

    /**
     * Type the name of the workspace.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_name" })
    workspaceName: string;
}

export class AddFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackPostResponse extends SpeakeasyBase {
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
     * The feedback was successfully stored.
     */
    @SpeakeasyMetadata()
    addFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackPost200ApplicationJSONAny?: any;
}
