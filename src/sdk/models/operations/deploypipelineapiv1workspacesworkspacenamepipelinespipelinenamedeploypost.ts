/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeployPostSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    httpBearer: string;
}

export class DeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeployPostRequest extends SpeakeasyBase {
    /**
     * The name of the pipeline that you want to deploy.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline_name" })
    pipelineName: string;

    /**
     * Type the name of the workspace.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_name" })
    workspaceName: string;
}

export class DeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeployPostResponse extends SpeakeasyBase {
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
    pipelineIndexing?: shared.PipelineIndexing;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
