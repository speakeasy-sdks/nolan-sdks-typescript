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
  name: "Jacob Pacocha",
}, {
  httpBearer: "",
}).then((res: CreateWorkspaceApiV1WorkspacesPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [shared.WorkspaceName](../../models/shared/workspacename.md)                                                                   | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `security`                                                                                                                     | [operations.CreateWorkspaceApiV1WorkspacesPostSecurity](../../models/operations/createworkspaceapiv1workspacespostsecurity.md) | :heavy_check_mark:                                                                                                             | The security requirements to use for the request.                                                                              |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.CreateWorkspaceApiV1WorkspacesPostResponse](../../models/operations/createworkspaceapiv1workspacespostresponse.md)>**


## delete

Deletes a workspace and everything that is associated with it. Be careful as this action cannot be undone. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.delete({
  workspaceName: "iusto",
}, {
  httpBearer: "",
}).then((res: DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteRequest](../../models/operations/deleteworkspaceapiv1workspacesworkspacenamedeleterequest.md)   | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `security`                                                                                                                                                   | [operations.DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteSecurity](../../models/operations/deleteworkspaceapiv1workspacesworkspacenamedeletesecurity.md) | :heavy_check_mark:                                                                                                                                           | The security requirements to use for the request.                                                                                                            |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.DeleteWorkspaceApiV1WorkspacesWorkspaceNameDeleteResponse](../../models/operations/deleteworkspaceapiv1workspacesworkspacenamedeleteresponse.md)>**


## get

Returns the workspace and its properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetWorkspaceApiV1WorkspacesWorkspaceNameGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.get({
  workspaceName: "sit",
}, {
  httpBearer: "",
}).then((res: GetWorkspaceApiV1WorkspacesWorkspaceNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.GetWorkspaceApiV1WorkspacesWorkspaceNameGetRequest](../../models/operations/getworkspaceapiv1workspacesworkspacenamegetrequest.md)   | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `security`                                                                                                                                       | [operations.GetWorkspaceApiV1WorkspacesWorkspaceNameGetSecurity](../../models/operations/getworkspaceapiv1workspacesworkspacenamegetsecurity.md) | :heavy_check_mark:                                                                                                                               | The security requirements to use for the request.                                                                                                |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetWorkspaceApiV1WorkspacesWorkspaceNameGetResponse](../../models/operations/getworkspaceapiv1workspacesworkspacenamegetresponse.md)>**


## getStats

Displays the number of files and documents in a workspace, the number of search requests, and the average response time. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.getStats({
  workspaceName: "doloremque",
}, {
  httpBearer: "",
}).then((res: GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetRequest](../../models/operations/getworkspacestatsapiv1workspacesworkspacenamestatsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `security`                                                                                                                                                           | [operations.GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetSecurity](../../models/operations/getworkspacestatsapiv1workspacesworkspacenamestatsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                   | The security requirements to use for the request.                                                                                                                    |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.GetWorkspaceStatsApiV1WorkspacesWorkspaceNameStatsGetResponse](../../models/operations/getworkspacestatsapiv1workspacesworkspacenamestatsgetresponse.md)>**


## list

Lists all deepset Cloud workspaces and their properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListWorkspacesApiV1WorkspacesGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.list({
  httpBearer: "",
}).then((res: ListWorkspacesApiV1WorkspacesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                 | [operations.ListWorkspacesApiV1WorkspacesGetSecurity](../../models/operations/listworkspacesapiv1workspacesgetsecurity.md) | :heavy_check_mark:                                                                                                         | The security requirements to use for the request.                                                                          |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.ListWorkspacesApiV1WorkspacesGetResponse](../../models/operations/listworkspacesapiv1workspacesgetresponse.md)>**


## searchCount

Returns the number of search requests on a given day for a specified period of time. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.searchCount({
  after: "0ae6b6bc-9b8f-4759-aac5-5a9741d31135",
  before: "2965bb8a-7202-4611-835e-139dbc2259b1",
  limit: 663318,
  pageNumber: 727888,
  workspaceName: "fugiat",
}, {
  httpBearer: "",
}).then((res: SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetRequest](../../models/operations/searchcountapiv1workspacesworkspacenamesearchcountgetrequest.md)   | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `security`                                                                                                                                                           | [operations.SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetSecurity](../../models/operations/searchcountapiv1workspacesworkspacenamesearchcountgetsecurity.md) | :heavy_check_mark:                                                                                                                                                   | The security requirements to use for the request.                                                                                                                    |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.SearchCountApiV1WorkspacesWorkspaceNameSearchCountGetResponse](../../models/operations/searchcountapiv1workspacesworkspacenamesearchcountgetresponse.md)>**


## searchHistory

Returns the search history which includes information such as the query, the answer, the pipeline used, and more. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.workspace.searchHistory({
  after: "a8c070e1-084c-4b06-b2d1-ad879eeb9665",
  before: "b85efbd0-2bae-40be-ad78-2259e3ea4b51",
  limit: 600213,
  pageNumber: 476946,
  workspaceName: "delectus",
}, {
  httpBearer: "",
}).then((res: SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                    | [operations.SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetRequest](../../models/operations/searchhistoryapiv1workspacesworkspacenamesearchhistorygetrequest.md)   | :heavy_check_mark:                                                                                                                                                           | The request object to use for the request.                                                                                                                                   |
| `security`                                                                                                                                                                   | [operations.SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetSecurity](../../models/operations/searchhistoryapiv1workspacesworkspacenamesearchhistorygetsecurity.md) | :heavy_check_mark:                                                                                                                                                           | The security requirements to use for the request.                                                                                                                            |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.SearchHistoryApiV1WorkspacesWorkspaceNameSearchHistoryGetResponse](../../models/operations/searchhistoryapiv1workspacesworkspacenamesearchhistorygetresponse.md)>**

