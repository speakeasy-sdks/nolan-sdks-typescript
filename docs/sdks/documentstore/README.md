# documentStore

### Available Operations

* [checkConnection](#checkconnection) - Check Connection [private]
* [countDocuments](#countdocuments) - Count Documents Stream [private]
* [get](#get) - Get Document [private]
* [listDocumentStreams](#listdocumentstreams) - Get All Documents Stream
* [listDocuments](#listdocuments) - Get All Documents [private]
* [search](#search) - Query Documents Stream

## checkConnection

Checks the connection to the Opensearch document store and checks if the pipeline_name (index) exists. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CheckConnectionApiV1WorkspacesWorkspaceNameIndexesIndexNameGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.documentStore.checkConnection({
  indexName: "quidem",
  workspaceName: "molestias",
}, {
  httpBearer: "",
}).then((res: CheckConnectionApiV1WorkspacesWorkspaceNameIndexesIndexNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.CheckConnectionApiV1WorkspacesWorkspaceNameIndexesIndexNameGetRequest](../../models/operations/checkconnectionapiv1workspacesworkspacenameindexesindexnamegetrequest.md)   | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `security`                                                                                                                                                                             | [operations.CheckConnectionApiV1WorkspacesWorkspaceNameIndexesIndexNameGetSecurity](../../models/operations/checkconnectionapiv1workspacesworkspacenameindexesindexnamegetsecurity.md) | :heavy_check_mark:                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                      |
| `config`                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                     | Available config options for making requests.                                                                                                                                          |


### Response

**Promise<[operations.CheckConnectionApiV1WorkspacesWorkspaceNameIndexesIndexNameGetResponse](../../models/operations/checkconnectionapiv1workspacesworkspacenameindexesindexnamegetresponse.md)>**


## countDocuments

Returns the number of documents for a pipeline. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  CountDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsCountPostResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.documentStore.countDocuments({
  countDocumentsParams: {
    filters: {},
    onlyDocumentsWithoutEmbedding: false,
    usePrefiltering: false,
  },
  indexName: "excepturi",
  workspaceName: "pariatur",
}, {
  httpBearer: "",
}).then((res: CountDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsCountPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                      | [operations.CountDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsCountPostRequest](../../models/operations/countdocumentsstreamapiv1workspacesworkspacenameindexesindexnamedocumentscountpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                     |
| `security`                                                                                                                                                                                                                     | [operations.CountDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsCountPostSecurity](../../models/operations/countdocumentsstreamapiv1workspacesworkspacenameindexesindexnamedocumentscountpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                                              |
| `config`                                                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                                                  |


### Response

**Promise<[operations.CountDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsCountPostResponse](../../models/operations/countdocumentsstreamapiv1workspacesworkspacenameindexesindexnamedocumentscountpostresponse.md)>**


## get

Displays the document content and its properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetDocumentApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsDocumentIdGetResponse,
} from "ds-test/dist/sdk/models/operations";
import { DeepsetCloudDocumentContentType } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.documentStore.get({
  documentId: "modi",
  indexName: "praesentium",
  workspaceName: "rem",
}, {
  httpBearer: "",
}).then((res: GetDocumentApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsDocumentIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                            | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                            | [operations.GetDocumentApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsDocumentIdGetRequest](../../models/operations/getdocumentapiv1workspacesworkspacenameindexesindexnamedocumentsdocumentidgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                           |
| `security`                                                                                                                                                                                                           | [operations.GetDocumentApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsDocumentIdGetSecurity](../../models/operations/getdocumentapiv1workspacesworkspacenameindexesindexnamedocumentsdocumentidgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                                                    |
| `config`                                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                                        |


### Response

**Promise<[operations.GetDocumentApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsDocumentIdGetResponse](../../models/operations/getdocumentapiv1workspacesworkspacenameindexesindexnamedocumentsdocumentidgetresponse.md)>**


## listDocumentStreams

Returns all documents created for a pipeline.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetAllDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsStreamPostResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.documentStore.listDocumentStreams({
  fetchDocumentsParams: {
    filters: {},
    returnEmbedding: false,
    usePrefiltering: false,
  },
  indexName: "voluptates",
  workspaceName: "quasi",
}, {
  httpBearer: "",
}).then((res: GetAllDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsStreamPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                          | [operations.GetAllDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsStreamPostRequest](../../models/operations/getalldocumentsstreamapiv1workspacesworkspacenameindexesindexnamedocumentsstreampostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                         |
| `security`                                                                                                                                                                                                                         | [operations.GetAllDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsStreamPostSecurity](../../models/operations/getalldocumentsstreamapiv1workspacesworkspacenameindexesindexnamedocumentsstreampostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                                                                  |
| `config`                                                                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                 | Available config options for making requests.                                                                                                                                                                                      |


### Response

**Promise<[operations.GetAllDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsStreamPostResponse](../../models/operations/getalldocumentsstreamapiv1workspacesworkspacenameindexesindexnamedocumentsstreampostresponse.md)>**


## listDocuments

Displays all documents processed by the specified pipeline together with their properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetAllDocumentsApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsGetResponse } from "ds-test/dist/sdk/models/operations";
import { DeepsetCloudDocumentContentType } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.documentStore.listDocuments({
  indexName: "repudiandae",
  returnEmbedding: false,
  workspaceName: "sint",
}, {
  httpBearer: "",
}).then((res: GetAllDocumentsApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.GetAllDocumentsApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsGetRequest](../../models/operations/getalldocumentsapiv1workspacesworkspacenameindexesindexnamedocumentsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `security`                                                                                                                                                                                               | [operations.GetAllDocumentsApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsGetSecurity](../../models/operations/getalldocumentsapiv1workspacesworkspacenameindexesindexnamedocumentsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                                        |
| `config`                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                            |


### Response

**Promise<[operations.GetAllDocumentsApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsGetResponse](../../models/operations/getalldocumentsapiv1workspacesworkspacenameindexesindexnamedocumentsgetresponse.md)>**


## search

Searches the documents for the specified query.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  QueryDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsQueryPostResponse,
} from "ds-test/dist/sdk/models/operations";
import { DeepsetCloudDocumentContentType } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.documentStore.search({
  queryDocumentsParams: {
    allTermsMustMatch: false,
    customQuery: "veritatis",
    filters: {},
    query: "itaque",
    queryEmb: [
      3185.69,
      93.56,
    ],
    returnEmbedding: false,
    topK: 667411,
    usePrefiltering: false,
  },
  indexName: "quibusdam",
  workspaceName: "explicabo",
}, {
  httpBearer: "",
}).then((res: QueryDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsQueryPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                      | [operations.QueryDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsQueryPostRequest](../../models/operations/querydocumentsstreamapiv1workspacesworkspacenameindexesindexnamedocumentsquerypostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                     |
| `security`                                                                                                                                                                                                                     | [operations.QueryDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsQueryPostSecurity](../../models/operations/querydocumentsstreamapiv1workspacesworkspacenameindexesindexnamedocumentsquerypostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                                              |
| `config`                                                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                                                  |


### Response

**Promise<[operations.QueryDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsQueryPostResponse](../../models/operations/querydocumentsstreamapiv1workspacesworkspacenameindexesindexnamedocumentsquerypostresponse.md)>**

