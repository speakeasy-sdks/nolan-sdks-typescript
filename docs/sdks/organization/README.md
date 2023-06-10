# organization

### Available Operations

* [get](#get) - Get Organization [private]
* [invite](#invite) - Invite User To Organization [private]

## get

Returns the name of the organization. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetOrganizationApiV1OrganizationGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.organization.get({
  httpBearer: "",
}).then((res: GetOrganizationApiV1OrganizationGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                       | [operations.GetOrganizationApiV1OrganizationGetSecurity](../../models/operations/getorganizationapiv1organizationgetsecurity.md) | :heavy_check_mark:                                                                                                               | The security requirements to use for the request.                                                                                |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetOrganizationApiV1OrganizationGetResponse](../../models/operations/getorganizationapiv1organizationgetresponse.md)>**


## invite

Sends an email to the user inviting them to your deepset Cloud organization. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostResponse } from "ds-test/dist/sdk/models/operations";
import { RolesToDB } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.organization.invite({
  requestBody: {
    email: "Kameron39@gmail.com",
    familyName: "fugit",
    givenName: "sapiente",
    role: RolesToDB.Zero,
  },
  organizationId: "ratione",
}, {
  httpBearer: "",
}).then((res: InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostRequest](../../models/operations/inviteusertoorganizationapiv1organizationorganizationidinvitationpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `security`                                                                                                                                                                                           | [operations.InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostSecurity](../../models/operations/inviteusertoorganizationapiv1organizationorganizationidinvitationpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                                    |
| `config`                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                        |


### Response

**Promise<[operations.InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostResponse](../../models/operations/inviteusertoorganizationapiv1organizationorganizationidinvitationpostresponse.md)>**

