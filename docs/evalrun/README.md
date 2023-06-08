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
  httpBearer: "",
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
  httpBearer: "",
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
  httpBearer: "",
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
  httpBearer: "",
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
  httpBearer: "",
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
  GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetFieldField,
  GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetOrderOrder,
  GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.getNodeEvalPredictions({
  after: "fb14cd66-ae39-45ef-b9ba-88f3a6699707",
  before: "4ba4469b-6e21-4419-9989-0afa563e2516",
  evalRunName: "doloribus",
  field: GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetFieldField.Answer,
  filter: "eius",
  limit: 806194,
  nodeName: "deleniti",
  order: GetNodeEvalPredictionsApiV1WorkspacesWorkspaceNameEvalRunsEvalRunNameNodesNodeNamePredictionsGetOrderOrder.Desc,
  pageNumber: 447926,
  select: "architecto",
  workspaceName: "architecto",
}, {
  httpBearer: "",
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
import { ListEvalRunsFieldField, ListEvalRunsOrderOrder, ListEvalRunsResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.list({
  after: "e5b7fd2e-d028-4921-8ddc-692601fb576b",
  before: "0d5f0d30-c5fb-4b25-8705-3202c73d5fe9",
  field: ListEvalRunsFieldField.IntegratedMeanAveragePrecision,
  filter: "perspiciatis",
  limit: 31838,
  order: ListEvalRunsOrderOrder.Desc,
  pageNumber: 164694,
  select: "blanditiis",
  workspaceName: "error",
}, {
  httpBearer: "",
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
  filter: "eaque",
  workspaceName: "occaecati",
}, {
  httpBearer: "",
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
  evalRunName: "rerum",
  workspaceName: "adipisci",
}, {
  httpBearer: "",
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
    comment: "asperiores",
    evaluationSetName: "earum",
    pipelineName: "modi",
    tags: [
      "dolorum",
      "deleniti",
      "pariatur",
    ],
  },
  evalRunName: "provident",
  workspaceName: "nobis",
}, {
  httpBearer: "",
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
    name: "Toby Hahn",
  },
  tagName: "dolorem",
  workspaceName: "dolorem",
}, {
  httpBearer: "",
}).then((res: UpdateTagApiV1WorkspacesWorkspaceNameTagsTagNamePatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
