/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    httpBearer: string;
}

/**
 * The definition of the user that you want to invite to the organization.
 */
export class InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostUserInvitation extends SpeakeasyBase {
    /**
     * Email of a user
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Family name of a user
     */
    @SpeakeasyMetadata()
    @Expose({ name: "family_name" })
    familyName: string;

    /**
     * Given name of a user
     */
    @SpeakeasyMetadata()
    @Expose({ name: "given_name" })
    givenName: string;

    /**
     * An enumeration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "role" })
    role: shared.RolesToDB;
}

export class InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostUserInvitation;

    /**
     * A unique identifier of the organization. You can obtain it from Get Organization.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organization_id" })
    organizationId: string;
}

export class InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostResponse extends SpeakeasyBase {
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
     * Successful Response
     */
    @SpeakeasyMetadata()
    inviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPost201ApplicationJSONAny?: any;
}
