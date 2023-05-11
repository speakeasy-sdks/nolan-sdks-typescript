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
    description: "voluptatem",
    expirationDate: new Date("2021-07-31T10:53:55.286Z"),
    pipelineNames: [
      "consequatur",
      "esse",
    ],
    showFiles: false,
    showMetadataFilters: false,
  },
  workspaceName: "ipsam",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: CreatePrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createExternalUser

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreateExternalUserApiV1WorkspacesWorkspaceNameSharedPrototypeUsersPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.sharedPrototype.createExternalUser({
  existingUserId: "088e5186-2065-4e90-8f3b-1194b8abf603",
  workspaceName: "deserunt",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: CreateExternalUserApiV1WorkspacesWorkspaceNameSharedPrototypeUsersPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  sharedPrototypeId: "79f9dfe0-ab7d-4a8a-90ce-187f86bc173d",
  workspaceName: "ea",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: GetSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListPrototypesApiV1WorkspacesWorkspaceNameSharedPrototypesGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.sharedPrototype.list({
  after: "89eee952-6f8d-4986-a881-ead4f0e10125",
  before: "63f94e29-e973-4e92-aa57-a15be3e06080",
  filter: "molestiae",
  limit: 907733,
  pageNumber: 184362,
  workspaceName: "cum",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: ListPrototypesApiV1WorkspacesWorkspaceNameSharedPrototypesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  sharedPrototypeId: "6e3ab884-5f05-497a-a0ff-2a54a31e9476",
  workspaceName: "ut",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: RevokeSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
    description: "culpa",
    showFiles: false,
    showMetadataFilters: false,
  },
  sharedPrototypeId: "3e865e79-56f9-4251-a5a9-da660ff57bfa",
  workspaceName: "laborum",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: EditSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdPatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
