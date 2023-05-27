/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListPipelinesApiV1WorkspacesWorkspaceNamePipelinesGetSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    httpBearer: string;
}

export class ListPipelinesApiV1WorkspacesWorkspaceNamePipelinesGetRequest extends SpeakeasyBase {
    /**
     * Enter an ID if you want to see all entries after this ID.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
    after?: string;

    /**
     * Enter an ID if you want to see all entries before this ID.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
    before?: string;

    /**
     * Returns deleted pipelines.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleted" })
    deleted?: boolean;

    /**
     * The desired status of pipelines that you want to list.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=desired_status" })
    desiredStatus?: string;

    /**
     * How many entries do you want to display? Leaving this field empty keeps the default and max 10 results are returned.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Which page do you want to see? Type the number.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
    pageNumber?: number;

    /**
     * The name of the pipeline that you want to list.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pipeline_name" })
    pipelineName?: string;

    /**
     * The status of pipelines that you want to list.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: string;

    /**
     * Type the name of the workspace.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_name" })
    workspaceName: string;
}

export class ListPipelinesApiV1WorkspacesWorkspaceNamePipelinesGetResponse extends SpeakeasyBase {
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
    pipelinePagination?: shared.PipelinePagination;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
