# evalRun

### Available Operations

* [createEvalRun](#createevalrun) - Create Eval Run
* [createTag](#createtag) - Create Tag [private]
* [delete](#delete) - Delete Eval Run
* [deleteTag](#deletetag) - Delete Tag [private]
* [get](#get) - Get Eval Run
* [getNodeEvalPredictions](#getnodeevalpredictions) - Get Node Eval Predictions
* [list](#list) - Get Eval Runs
* [listTags](#listtags) - Get Tags [private]
* [start](#start) - Start Eval Run
* [update](#update) - Edit Eval Run
* [updateTag](#updatetag) - Update Tag [private]

## createEvalRun

Creates an evaluation run for pipeline experiments in deepset Cloud.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreateEvalRunApiV1WorkspacesWorkspaceNameEvalRunsPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.createEvalRun({
  evalRunPost: {
    comment: "deserunt",
    debug: false,
    evaluationSetName: "distinctio",
    name: "Francisco Gleason",
    pipelineName: "cupiditate",
    tags: [
      "perferendis",
      "magni",
      "assumenda",
    ],
  },
  workspaceName: "ipsam",
}, {
  httpBearer: "",
}).then((res: CreateEvalRunApiV1WorkspacesWorkspaceNameEvalRunsPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.CreateEvalRunApiV1WorkspacesWorkspaceNameEvalRunsPostRequest](../../models/operations/createevalrunapiv1workspacesworkspacenameevalrunspostrequest.md)   | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `security`                                                                                                                                                           | [operations.CreateEvalRunApiV1WorkspacesWorkspaceNameEvalRunsPostSecurity](../../models/operations/createevalrunapiv1workspacesworkspacenameevalrunspostsecurity.md) | :heavy_check_mark:                                                                                                                                                   | The security requirements to use for the request.                                                                                                                    |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.CreateEvalRunApiV1WorkspacesWorkspaceNameEvalRunsPostResponse](../../models/operations/createevalrunapiv1workspacesworkspacenameevalrunspostresponse.md)>**


## createTag

Creates a tag for your evaluation run. Tags can help you order and find your evaluation runs later. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreateTagApiV1WorkspacesWorkspaceNameTagsPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.createTag({
  requestBody: {
    name: "Denise Pagac",
  },
  workspaceName: "facilis",
}, {
  httpBearer: "",
}).then((res: CreateTagApiV1WorkspacesWorkspaceNameTagsPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.CreateTagApiV1WorkspacesWorkspaceNameTagsPostRequest](../../models/operations/createtagapiv1workspacesworkspacenametagspostrequest.md)   | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `security`                                                                                                                                           | [operations.CreateTagApiV1WorkspacesWorkspaceNameTagsPostSecurity](../../models/operations/createtagapiv1workspacesworkspacenametagspostsecurity.md) | :heavy_check_mark:                                                                                                                                   | The security requirements to use for the request.                                                                                                    |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.CreateTagApiV1WorkspacesWorkspaceNameTagsPostResponse](../../models/operations/createtagapiv1workspacesworkspacenametagspostresponse.md)>**


## delete

Removes an evaluation run from deepset Cloud.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeleteEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.delete({
  evalRunName: "tempore",
  workspaceName: "labore",
}, {
  httpBearer: "",
}).then((res: DeleteEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.DeleteEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameDeleteRequest](../../models/operations/deleteevalrunapiv1workspacesworkspacenameevalrunsevalrunnamedeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `security`                                                                                                                                                                                     | [operations.DeleteEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameDeleteSecurity](../../models/operations/deleteevalrunapiv1workspacesworkspacenameevalrunsevalrunnamedeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                              |
| `config`                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                  |


### Response

**Promise<[operations.DeleteEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameDeleteResponse](../../models/operations/deleteevalrunapiv1workspacesworkspacenameevalrunsevalrunnamedeleteresponse.md)>**


## deleteTag

Removes a tag from the workspace. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeleteTagApiV1WorkspacesWorkspaceNameTagsTagNameDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.deleteTag({
  tagName: "delectus",
  workspaceName: "eum",
}, {
  httpBearer: "",
}).then((res: DeleteTagApiV1WorkspacesWorkspaceNameTagsTagNameDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.DeleteTagApiV1WorkspacesWorkspaceNameTagsTagNameDeleteRequest](../../models/operations/deletetagapiv1workspacesworkspacenametagstagnamedeleterequest.md)   | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `security`                                                                                                                                                             | [operations.DeleteTagApiV1WorkspacesWorkspaceNameTagsTagNameDeleteSecurity](../../models/operations/deletetagapiv1workspacesworkspacenametagstagnamedeletesecurity.md) | :heavy_check_mark:                                                                                                                                                     | The security requirements to use for the request.                                                                                                                      |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.DeleteTagApiV1WorkspacesWorkspaceNameTagsTagNameDeleteResponse](../../models/operations/deletetagapiv1workspacesworkspacenametagstagnamedeleteresponse.md)>**


## get

Returns the evaluation run you indicate.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.get({
  evalRunName: "non",
  workspaceName: "eligendi",
}, {
  httpBearer: "",
}).then((res: GetEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.GetEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameGetRequest](../../models/operations/getevalrunapiv1workspacesworkspacenameevalrunsevalrunnamegetrequest.md)   | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `security`                                                                                                                                                                         | [operations.GetEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameGetSecurity](../../models/operations/getevalrunapiv1workspacesworkspacenameevalrunsevalrunnamegetsecurity.md) | :heavy_check_mark:                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                  |
| `config`                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                 | Available config options for making requests.                                                                                                                                      |


### Response

**Promise<[operations.GetEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameGetResponse](../../models/operations/getevalrunapiv1workspacesworkspacenameevalrunsevalrunnamegetresponse.md)>**


## getNodeEvalPredictions

Returns the predicted answers for the pipeline nodes as a JSON or a CSV file

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetFieldField,
  GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetOrderOrder,
  GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.getNodeEvalPredictions({
  after: "969e9a3e-fa77-4dfb-94cd-66ae395efb9b",
  before: "a88f3a66-9970-474b-a446-9b6e21419598",
  evalRunName: "sint",
  field: GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetFieldField.Query,
  filter: "mollitia",
  limit: 968962,
  nodeName: "mollitia",
  order: GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetOrderOrder.Asc,
  pageNumber: 431418,
  select: "dolor",
  workspaceName: "necessitatibus",
}, {
  httpBearer: "",
}).then((res: GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                                  | [operations.GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetRequest](../../models/operations/getnodeevalpredictionsapiv1workspacesworkspacenameevalrunsevalrunnamenodesnodenamepredictionsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                                                 |
| `security`                                                                                                                                                                                                                                                 | [operations.GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetSecurity](../../models/operations/getnodeevalpredictionsapiv1workspacesworkspacenameevalrunsevalrunnamenodesnodenamepredictionsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                                                                          |
| `config`                                                                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                                                                              |


### Response

**Promise<[operations.GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetResponse](../../models/operations/getnodeevalpredictionsapiv1workspacesworkspacenameevalrunsevalrunnamenodesnodenamepredictionsgetresponse.md)>**


## list

Returns all the evaluation runs created in deepset Cloud.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListEvalRunsFieldField, ListEvalRunsOrderOrder, ListEvalRunsResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.list({
  after: "2516fe4c-8b71-41e5-b7fd-2ed028921cdd",
  before: "c692601f-b576-4b0d-9f0d-30c5fbb25870",
  field: ListEvalRunsFieldField.IntegratedExactMatch,
  filter: "nesciunt",
  limit: 179490,
  order: ListEvalRunsOrderOrder.Asc,
  pageNumber: 170986,
  select: "minus",
  workspaceName: "quam",
}, {
  httpBearer: "",
}).then((res: ListEvalRunsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListEvalRunsRequest](../../models/operations/listevalrunsrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.ListEvalRunsSecurity](../../models/operations/listevalrunssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListEvalRunsResponse](../../models/operations/listevalrunsresponse.md)>**


## listTags

Lists all the tags in the workspace you choose. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetTagsApiV1WorkspacesWorkspaceNameTagsGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.listTags({
  filter: "dolor",
  workspaceName: "vero",
}, {
  httpBearer: "",
}).then((res: GetTagsApiV1WorkspacesWorkspaceNameTagsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.GetTagsApiV1WorkspacesWorkspaceNameTagsGetRequest](../../models/operations/gettagsapiv1workspacesworkspacenametagsgetrequest.md)   | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `security`                                                                                                                                     | [operations.GetTagsApiV1WorkspacesWorkspaceNameTagsGetSecurity](../../models/operations/gettagsapiv1workspacesworkspacenametagsgetsecurity.md) | :heavy_check_mark:                                                                                                                             | The security requirements to use for the request.                                                                                              |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetTagsApiV1WorkspacesWorkspaceNameTagsGetResponse](../../models/operations/gettagsapiv1workspacesworkspacenametagsgetresponse.md)>**


## start

Starts a draft evaluation run.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { StartEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameStartPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.start({
  evalRunName: "nostrum",
  workspaceName: "hic",
}, {
  httpBearer: "",
}).then((res: StartEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameStartPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.StartEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameStartPostRequest](../../models/operations/startevalrunapiv1workspacesworkspacenameevalrunsevalrunnamestartpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `security`                                                                                                                                                                                         | [operations.StartEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameStartPostSecurity](../../models/operations/startevalrunapiv1workspacesworkspacenameevalrunsevalrunnamestartpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                                  |
| `config`                                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                 | Available config options for making requests.                                                                                                                                                      |


### Response

**Promise<[operations.StartEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameStartPostResponse](../../models/operations/startevalrunapiv1workspacesworkspacenameevalrunsevalrunnamestartpostresponse.md)>**


## update

Updates these properties of an evaluation run: name, tags, pipeline, file corpus, and evaluation set.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { EditEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNamePatchResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.update({
  evalRunPatch: {
    comment: "recusandae",
    evaluationSetName: "omnis",
    pipelineName: "facilis",
    tags: [
      "voluptatem",
      "porro",
      "consequuntur",
    ],
  },
  evalRunName: "blanditiis",
  workspaceName: "error",
}, {
  httpBearer: "",
}).then((res: EditEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNamePatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.EditEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNamePatchRequest](../../models/operations/editevalrunapiv1workspacesworkspacenameevalrunsevalrunnamepatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `security`                                                                                                                                                                               | [operations.EditEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNamePatchSecurity](../../models/operations/editevalrunapiv1workspacesworkspacenameevalrunsevalrunnamepatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                        |
| `config`                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                       | Available config options for making requests.                                                                                                                                            |


### Response

**Promise<[operations.EditEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNamePatchResponse](../../models/operations/editevalrunapiv1workspacesworkspacenameevalrunsevalrunnamepatchresponse.md)>**


## updateTag

Changes the name of the tag you choose. Type the new tag name in the `name` field of the BODY PARAMS section. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { UpdateTagApiV1WorkspacesWorkspaceNameTagsTagNamePatchResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.updateTag({
  requestBody: {
    name: "Violet Price",
  },
  tagName: "earum",
  workspaceName: "modi",
}, {
  httpBearer: "",
}).then((res: UpdateTagApiV1WorkspacesWorkspaceNameTagsTagNamePatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.UpdateTagApiV1WorkspacesWorkspaceNameTagsTagNamePatchRequest](../../models/operations/updatetagapiv1workspacesworkspacenametagstagnamepatchrequest.md)   | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `security`                                                                                                                                                           | [operations.UpdateTagApiV1WorkspacesWorkspaceNameTagsTagNamePatchSecurity](../../models/operations/updatetagapiv1workspacesworkspacenametagstagnamepatchsecurity.md) | :heavy_check_mark:                                                                                                                                                   | The security requirements to use for the request.                                                                                                                    |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.UpdateTagApiV1WorkspacesWorkspaceNameTagsTagNamePatchResponse](../../models/operations/updatetagapiv1workspacesworkspacenametagstagnamepatchresponse.md)>**

