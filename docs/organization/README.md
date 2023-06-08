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
    email: "Stuart.Kautzer69@gmail.com",
    familyName: "occaecati",
    givenName: "minima",
    role: RolesToDB.Three,
  },
  organizationId: "eligendi",
}, {
  httpBearer: "",
}).then((res: InviteUserToOrganizationApiV1OrganizationOrganizationIdInvitationPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
