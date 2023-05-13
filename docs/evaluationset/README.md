# evaluationSet

### Available Operations

* [delete](#delete) - Delete Evaluation Set
* [get](#get) - Get Evaluation Set
* [getCsv](#getcsv) - Get Evaluation Set Csv File
* [importEvaluationSet](#importevaluationset) - Import Evaluation Set
* [list](#list) - Get Evaluation Sets
* [retrigger](#retrigger) - Retrigger Label Matching

## delete

Deletes an evaluation set from the workspace.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  DeleteEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameDeleteResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evaluationSet.delete({
  evaluationSetName: "qui",
  workspaceName: "ipsum",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeleteEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Returns the contents of the evaluation set.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameGetResponse,
} from "ds-test/dist/sdk/models/operations";
import { LabelLabelStateAsStrEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.evaluationSet.get({
  evaluationSetName: "hic",
  workspaceName: "excepturi",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCsv

Fetches the evaluation set as a CSV file.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetEvaluationSetCsvFileApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameCsvGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evaluationSet.getCsv({
  evaluationSetName: "cum",
  workspaceName: "voluptate",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetEvaluationSetCsvFileApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameCsvGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## importEvaluationSet

Imports an evaluation set into deepset Cloud.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ImportEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsImportPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evaluationSet.importEvaluationSet({
  bodyImportEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsImportPost: {
    file: {
      file: "dignissimos",
      content: "reiciendis".encode(),
    },
  },
  workspaceName: "amet",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ImportEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsImportPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Displays all evaluation sets and their properties.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListEvaluationSetsApiV1WorkspacesWorkspaceNameEvaluationSetsGetResponse } from "ds-test/dist/sdk/models/operations";
import { EvaluationSetWithStatusEvaluationSetStatusAsStrEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.evaluationSet.list({
  after: "a4100674-ebf6-4928-8d1b-a77a89ebf737",
  before: "ae4203ce-5e6a-495d-8a0d-446ce2af7a73",
  limit: 788740,
  name: "Marvin Renner",
  pageNumber: 313692,
  workspaceName: "dolorem",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ListEvaluationSetsApiV1WorkspacesWorkspaceNameEvaluationSetsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## retrigger

Retrigger matching labels from an evaluation set to the files in your workspace.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  RetriggerLabelMatchingApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameLabelMatchingPostResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evaluationSet.retrigger({
  evaluationSetName: "sapiente",
  workspaceName: "totam",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: RetriggerLabelMatchingApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameLabelMatchingPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
