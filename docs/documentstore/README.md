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
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: CheckConnectionApiV1WorkspacesWorkspaceNameIndexesIndexNameGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
    filters: {
      "pariatur": "modi",
      "praesentium": "rem",
      "voluptates": "quasi",
    },
    onlyDocumentsWithoutEmbedding: false,
    usePrefiltering: false,
  },
  indexName: "repudiandae",
  workspaceName: "sint",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: CountDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsCountPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Displays the document content and its properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetDocumentApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsDocumentIdGetResponse,
} from "ds-test/dist/sdk/models/operations";
import { DeepsetCloudDocumentContentTypeEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.documentStore.get({
  documentId: "veritatis",
  indexName: "itaque",
  workspaceName: "incidunt",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: GetDocumentApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsDocumentIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
    filters: {
      "consequatur": "est",
      "quibusdam": "explicabo",
    },
    returnEmbedding: false,
    usePrefiltering: false,
  },
  indexName: "deserunt",
  workspaceName: "distinctio",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: GetAllDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsStreamPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listDocuments

Displays all documents processed by the specified pipeline together with their properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetAllDocumentsApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsGetResponse } from "ds-test/dist/sdk/models/operations";
import { DeepsetCloudDocumentContentTypeEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.documentStore.listDocuments({
  indexName: "quibusdam",
  returnEmbedding: false,
  workspaceName: "labore",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: GetAllDocumentsApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## search

Searches the documents for the specified query.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  QueryDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsQueryPostResponse,
} from "ds-test/dist/sdk/models/operations";
import { DeepsetCloudDocumentContentTypeEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.documentStore.search({
  queryDocumentsParams: {
    allTermsMustMatch: false,
    customQuery: "modi",
    filters: {
      "aliquid": "cupiditate",
    },
    query: "quos",
    queryEmb: [
      1649.4,
    ],
    returnEmbedding: false,
    topK: 828940,
    usePrefiltering: false,
  },
  indexName: "ipsam",
  workspaceName: "alias",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: QueryDocumentsStreamApiV1WorkspacesWorkspaceNameIndexesIndexNameDocumentsQueryPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
