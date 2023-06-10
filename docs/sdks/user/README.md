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
  userId: "451c6c6e-205e-416d-aab3-fec9578a6458",
}, {
  httpBearer: "",
}).then((res: DeleteUserApiV1UsersUserIdDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeleteUserApiV1UsersUserIdDeleteRequest](../../models/operations/deleteuserapiv1usersuseriddeleterequest.md)   | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `security`                                                                                                                 | [operations.DeleteUserApiV1UsersUserIdDeleteSecurity](../../models/operations/deleteuserapiv1usersuseriddeletesecurity.md) | :heavy_check_mark:                                                                                                         | The security requirements to use for the request.                                                                          |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeleteUserApiV1UsersUserIdDeleteResponse](../../models/operations/deleteuserapiv1usersuseriddeleteresponse.md)>**


## get

Retrieves the properties of the user object. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetUserApiV1UsersUserIdGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.user.get({
  userId: "4273a841-8d16-4230-9fb0-929921aefb9f",
}, {
  httpBearer: "",
}).then((res: GetUserApiV1UsersUserIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetUserApiV1UsersUserIdGetRequest](../../models/operations/getuserapiv1usersuseridgetrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.GetUserApiV1UsersUserIdGetSecurity](../../models/operations/getuserapiv1usersuseridgetsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetUserApiV1UsersUserIdGetResponse](../../models/operations/getuserapiv1usersuseridgetresponse.md)>**


## list

Retrieves the properties of all the user objects in your organization. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListUsersApiV1UsersGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.user.list({
  after: "58c4d86e-68e4-4be0-9601-3f59da757a59",
  before: "ecfef66e-f1ca-4a33-83c2-beb477373c8d",
  includeDeleted: false,
  limit: 437814,
  pageNumber: 139072,
}, {
  httpBearer: "",
}).then((res: ListUsersApiV1UsersGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListUsersApiV1UsersGetRequest](../../models/operations/listusersapiv1usersgetrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.ListUsersApiV1UsersGetSecurity](../../models/operations/listusersapiv1usersgetsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListUsersApiV1UsersGetResponse](../../models/operations/listusersapiv1usersgetresponse.md)>**


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

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `security`                                                                                           | [operations.ReadUsersMeApiV1MeGetSecurity](../../models/operations/readusersmeapiv1megetsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ReadUsersMeApiV1MeGetResponse](../../models/operations/readusersmeapiv1megetresponse.md)>**


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
    role: RolesToDB.Four,
  },
  userId: "64d1db1f-2c43-4106-a1e9-6349e1cf9e06",
}, {
  httpBearer: "",
}).then((res: UpdateUserPermissionApiV1UsersUserIdPatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.UpdateUserPermissionApiV1UsersUserIdPatchRequest](../../models/operations/updateuserpermissionapiv1usersuseridpatchrequest.md)   | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `security`                                                                                                                                   | [operations.UpdateUserPermissionApiV1UsersUserIdPatchSecurity](../../models/operations/updateuserpermissionapiv1usersuseridpatchsecurity.md) | :heavy_check_mark:                                                                                                                           | The security requirements to use for the request.                                                                                            |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.UpdateUserPermissionApiV1UsersUserIdPatchResponse](../../models/operations/updateuserpermissionapiv1usersuseridpatchresponse.md)>**

