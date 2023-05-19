# workspace

### Available Operations

* [create](#create) - Create Workspace [private]
* [delete](#delete) - Delete Workspace [private]
* [get](#get) - Get Workspace [private]
* [getStats](#getstats) - Get Workspace Stats [private]
* [list](#list) - List Workspaces [private]
* [searchCount](#searchcount) - Search Count [private]
* [searchHistory](#searchhistory) - Search History [private]

## create

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreateWorkspaceApiV1WorkspacesPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.create({
  name: "Tina Moore",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: CreateWorkspaceApiV1WorkspacesPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Deletes a workspace and everything that is associated with it. Be careful as this action cannot be undone. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.delete({
  workspaceName: "soluta",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Returns the workspace and its properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetWorkspaceApiV1WorkspacesWorkspaceNameGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.get({
  workspaceName: "libero",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetWorkspaceApiV1WorkspacesWorkspaceNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getStats

Displays the number of files and documents in a workspace, the number of search requests, and the average response time. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.getStats({
  workspaceName: "rem",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Lists all deepset Cloud workspaces and their properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListWorkspacesApiV1WorkspacesGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.list({
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ListWorkspacesApiV1WorkspacesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchCount

Returns the number of search requests on a given day for a specified period of time. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.searchCount({
  after: "a7202611-435e-4139-9bc2-259b1abda8c0",
  before: "70e1084c-b067-42d1-ad87-9eeb9665b85e",
  limit: 972912,
  pageNumber: 737279,
  workspaceName: "at",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchHistory

Returns the search history which includes information such as the query, the answer, the pipeline used, and more. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.searchHistory({
  after: "02bae0be-2d78-4225-9e3e-a4b5197f9244",
  before: "3da7ce52-b895-4c53-bc64-54efb0b34896",
  limit: 779180,
  pageNumber: 242099,
  workspaceName: "minus",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
