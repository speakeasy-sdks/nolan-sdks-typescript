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
  userId: "18d16230-9fb0-4929-921a-efb9f58c4d86",
}, {
  httpBearer: "",
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
  userId: "e68e4be0-5601-43f5-9da7-57a59ecfef66",
}, {
  httpBearer: "",
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
  after: "ef1caa33-83c2-4beb-8773-73c8d72f64d1",
  before: "db1f2c43-1066-41e9-a349-e1cf9e06e3a4",
  includeDeleted: false,
  limit: 224467,
  pageNumber: 483394,
}, {
  httpBearer: "",
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
  httpBearer: "",
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
import { RolesToDB } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.user.updatePermission({
  requestBody: {
    role: RolesToDB.Zero,
  },
  userId: "00ae6b6b-c9b8-4f75-9eac-55a9741d3113",
}, {
  httpBearer: "",
}).then((res: UpdateUserPermissionApiV1UsersUserIdPatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
