# user

### Available Operations

* [delete](#delete) - Delete User [private]
* [get](#get) - Get User [private]
* [list](#list) - Get Users [private]
* [me](#me) - Read Users Me [private]
* [updatePermission](#updatepermission) - Update User Permission [private]

## delete

Deletes a user from deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeleteUserApiV1UsersUserIdDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.user.delete({
  userId: "8d162309-fb09-4299-a1ae-fb9f58c4d86e",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeleteUserApiV1UsersUserIdDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Retrieves the properties of the user object. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetUserApiV1UsersUserIdGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.user.get({
  userId: "68e4be05-6013-4f59-9a75-7a59ecfef66e",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetUserApiV1UsersUserIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Retrieves the properties of all the user objects in your organization. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListUsersApiV1UsersGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.user.list({
  after: "f1caa338-3c2b-4eb4-b737-3c8d72f64d1d",
  before: "b1f2c431-0661-4e96-b49e-1cf9e06e3a43",
  includeDeleted: false,
  limit: 483394,
  pageNumber: 24753,
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ListUsersApiV1UsersGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## me

Retrieves the properties of the user object. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ReadUsersMeApiV1MeGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.user.me({
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ReadUsersMeApiV1MeGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updatePermission

Updates user permissions. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { UpdateUserPermissionApiV1UsersUserIdPatchResponse } from "ds-test/dist/sdk/models/operations";
import { RolesToDBEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.user.updatePermission({
  requestBody: {
    role: RolesToDBEnum.Zero,
  },
  userId: "0ae6b6bc-9b8f-4759-aac5-5a9741d31135",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: UpdateUserPermissionApiV1UsersUserIdPatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
