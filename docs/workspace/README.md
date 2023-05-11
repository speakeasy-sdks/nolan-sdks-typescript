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
  name: "Margarita Jacobson",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  workspaceName: "libero",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  workspaceName: "rem",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  workspaceName: "dolorum",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  after: "72026114-35e1-439d-bc22-59b1abda8c07",
  before: "0e1084cb-0672-4d1a-9879-eeb9665b85ef",
  limit: 737279,
  pageNumber: 872303,
  workspaceName: "alias",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  after: "2bae0be2-d782-4259-a3ea-4b5197f92443",
  before: "da7ce52b-895c-4537-8645-4efb0b34896c",
  limit: 242099,
  pageNumber: 795591,
  workspaceName: "fuga",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
