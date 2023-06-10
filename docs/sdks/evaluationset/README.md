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
  evaluationSetName: "iste",
  workspaceName: "dolorum",
}, {
  httpBearer: "",
}).then((res: DeleteEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                          | [operations.DeleteEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameDeleteRequest](../../models/operations/deleteevaluationsetapiv1workspacesworkspacenameevaluationsetsevaluationsetnamedeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                         |
| `security`                                                                                                                                                                                                                         | [operations.DeleteEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameDeleteSecurity](../../models/operations/deleteevaluationsetapiv1workspacesworkspacenameevaluationsetsevaluationsetnamedeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                                                                  |
| `config`                                                                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                 | Available config options for making requests.                                                                                                                                                                                      |


### Response

**Promise<[operations.DeleteEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameDeleteResponse](../../models/operations/deleteevaluationsetapiv1workspacesworkspacenameevaluationsetsevaluationsetnamedeleteresponse.md)>**


## get

Returns the contents of the evaluation set.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameGetResponse,
} from "ds-test/dist/sdk/models/operations";
import { LabelLabelStateAsStr } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.evaluationSet.get({
  evaluationSetName: "deleniti",
  workspaceName: "pariatur",
}, {
  httpBearer: "",
}).then((res: GetEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                              | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                              | [operations.GetEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameGetRequest](../../models/operations/getevaluationsetapiv1workspacesworkspacenameevaluationsetsevaluationsetnamegetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                             |
| `security`                                                                                                                                                                                                             | [operations.GetEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameGetSecurity](../../models/operations/getevaluationsetapiv1workspacesworkspacenameevaluationsetsevaluationsetnamegetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                                                      |
| `config`                                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                                          |


### Response

**Promise<[operations.GetEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameGetResponse](../../models/operations/getevaluationsetapiv1workspacesworkspacenameevaluationsetsevaluationsetnamegetresponse.md)>**


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
  evaluationSetName: "provident",
  workspaceName: "nobis",
}, {
  httpBearer: "",
}).then((res: GetEvaluationSetCsvFileApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameCsvGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                  | [operations.GetEvaluationSetCsvFileApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameCsvGetRequest](../../models/operations/getevaluationsetcsvfileapiv1workspacesworkspacenameevaluationsetsevaluationsetnamecsvgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                                 |
| `security`                                                                                                                                                                                                                                 | [operations.GetEvaluationSetCsvFileApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameCsvGetSecurity](../../models/operations/getevaluationsetcsvfileapiv1workspacesworkspacenameevaluationsetsevaluationsetnamecsvgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                                                          |
| `config`                                                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                                                              |


### Response

**Promise<[operations.GetEvaluationSetCsvFileApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameCsvGetResponse](../../models/operations/getevaluationsetcsvfileapiv1workspacesworkspacenameevaluationsetsevaluationsetnamecsvgetresponse.md)>**


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
      file: "libero",
      content: "delectus".encode(),
    },
  },
  workspaceName: "quaerat",
}, {
  httpBearer: "",
}).then((res: ImportEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsImportPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.ImportEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsImportPostRequest](../../models/operations/importevaluationsetapiv1workspacesworkspacenameevaluationsetsimportpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `security`                                                                                                                                                                                               | [operations.ImportEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsImportPostSecurity](../../models/operations/importevaluationsetapiv1workspacesworkspacenameevaluationsetsimportpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                                        |
| `config`                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                            |


### Response

**Promise<[operations.ImportEvaluationSetApiV1WorkspacesWorkspaceNameEvaluationSetsImportPostResponse](../../models/operations/importevaluationsetapiv1workspacesworkspacenameevaluationsetsimportpostresponse.md)>**


## list

Displays all evaluation sets and their properties.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListEvaluationSetsApiV1WorkspacesWorkspaceNameEvaluationSetsGetResponse } from "ds-test/dist/sdk/models/operations";
import { EvaluationSetWithStatusEvaluationSetStatusAsStr } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.evaluationSet.list({
  after: "8633323f-9b77-4f3a-8100-674ebf69280d",
  before: "1ba77a89-ebf7-437a-a420-3ce5e6a95d8a",
  limit: 55,
  name: "Alex Goodwin",
  pageNumber: 885338,
  workspaceName: "qui",
}, {
  httpBearer: "",
}).then((res: ListEvaluationSetsApiV1WorkspacesWorkspaceNameEvaluationSetsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.ListEvaluationSetsApiV1WorkspacesWorkspaceNameEvaluationSetsGetRequest](../../models/operations/listevaluationsetsapiv1workspacesworkspacenameevaluationsetsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `security`                                                                                                                                                                               | [operations.ListEvaluationSetsApiV1WorkspacesWorkspaceNameEvaluationSetsGetSecurity](../../models/operations/listevaluationsetsapiv1workspacesworkspacenameevaluationsetsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                        |
| `config`                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                       | Available config options for making requests.                                                                                                                                            |


### Response

**Promise<[operations.ListEvaluationSetsApiV1WorkspacesWorkspaceNameEvaluationSetsGetResponse](../../models/operations/listevaluationsetsapiv1workspacesworkspacenameevaluationsetsgetresponse.md)>**


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
  evaluationSetName: "dolorum",
  workspaceName: "a",
}, {
  httpBearer: "",
}).then((res: RetriggerLabelMatchingApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameLabelMatchingPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                                      | [operations.RetriggerLabelMatchingApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameLabelMatchingPostRequest](../../models/operations/retriggerlabelmatchingapiv1workspacesworkspacenameevaluationsetsevaluationsetnamelabelmatchingpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                                                     |
| `security`                                                                                                                                                                                                                                                     | [operations.RetriggerLabelMatchingApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameLabelMatchingPostSecurity](../../models/operations/retriggerlabelmatchingapiv1workspacesworkspacenameevaluationsetsevaluationsetnamelabelmatchingpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                                                                              |
| `config`                                                                                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                                                                                  |


### Response

**Promise<[operations.RetriggerLabelMatchingApiV1WorkspacesWorkspaceNameEvaluationSetsEvaluationSetNameLabelMatchingPostResponse](../../models/operations/retriggerlabelmatchingapiv1workspacesworkspacenameevaluationsetsevaluationsetnamelabelmatchingpostresponse.md)>**

