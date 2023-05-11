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
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetFieldFieldEnum,
  GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetOrderOrderEnum,
  GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getFeedback({
  accept: "aliquam",
  after: "f1575608-2d68-4ea1-9f1d-17051339d080",
  before: "86a18403-94c2-4607-9f93-f5f0642dac7a",
  field: GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetFieldFieldEnum.SearchResultSearchQuery,
  filter: "nemo",
  limit: 65304,
  order: GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetOrderOrderEnum.Asc,
  pageNumber: 783235,
  pipelineName: "quod",
  select: "labore",
  workspaceName: "ab",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetStatusFileIndexingStatusQueryEnum,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getFiles({
  pipelineName: "adipisci",
  status: GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetStatusFileIndexingStatusQueryEnum.IndexedNoDocuments,
  workspaceName: "id",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  pipelineName: "suscipit",
  workspaceName: "velit",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  pipelineName: "culpa",
  workspaceName: "est",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  pipelineName: "recusandae",
  workspaceName: "totam",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  after: 853940,
  fieldName: "vel",
  limit: 497678,
  pipelineName: "quos",
  query: "vel",
  workspaceName: "labore",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  metaField: "possimus",
  pipelineName: "facilis",
  workspaceName: "cum",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  pipelineName: "commodi",
  workspaceName: "in",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  pipelineName: "corporis",
  workspaceName: "reiciendis",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  after: "d5e60b37-5ed4-4f6f-bee4-1f33317fe35b",
  before: "60eb1ea4-2655-45ba-bc28-744ed53b88f3",
  deleted: false,
  desiredStatus: "culpa",
  limit: 548519,
  pageNumber: 867290,
  pipelineName: "totam",
  status: "hic",
  workspaceName: "exercitationem",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
import { DeepsetCloudAnswerAnswerTypeEnum, DeepsetCloudDocumentContentTypeEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.pipeline.search({
  pipelineQuery: {
    debug: false,
    filters: {
      "sit": "rerum",
      "sed": "reiciendis",
      "explicabo": "asperiores",
      "facilis": "voluptate",
    },
    params: {
      "ab": "iste",
      "dolore": "laborum",
      "sed": "in",
    },
    queries: [
      "quidem",
      "explicabo",
    ],
  },
  pipelineName: "voluptas",
  workspaceName: "unde",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  after: "16fe1f08-f429-44e3-a98f-447f603e8b44",
  before: "5e80ca55-efd2-40e4-97e1-858b6a89fbe3",
  limit: 677115,
  pageNumber: 341698,
  pipelineName: "officia",
  workspaceName: "dolorum",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  pipelineName: "corrupti",
  workspaceName: "accusamus",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  pipelineName: "tempora",
  workspaceName: "atque",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  pipelineName: "fugit",
  workspaceName: "ut",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: UpdatePipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
