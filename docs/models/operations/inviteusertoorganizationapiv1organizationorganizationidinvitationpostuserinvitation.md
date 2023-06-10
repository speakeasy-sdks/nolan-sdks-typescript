# InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostUserInvitation

The definition of the user that you want to invite to the organization.


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `email`                                              | *string*                                             | :heavy_check_mark:                                   | Email of a user                                      |
| `familyName`                                         | *string*                                             | :heavy_check_mark:                                   | Family name of a user                                |
| `givenName`                                          | *string*                                             | :heavy_check_mark:                                   | Given name of a user                                 |
| `role`                                               | [shared.RolesToDB](../../models/shared/rolestodb.md) | :heavy_check_mark:                                   | An enumeration.                                      |