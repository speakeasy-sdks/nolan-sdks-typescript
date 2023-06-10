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
    resultId: "2e9817ee-17cb-4e61-a6b7-b95bc0ab3c20",
    tags: [
      "quaerat",
      "sapiente",
      "consectetur",
      "esse",
    ],
  },
  pipelineName: "blanditiis",
  workspaceName: "provident",
}, {
  httpBearer: "",
}).then((res: AddFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.AddFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackPostRequest](../../models/operations/addfeedbackapiv1workspacesworkspacenamepipelinespipelinenamefeedbackpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `security`                                                                                                                                                                                                 | [operations.AddFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackPostSecurity](../../models/operations/addfeedbackapiv1workspacesworkspacenamepipelinespipelinenamefeedbackpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                          |
| `config`                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                              |


### Response

**Promise<[operations.AddFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackPostResponse](../../models/operations/addfeedbackapiv1workspacesworkspacenamepipelinespipelinenamefeedbackpostresponse.md)>**


## create

Creates a pipeline YAML file.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreatePipelineApiV1WorkspacesWorkspaceNamePipelinesPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.create({
  dryRun: false,
  workspaceName: "a",
}, {
  httpBearer: "",
}).then((res: CreatePipelineApiV1WorkspacesWorkspaceNamePipelinesPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.CreatePipelineApiV1WorkspacesWorkspaceNamePipelinesPostRequest](../../models/operations/createpipelineapiv1workspacesworkspacenamepipelinespostrequest.md)   | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `security`                                                                                                                                                               | [operations.CreatePipelineApiV1WorkspacesWorkspaceNamePipelinesPostSecurity](../../models/operations/createpipelineapiv1workspacesworkspacenamepipelinespostsecurity.md) | :heavy_check_mark:                                                                                                                                                       | The security requirements to use for the request.                                                                                                                        |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.CreatePipelineApiV1WorkspacesWorkspaceNamePipelinesPostResponse](../../models/operations/createpipelineapiv1workspacesworkspacenamepipelinespostresponse.md)>**


## delete

Deletes a pipeline from deepset Cloud.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.delete({
  pipelineName: "nulla",
  workspaceName: "quas",
}, {
  httpBearer: "",
}).then((res: DeletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.DeletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeleteRequest](../../models/operations/deletepipelineapiv1workspacesworkspacenamepipelinespipelinenamedeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `security`                                                                                                                                                                                           | [operations.DeletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeleteSecurity](../../models/operations/deletepipelineapiv1workspacesworkspacenamepipelinespipelinenamedeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                                    |
| `config`                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                        |


### Response

**Promise<[operations.DeletePipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeleteResponse](../../models/operations/deletepipelineapiv1workspacesworkspacenamepipelinespipelinenamedeleteresponse.md)>**


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
  pipelineName: "esse",
  workspaceName: "quasi",
}, {
  httpBearer: "",
}).then((res: DeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeployPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.DeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeployPostRequest](../../models/operations/deploypipelineapiv1workspacesworkspacenamepipelinespipelinenamedeploypostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `security`                                                                                                                                                                                                   | [operations.DeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeployPostSecurity](../../models/operations/deploypipelineapiv1workspacesworkspacenamepipelinespipelinenamedeploypostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                                            |
| `config`                                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                                |


### Response

**Promise<[operations.DeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDeployPostResponse](../../models/operations/deploypipelineapiv1workspacesworkspacenamepipelinespipelinenamedeploypostresponse.md)>**


## get

Returns a pipeline.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.get({
  pipelineName: "a",
  workspaceName: "error",
}, {
  httpBearer: "",
}).then((res: GetPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.GetPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameGetRequest](../../models/operations/getpipelineapiv1workspacesworkspacenamepipelinespipelinenamegetrequest.md)   | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `security`                                                                                                                                                                               | [operations.GetPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameGetSecurity](../../models/operations/getpipelineapiv1workspacesworkspacenamepipelinespipelinenamegetsecurity.md) | :heavy_check_mark:                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                        |
| `config`                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                       | Available config options for making requests.                                                                                                                                            |


### Response

**Promise<[operations.GetPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameGetResponse](../../models/operations/getpipelineapiv1workspacesworkspacenamepipelinespipelinenamegetresponse.md)>**


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
  after: "9dd2efd1-21aa-46f1-a674-bdb04f157560",
  before: "82d68ea1-9f1d-4170-9133-9d08086a1840",
  field: GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetFieldField.SearchResultRank,
  filter: "occaecati",
  limit: 253191,
  order: GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetOrderOrder.Desc,
  pageNumber: 131055,
  pipelineName: "voluptas",
  select: "aut",
  workspaceName: "dignissimos",
}, {
  httpBearer: "",
}).then((res: GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                | [operations.GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetRequest](../../models/operations/getpipelinefeedbackapiv1workspacesworkspacenamepipelinespipelinenamefeedbackgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                               |
| `security`                                                                                                                                                                                                               | [operations.GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetSecurity](../../models/operations/getpipelinefeedbackapiv1workspacesworkspacenamepipelinespipelinenamefeedbackgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                                                        |
| `config`                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                            |


### Response

**Promise<[operations.GetPipelineFeedbackApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFeedbackGetResponse](../../models/operations/getpipelinefeedbackapiv1workspacesworkspacenamepipelinespipelinenamefeedbackgetresponse.md)>**


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
  pipelineName: "dicta",
  status: GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetStatusFileIndexingStatusQuery.IndexedNoDocuments,
  workspaceName: "natus",
}, {
  httpBearer: "",
}).then((res: GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetRequest](../../models/operations/getpipelinefilesapiv1workspacesworkspacenamepipelinespipelinenamefilesgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `security`                                                                                                                                                                                                   | [operations.GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetSecurity](../../models/operations/getpipelinefilesapiv1workspacesworkspacenamepipelinespipelinenamefilesgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                                            |
| `config`                                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                                |


### Response

**Promise<[operations.GetPipelineFilesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameFilesGetResponse](../../models/operations/getpipelinefilesapiv1workspacesworkspacenamepipelinespipelinenamefilesgetresponse.md)>**


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
  pipelineName: "velit",
  workspaceName: "voluptatibus",
}, {
  httpBearer: "",
}).then((res: GetPipelineIndexingApiV1WorkspacesWorkspaceNamePipelinesPipelineNameIndexingGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                | [operations.GetPipelineIndexingApiV1WorkspacesWorkspaceNamePipelinesPipelineNameIndexingGetRequest](../../models/operations/getpipelineindexingapiv1workspacesworkspacenamepipelinespipelinenameindexinggetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                               |
| `security`                                                                                                                                                                                                               | [operations.GetPipelineIndexingApiV1WorkspacesWorkspaceNamePipelinesPipelineNameIndexingGetSecurity](../../models/operations/getpipelineindexingapiv1workspacesworkspacenamepipelinespipelinenameindexinggetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                                                        |
| `config`                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                            |


### Response

**Promise<[operations.GetPipelineIndexingApiV1WorkspacesWorkspaceNamePipelinesPipelineNameIndexingGetResponse](../../models/operations/getpipelineindexingapiv1workspacesworkspacenamepipelinespipelinenameindexinggetresponse.md)>**


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
  pipelineName: "voluptas",
  workspaceName: "asperiores",
}, {
  httpBearer: "",
}).then((res: GetPipelineYamlAsJsonApiV1WorkspacesWorkspaceNamePipelinesPipelineNameJsonGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                            | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                            | [operations.GetPipelineYamlAsJsonApiV1WorkspacesWorkspaceNamePipelinesPipelineNameJsonGetRequest](../../models/operations/getpipelineyamlasjsonapiv1workspacesworkspacenamepipelinespipelinenamejsongetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                           |
| `security`                                                                                                                                                                                                           | [operations.GetPipelineYamlAsJsonApiV1WorkspacesWorkspaceNamePipelinesPipelineNameJsonGetSecurity](../../models/operations/getpipelineyamlasjsonapiv1workspacesworkspacenamepipelinespipelinenamejsongetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                                                    |
| `config`                                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                                        |


### Response

**Promise<[operations.GetPipelineYamlAsJsonApiV1WorkspacesWorkspaceNamePipelinesPipelineNameJsonGetResponse](../../models/operations/getpipelineyamlasjsonapiv1workspacesworkspacenamepipelinespipelinenamejsongetresponse.md)>**


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
  pipelineName: "aperiam",
  workspaceName: "ea",
}, {
  httpBearer: "",
}).then((res: GetPipelineIndexMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                  | [operations.GetPipelineIndexMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaGetRequest](../../models/operations/getpipelineindexmetadataapiv1workspacesworkspacenamepipelinespipelinenamemetagetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                 |
| `security`                                                                                                                                                                                                                 | [operations.GetPipelineIndexMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaGetSecurity](../../models/operations/getpipelineindexmetadataapiv1workspacesworkspacenamepipelinespipelinenamemetagetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                                          |
| `config`                                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                                              |


### Response

**Promise<[operations.GetPipelineIndexMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaGetResponse](../../models/operations/getpipelineindexmetadataapiv1workspacesworkspacenamepipelinespipelinenamemetagetresponse.md)>**


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
  after: 310067,
  fieldName: "consequuntur",
  limit: 831520,
  pipelineName: "officia",
  query: "maxime",
  workspaceName: "dignissimos",
}, {
  httpBearer: "",
}).then((res: GetPipelineMetadataFieldValuesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaFieldNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                                | [operations.GetPipelineMetadataFieldValuesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaFieldNameGetRequest](../../models/operations/getpipelinemetadatafieldvaluesapiv1workspacesworkspacenamepipelinespipelinenamemetafieldnamegetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                                                               |
| `security`                                                                                                                                                                                                                                               | [operations.GetPipelineMetadataFieldValuesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaFieldNameGetSecurity](../../models/operations/getpipelinemetadatafieldvaluesapiv1workspacesworkspacenamepipelinespipelinenamemetafieldnamegetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                                                                                        |
| `config`                                                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                                                            |


### Response

**Promise<[operations.GetPipelineMetadataFieldValuesApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaFieldNameGetResponse](../../models/operations/getpipelinemetadatafieldvaluesapiv1workspacesworkspacenamepipelinespipelinenamemetafieldnamegetresponse.md)>**


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
  metaField: "officia",
  pipelineName: "asperiores",
  workspaceName: "nemo",
}, {
  httpBearer: "",
}).then((res: GetPipelineMinMaxAggregationMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaMetaFieldAggregationGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                                                                  | [operations.GetPipelineMinMaxAggregationMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaMetaFieldAggregationGetRequest](../../models/operations/getpipelineminmaxaggregationmetadataapiv1workspacesworkspacenamepipelinespipelinenamemetametafieldaggregationgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                                                                                 |
| `security`                                                                                                                                                                                                                                                                                 | [operations.GetPipelineMinMaxAggregationMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaMetaFieldAggregationGetSecurity](../../models/operations/getpipelineminmaxaggregationmetadataapiv1workspacesworkspacenamepipelinespipelinenamemetametafieldaggregationgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                                                                                                          |
| `config`                                                                                                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                                                                                                              |


### Response

**Promise<[operations.GetPipelineMinMaxAggregationMetadataApiV1WorkspacesWorkspaceNamePipelinesPipelineNameMetaMetaFieldAggregationGetResponse](../../models/operations/getpipelineminmaxaggregationmetadataapiv1workspacesworkspacenamepipelinespipelinenamemetametafieldaggregationgetresponse.md)>**


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
  pipelineName: "quae",
  workspaceName: "quaerat",
}, {
  httpBearer: "",
}).then((res: GetPipelineStatsApiV1WorkspacesWorkspaceNamePipelinesPipelineNameStatsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.GetPipelineStatsApiV1WorkspacesWorkspaceNamePipelinesPipelineNameStatsGetRequest](../../models/operations/getpipelinestatsapiv1workspacesworkspacenamepipelinespipelinenamestatsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `security`                                                                                                                                                                                                   | [operations.GetPipelineStatsApiV1WorkspacesWorkspaceNamePipelinesPipelineNameStatsGetSecurity](../../models/operations/getpipelinestatsapiv1workspacesworkspacenamepipelinespipelinenamestatsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                                            |
| `config`                                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                                |


### Response

**Promise<[operations.GetPipelineStatsApiV1WorkspacesWorkspaceNamePipelinesPipelineNameStatsGetResponse](../../models/operations/getpipelinestatsapiv1workspacesworkspacenamepipelinespipelinenamestatsgetresponse.md)>**


## getYaml

Displays the pipeline as a YAML.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetPipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.getYaml({
  pipelineName: "porro",
  workspaceName: "quod",
}, {
  httpBearer: "",
}).then((res: GetPipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.GetPipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlGetRequest](../../models/operations/getpipelineyamlapiv1workspacesworkspacenamepipelinespipelinenameyamlgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `security`                                                                                                                                                                                               | [operations.GetPipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlGetSecurity](../../models/operations/getpipelineyamlapiv1workspacesworkspacenamepipelinespipelinenameyamlgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                                        |
| `config`                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                            |


### Response

**Promise<[operations.GetPipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlGetResponse](../../models/operations/getpipelineyamlapiv1workspacesworkspacenamepipelinespipelinenameyamlgetresponse.md)>**


## list

Lists all the pipelines in the workspace.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListPipelinesApiV1WorkspacesWorkspaceNamePipelinesGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.pipeline.list({
  after: "413aa63a-ae8d-4678-a4db-b675fd5e60b3",
  before: "75ed4f6f-bee4-41f3-b317-fe35b60eb1ea",
  deleted: false,
  desiredStatus: "tempora",
  limit: 132815,
  pageNumber: 379057,
  pipelineName: "voluptas",
  status: "voluptas",
  workspaceName: "minima",
}, {
  httpBearer: "",
}).then((res: ListPipelinesApiV1WorkspacesWorkspaceNamePipelinesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.ListPipelinesApiV1WorkspacesWorkspaceNamePipelinesGetRequest](../../models/operations/listpipelinesapiv1workspacesworkspacenamepipelinesgetrequest.md)   | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `security`                                                                                                                                                           | [operations.ListPipelinesApiV1WorkspacesWorkspaceNamePipelinesGetSecurity](../../models/operations/listpipelinesapiv1workspacesworkspacenamepipelinesgetsecurity.md) | :heavy_check_mark:                                                                                                                                                   | The security requirements to use for the request.                                                                                                                    |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.ListPipelinesApiV1WorkspacesWorkspaceNamePipelinesGetResponse](../../models/operations/listpipelinesapiv1workspacesworkspacenamepipelinesgetresponse.md)>**


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
    filters: {},
    params: {},
    queries: [
      "dolorum",
      "adipisci",
      "minus",
    ],
  },
  pipelineName: "dolores",
  workspaceName: "blanditiis",
}, {
  httpBearer: "",
}).then((res: SearchApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.SearchApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchPostRequest](../../models/operations/searchapiv1workspacesworkspacenamepipelinespipelinenamesearchpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `security`                                                                                                                                                                                   | [operations.SearchApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchPostSecurity](../../models/operations/searchapiv1workspacesworkspacenamepipelinespipelinenamesearchpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                            |
| `config`                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                |


### Response

**Promise<[operations.SearchApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchPostResponse](../../models/operations/searchapiv1workspacesworkspacenamepipelinespipelinenamesearchpostresponse.md)>**


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
  after: "744ed53b-88f3-4a8d-8f5c-0b2f2fb7b194",
  before: "a276b269-16fe-41f0-8f42-94e3698f447f",
  limit: 401713,
  pageNumber: 25497,
  pipelineName: "non",
  workspaceName: "officiis",
}, {
  httpBearer: "",
}).then((res: PipelineSearchHistoryApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchHistoryGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                              | [operations.PipelineSearchHistoryApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchHistoryGetRequest](../../models/operations/pipelinesearchhistoryapiv1workspacesworkspacenamepipelinespipelinenamesearchhistorygetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                             |
| `security`                                                                                                                                                                                                                             | [operations.PipelineSearchHistoryApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchHistoryGetSecurity](../../models/operations/pipelinesearchhistoryapiv1workspacesworkspacenamepipelinespipelinenamesearchhistorygetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                                                                      |
| `config`                                                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                                                          |


### Response

**Promise<[operations.PipelineSearchHistoryApiV1WorkspacesWorkspaceNamePipelinesPipelineNameSearchHistoryGetResponse](../../models/operations/pipelinesearchhistoryapiv1workspacesworkspacenamepipelinespipelinenamesearchhistorygetresponse.md)>**


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
  pipelineName: "praesentium",
  workspaceName: "facilis",
}, {
  httpBearer: "",
}).then((res: SetDefaultPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDefaultPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                              | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                              | [operations.SetDefaultPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDefaultPostRequest](../../models/operations/setdefaultpipelineapiv1workspacesworkspacenamepipelinespipelinenamedefaultpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                             |
| `security`                                                                                                                                                                                                             | [operations.SetDefaultPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDefaultPostSecurity](../../models/operations/setdefaultpipelineapiv1workspacesworkspacenamepipelinespipelinenamedefaultpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                                                      |
| `config`                                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                                          |


### Response

**Promise<[operations.SetDefaultPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameDefaultPostResponse](../../models/operations/setdefaultpipelineapiv1workspacesworkspacenamepipelinespipelinenamedefaultpostresponse.md)>**


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
  pipelineName: "quaerat",
  workspaceName: "incidunt",
}, {
  httpBearer: "",
}).then((res: UndeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameUndeployPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                            | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                            | [operations.UndeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameUndeployPostRequest](../../models/operations/undeploypipelineapiv1workspacesworkspacenamepipelinespipelinenameundeploypostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                           |
| `security`                                                                                                                                                                                                           | [operations.UndeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameUndeployPostSecurity](../../models/operations/undeploypipelineapiv1workspacesworkspacenamepipelinespipelinenameundeploypostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                                                    |
| `config`                                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                                        |


### Response

**Promise<[operations.UndeployPipelineApiV1WorkspacesWorkspaceNamePipelinesPipelineNameUndeployPostResponse](../../models/operations/undeploypipelineapiv1workspacesworkspacenamepipelinespipelinenameundeploypostresponse.md)>**


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
  pipelineName: "ipsam",
  workspaceName: "debitis",
}, {
  httpBearer: "",
}).then((res: UpdatePipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.UpdatePipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlPutRequest](../../models/operations/updatepipelineyamlapiv1workspacesworkspacenamepipelinespipelinenameyamlputrequest.md)   | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `security`                                                                                                                                                                                                     | [operations.UpdatePipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlPutSecurity](../../models/operations/updatepipelineyamlapiv1workspacesworkspacenamepipelinespipelinenameyamlputsecurity.md) | :heavy_check_mark:                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                              |
| `config`                                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                                  |


### Response

**Promise<[operations.UpdatePipelineYamlApiV1WorkspacesWorkspaceNamePipelinesPipelineNameYamlPutResponse](../../models/operations/updatepipelineyamlapiv1workspacesworkspacenamepipelinespipelinenameyamlputresponse.md)>**

