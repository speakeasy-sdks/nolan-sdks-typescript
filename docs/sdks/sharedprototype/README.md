# sharedPrototype

### Available Operations

* [create](#create) - Create Prototype [private]
* [createExternalUser](#createexternaluser) - Create External User [private]
* [get](#get) - Get Shared Prototype [private]
* [list](#list) - List Prototypes [private]
* [revoke](#revoke) - Revoke Shared Prototype [private]
* [update](#update) - Edit Shared Prototype [private]

## create

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreatePrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.sharedPrototype.create({
  postSharedPrototype: {
    description: "sit",
    expirationDate: new Date("2021-02-14T22:16:10.503Z"),
    pipelineNames: [
      "minima",
      "recusandae",
    ],
    showFiles: false,
    showMetadataFilters: false,
  },
  workspaceName: "reiciendis",
}, {
  httpBearer: "",
}).then((res: CreatePrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.CreatePrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesPostRequest](../../models/operations/createprototypeapiv1workspacesworkspacenamesharedprototypespostrequest.md)   | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `security`                                                                                                                                                                               | [operations.CreatePrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesPostSecurity](../../models/operations/createprototypeapiv1workspacesworkspacenamesharedprototypespostsecurity.md) | :heavy_check_mark:                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                        |
| `config`                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                       | Available config options for making requests.                                                                                                                                            |


### Response

**Promise<[operations.CreatePrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesPostResponse](../../models/operations/createprototypeapiv1workspacesworkspacenamesharedprototypespostresponse.md)>**


## createExternalUser

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreateExternalUserApiV1WorkspacesWorkspaceNameSharedPrototypeUsersPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.sharedPrototype.createExternalUser({
  existingUserId: "d20e457e-1858-4b6a-89fb-e3a5aa8e4824",
  workspaceName: "fugiat",
}, {
  httpBearer: "",
}).then((res: CreateExternalUserApiV1WorkspacesWorkspaceNameSharedPrototypeUsersPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                              | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                              | [operations.CreateExternalUserApiV1WorkspacesWorkspaceNameSharedPrototypeUsersPostRequest](../../models/operations/createexternaluserapiv1workspacesworkspacenamesharedprototypeuserspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                             |
| `security`                                                                                                                                                                                             | [operations.CreateExternalUserApiV1WorkspacesWorkspaceNameSharedPrototypeUsersPostSecurity](../../models/operations/createexternaluserapiv1workspacesworkspacenamesharedprototypeuserspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                                      |
| `config`                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                          |


### Response

**Promise<[operations.CreateExternalUserApiV1WorkspacesWorkspaceNameSharedPrototypeUsersPostResponse](../../models/operations/createexternaluserapiv1workspacesworkspacenamesharedprototypeuserspostresponse.md)>**


## get

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.sharedPrototype.get({
  sharedPrototypeId: "0ab40750-88e5-4186-a065-e904f3b1194b",
  workspaceName: "atque",
}, {
  httpBearer: "",
}).then((res: GetSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                      | [operations.GetSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdGetRequest](../../models/operations/getsharedprototypeapiv1workspacesworkspacenamesharedprototypessharedprototypeidgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                     |
| `security`                                                                                                                                                                                                                     | [operations.GetSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdGetSecurity](../../models/operations/getsharedprototypeapiv1workspacesworkspacenamesharedprototypessharedprototypeidgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                                              |
| `config`                                                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                                                  |


### Response

**Promise<[operations.GetSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdGetResponse](../../models/operations/getsharedprototypeapiv1workspacesworkspacenamesharedprototypessharedprototypeidgetresponse.md)>**


## list

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListPrototypesApiV1WorkspacesWorkspaceNameSharedPrototypesGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.sharedPrototype.list({
  after: "abf603a7-9f9d-4fe0-ab7d-a8a50ce187f8",
  before: "6bc173d6-89ee-4e95-a6f8-d986e881ead4",
  filter: "reiciendis",
  limit: 42976,
  pageNumber: 919783,
  workspaceName: "dicta",
}, {
  httpBearer: "",
}).then((res: ListPrototypesApiV1WorkspacesWorkspaceNameSharedPrototypesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.ListPrototypesApiV1WorkspacesWorkspaceNameSharedPrototypesGetRequest](../../models/operations/listprototypesapiv1workspacesworkspacenamesharedprototypesgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `security`                                                                                                                                                                           | [operations.ListPrototypesApiV1WorkspacesWorkspaceNameSharedPrototypesGetSecurity](../../models/operations/listprototypesapiv1workspacesworkspacenamesharedprototypesgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                    |
| `config`                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                   | Available config options for making requests.                                                                                                                                        |


### Response

**Promise<[operations.ListPrototypesApiV1WorkspacesWorkspaceNameSharedPrototypesGetResponse](../../models/operations/listprototypesapiv1workspacesworkspacenamesharedprototypesgetresponse.md)>**


## revoke

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  RevokeSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdDeleteResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.sharedPrototype.revoke({
  sharedPrototypeId: "012563f9-4e29-4e97-be92-2a57a15be3e0",
  workspaceName: "iure",
}, {
  httpBearer: "",
}).then((res: RevokeSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                  | [operations.RevokeSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdDeleteRequest](../../models/operations/revokesharedprototypeapiv1workspacesworkspacenamesharedprototypessharedprototypeiddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                                 |
| `security`                                                                                                                                                                                                                                 | [operations.RevokeSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdDeleteSecurity](../../models/operations/revokesharedprototypeapiv1workspacesworkspacenamesharedprototypessharedprototypeiddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                                                          |
| `config`                                                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                                                              |


### Response

**Promise<[operations.RevokeSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdDeleteResponse](../../models/operations/revokesharedprototypeapiv1workspacesworkspacenamesharedprototypessharedprototypeiddeleteresponse.md)>**


## update

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  EditSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdPatchResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.sharedPrototype.update({
  patchSharedPrototype: {
    description: "ipsa",
    showFiles: false,
    showMetadataFilters: false,
  },
  sharedPrototypeId: "807e2b6e-3ab8-4845-b059-7a60ff2a54a3",
  workspaceName: "quae",
}, {
  httpBearer: "",
}).then((res: EditSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdPatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                            | [operations.EditSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdPatchRequest](../../models/operations/editsharedprototypeapiv1workspacesworkspacenamesharedprototypessharedprototypeidpatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                           |
| `security`                                                                                                                                                                                                                           | [operations.EditSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdPatchSecurity](../../models/operations/editsharedprototypeapiv1workspacesworkspacenamesharedprototypessharedprototypeidpatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                                                                    |
| `config`                                                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                                                        |


### Response

**Promise<[operations.EditSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdPatchResponse](../../models/operations/editsharedprototypeapiv1workspacesworkspacenamesharedprototypessharedprototypeidpatchresponse.md)>**

