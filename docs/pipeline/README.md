# pipeline

### Available Operations

* [addFeedback](#addfeedback) - Add Feedback
* [create](#create) - Create Pipeline
* [delete](#delete) - Delete Pipeline
* [deploy](#deploy) - Deploy Pipeline
* [get](#get) - Get Pipeline
* [getFeedback](#getfeedback) - Get Pipeline Feedback
* [getFiles](#getfiles) - Get Pipeline Files
* [getIndexing](#getindexing) - Get Pipeline Indexing
* [getJson](#getjson) - Get Pipeline Yaml As Json
* [getMetadata](#getmetadata) - Get Pipeline Index Metadata [private]
* [getMetadataFieldValues](#getmetadatafieldvalues) - Get Pipeline Metadata Field Values [private]
* [getMinMaxAggregationMetadata](#getminmaxaggregationmetadata) - Get Pipeline Min Max Aggregation Metadata [private]
* [getStats](#getstats) - Get Pipeline Stats
* [getYaml](#getyaml) - Get Pipeline Yaml
* [list](#list) - List Pipelines
* [search](#search) - Search
* [searchHistory](#searchhistory) - Pipeline Search History [private]
* [setDefault](#setdefault) - Set Default Pipeline
* [undeploy](#undeploy) - Undeploy Pipeline
* [updateYaml](#updateyaml) - Update Pipeline Yaml

## addFeedback

Adds feedback to search results.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { AddFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.addFeedback({
  postPipelineFeedback: {
    isCorrectAnswer: false,
    isCorrectDocument: false,
    resultId: "0ab3c20c-4f37-489f-9871-f99dd2efd121",
    tags: [
      "culpa",
      "aliquid",
      "tenetur",
    ],
  },
  pipelineName: "quae",
  workspaceName: "earum",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: AddFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## create

Creates a pipeline YAML file.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreatePipelineApiV1WorkspacesWorkspaceNamePipelinesPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.create({
  dryRun: false,
  workspaceName: "vel",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: CreatePipelineApiV1WorkspacesWorkspaceNamePipelinesPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Deletes a pipeline from deepset Cloud.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.delete({
  pipelineName: "in",
  workspaceName: "eius",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deploy

Deploys a pipeline in deepset Cloud.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  DeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeployPostResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.deploy({
  pipelineName: "libero",
  workspaceName: "illum",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeployPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Returns a pipeline.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.get({
  pipelineName: "soluta",
  workspaceName: "accusantium",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getFeedback

Returns the feedback in JSON or CSV format.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetFieldField,
  GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetOrderOrder,
  GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getFeedback({
  after: "4f157560-82d6-48ea-99f1-d17051339d08",
  before: "086a1840-394c-4260-b1f9-3f5f0642dac7",
  field: GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetFieldField.SearchResultSearchCreatedAt,
  filter: "asperiores",
  limit: 368102,
  order: GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetOrderOrder.Asc,
  pageNumber: 312753,
  pipelineName: "porro",
  select: "quod",
  workspaceName: "labore",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getFiles

Returns IDs of all files with a specific status.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetResponse,
  GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetStatusFileIndexingStatusQuery,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getFiles({
  pipelineName: "ab",
  status: GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetStatusFileIndexingStatusQuery.Failed,
  workspaceName: "fuga",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getIndexing

Returns the indexing information for a pipeline.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetPipelineIndexingApiV1WorkspacesWorkspaceNamePipelinesPipelineNameIndexingGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getIndexing({
  pipelineName: "id",
  workspaceName: "suscipit",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetPipelineIndexingApiV1WorkspacesWorkspaceNamePipelinesPipelineNameIndexingGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getJson

Returns the pipeline in the JSON format.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetPipelineYamlAsJsonApiV1WorkspacesWorkspaceNamePipelinesPipelineNameJsonGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getJson({
  pipelineName: "velit",
  workspaceName: "culpa",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetPipelineYamlAsJsonApiV1WorkspacesWorkspaceNamePipelinesPipelineNameJsonGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMetadata

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetPipelineIndexMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getMetadata({
  pipelineName: "est",
  workspaceName: "recusandae",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetPipelineIndexMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMetadataFieldValues

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetPipelineMetadataFieldValuesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaFieldNameGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getMetadataFieldValues({
  after: 517309,
  fieldName: "fugiat",
  limit: 424089,
  pipelineName: "ducimus",
  query: "quos",
  workspaceName: "vel",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetPipelineMetadataFieldValuesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaFieldNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMinMaxAggregationMetadata

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetPipelineMinMaxAggregationMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaMetaFieldAggregationGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getMinMaxAggregationMetadata({
  metaField: "labore",
  pipelineName: "possimus",
  workspaceName: "facilis",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetPipelineMinMaxAggregationMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaMetaFieldAggregationGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getStats

Returns a pipeline.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetPipelineStatsApiV1WorkspacesWorkspaceNamePipelinesPipelineNameStatsGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getStats({
  pipelineName: "cum",
  workspaceName: "commodi",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetPipelineStatsApiV1WorkspacesWorkspaceNamePipelinesPipelineNameStatsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getYaml

Displays the pipeline as a YAML.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetPipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getYaml({
  pipelineName: "in",
  workspaceName: "corporis",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetPipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Lists all the pipelines in the workspace.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListPipelinesApiV1WorkspacesWorkspaceNamePipelinesGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.list({
  after: "fd5e60b3-75ed-44f6-bbee-41f33317fe35",
  before: "b60eb1ea-4265-455b-a3c2-8744ed53b88f",
  deleted: false,
  desiredStatus: "nesciunt",
  limit: 633998,
  pageNumber: 548519,
  pipelineName: "pariatur",
  status: "totam",
  workspaceName: "hic",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ListPipelinesApiV1WorkspacesWorkspaceNamePipelinesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## search

Run a search using a pipeline.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { SearchApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchPostResponse } from "ds-test/dist/sdk/models/operations";
import { DeepsetCloudAnswerAnswerType, DeepsetCloudDocumentContentType } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.pipeline.search({
  pipelineQuery: {
    debug: false,
    filters: {
      "nobis": "sit",
      "rerum": "sed",
    },
    params: {
      "explicabo": "asperiores",
      "facilis": "voluptate",
      "expedita": "ab",
      "iste": "dolore",
    },
    queries: [
      "sed",
      "in",
      "commodi",
    ],
  },
  pipelineName: "quidem",
  workspaceName: "explicabo",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: SearchApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchPostResponse) => {
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
import {
  PipelineSearchHistoryApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchHistoryGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.searchHistory({
  after: "6916fe1f-08f4-4294-a369-8f447f603e8b",
  before: "445e80ca-55ef-4d20-a457-e1858b6a89fb",
  limit: 892863,
  pageNumber: 204923,
  pipelineName: "dolorum",
  workspaceName: "nostrum",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: PipelineSearchHistoryApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchHistoryGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## setDefault

Sets a pipeline as the default pipeline for search.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  SetDefaultPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDefaultPostResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.setDefault({
  pipelineName: "officia",
  workspaceName: "dolorum",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: SetDefaultPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDefaultPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## undeploy

Undeploys a pipeline in deepset Cloud.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  UndeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameUndeployPostResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.undeploy({
  pipelineName: "corrupti",
  workspaceName: "accusamus",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: UndeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameUndeployPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateYaml

Updates the pipeline YAML file.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  UpdatePipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlPutResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.updateYaml({
  pipelineName: "tempora",
  workspaceName: "atque",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: UpdatePipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
