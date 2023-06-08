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
    description: "ut",
    expirationDate: new Date("2022-11-28T21:25:01.550Z"),
    pipelineNames: [
      "expedita",
      "magnam",
      "consequatur",
    ],
    showFiles: false,
    showMetadataFilters: false,
  },
  workspaceName: "esse",
}, {
  httpBearer: "",
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
  existingUserId: "5088e518-6206-45e9-84f3-b1194b8abf60",
  workspaceName: "amet",
}, {
  httpBearer: "",
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
  sharedPrototypeId: "a79f9dfe-0ab7-4da8-a50c-e187f86bc173",
  workspaceName: "assumenda",
}, {
  httpBearer: "",
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
  after: "689eee95-26f8-4d98-ae88-1ead4f0e1012",
  before: "563f94e2-9e97-43e9-a2a5-7a15be3e0608",
  filter: "quae",
  limit: 474668,
  pageNumber: 907733,
  workspaceName: "qui",
}, {
  httpBearer: "",
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
  sharedPrototypeId: "b6e3ab88-45f0-4597-a60f-f2a54a31e947",
  workspaceName: "ex",
}, {
  httpBearer: "",
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
    description: "ut",
    showFiles: false,
    showMetadataFilters: false,
  },
  sharedPrototypeId: "a3e865e7-956f-4925-9a5a-9da660ff57bf",
  workspaceName: "officia",
}, {
  httpBearer: "",
}).then((res: EditSharedPrototypeApiV1WorkspacesWorkspaceNameSharedPrototypesSharedPrototypeIdPatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
