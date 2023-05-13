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
    comment: "fugit",
    debug: false,
    evaluationSetName: "dolorum",
    name: "Eddie Prosacco",
    pipelineName: "delectus",
    tags: [
      "non",
      "eligendi",
    ],
  },
  workspaceName: "sint",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: CreateEvalRunApiV1WorkspacesWorkspaceNameEvalRunsPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createTag

Creates a tag for your evaluation run. Tags can help you order and find your evaluation runs later. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreateTagApiV1WorkspacesWorkspaceNameTagsPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.createTag({
  requestBody: {
    name: "Sherri Tremblay",
  },
  workspaceName: "dolor",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: CreateTagApiV1WorkspacesWorkspaceNameTagsPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Removes an evaluation run from deepset Cloud.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeleteEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.delete({
  evalRunName: "debitis",
  workspaceName: "a",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeleteEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteTag

Removes a tag from the workspace. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeleteTagApiV1WorkspacesWorkspaceNameTagsTagNameDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.deleteTag({
  tagName: "dolorum",
  workspaceName: "in",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeleteTagApiV1WorkspacesWorkspaceNameTagsTagNameDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Returns the evaluation run you indicate.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.get({
  evalRunName: "in",
  workspaceName: "illum",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getNodeEvalPredictions

Returns the predicted answers for the pipeline nodes as a JSON or a CSV file

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetFieldFieldEnum,
  GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetOrderOrderEnum,
  GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.getNodeEvalPredictions({
  accept: "maiores",
  after: "b14cd66a-e395-4efb-9ba8-8f3a66997074",
  before: "ba4469b6-e214-4195-9890-afa563e2516f",
  evalRunName: "debitis",
  field: GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetFieldFieldEnum.Rank,
  filter: "maxime",
  limit: 537023,
  nodeName: "facilis",
  order: GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetOrderOrderEnum.Asc,
  pageNumber: 100226,
  select: "architecto",
  workspaceName: "repudiandae",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Returns all the evaluation runs created in deepset Cloud.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListEvalRunsFieldFieldEnum, ListEvalRunsOrderOrderEnum, ListEvalRunsResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.list({
  after: "5b7fd2ed-0289-421c-9dc6-92601fb576b0",
  before: "d5f0d30c-5fbb-4258-b053-202c73d5fe9b",
  field: ListEvalRunsFieldFieldEnum.IntegratedMeanReciprocalRank,
  filter: "voluptatem",
  limit: 783645,
  order: ListEvalRunsOrderOrderEnum.Asc,
  pageNumber: 500026,
  select: "error",
  workspaceName: "eaque",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ListEvalRunsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listTags

Lists all the tags in the workspace you choose. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetTagsApiV1WorkspacesWorkspaceNameTagsGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.listTags({
  filter: "occaecati",
  workspaceName: "rerum",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetTagsApiV1WorkspacesWorkspaceNameTagsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## start

Starts a draft evaluation run.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { StartEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameStartPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.start({
  evalRunName: "adipisci",
  workspaceName: "asperiores",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: StartEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameStartPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Updates these properties of an evaluation run: name, tags, pipeline, file corpus, and evaluation set.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { EditEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNamePatchResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.update({
  evalRunPatch: {
    comment: "earum",
    evaluationSetName: "modi",
    pipelineName: "iste",
    tags: [
      "deleniti",
      "pariatur",
      "provident",
    ],
  },
  evalRunName: "nobis",
  workspaceName: "libero",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: EditEvalRunApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNamePatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateTag

Changes the name of the tag you choose. Type the new tag name in the `name` field of the BODY PARAMS section. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { UpdateTagApiV1WorkspacesWorkspaceNameTagsTagNamePatchResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.updateTag({
  requestBody: {
    name: "Alex Luettgen",
  },
  tagName: "dolorem",
  workspaceName: "dolor",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: UpdateTagApiV1WorkspacesWorkspaceNameTagsTagNamePatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
