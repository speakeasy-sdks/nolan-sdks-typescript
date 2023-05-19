# file

### Available Operations

* [deleteMulti](#deletemulti) - Delete Files
* [deleteSingle](#deletesingle) - Delete File
* [get](#get) - Get File
* [getDocument](#getdocument) - Get Document
* [getMetaData](#getmetadata) - Get File Meta
* [list](#list) - List Files
* [updateMetaData](#updatemetadata) - Update File Meta
* [upload](#upload) - Upload File

## deleteMulti

Deletes files in a workspace. Deletes all files if no file_names provided.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.deleteMulti({
  requestBody: {
    names: [
      "nihil",
      "sit",
      "expedita",
    ],
  },
  workspaceName: "neque",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteSingle

Removes the file from the workspace.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeleteFileApiV1WorkspacesWorkspaceNameFilesFileIdDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.deleteSingle({
  fileId: "26b5a734-29cd-4b1a-8422-bb679d232271",
  workspaceName: "ullam",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: DeleteFileApiV1WorkspacesWorkspaceNameFilesFileIdDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Retrieves the file contents.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetFileApiV1WorkspacesWorkspaceNameFilesFileIdGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.get({
  fileId: "bf0cbb1e-31b8-4b90-b344-3a1108e0adcf",
  workspaceName: "ut",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetFileApiV1WorkspacesWorkspaceNameFilesFileIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDocument

Returns all documents generated for a file.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetDocumentApiV1WorkspacesWorkspaceNameFilesFileIdDocumentsGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.getDocument({
  fileId: "b921879f-ce95-43f7-bef7-fbc7abd74dd3",
  workspaceName: "natus",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetDocumentApiV1WorkspacesWorkspaceNameFilesFileIdDocumentsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMetaData

Displays the metadata of a file.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.getMetaData({
  fileId: "c0f5d2cf-f7c7-40a4-9626-d436813f16d9",
  workspaceName: "voluptatibus",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

List files in a workspace. This endpoint supports pagination and filtering by name and metadata.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  ListFilesApiV1WorkspacesWorkspaceNameFilesGetFieldField,
  ListFilesApiV1WorkspacesWorkspaceNameFilesGetOrderOrder,
  ListFilesApiV1WorkspacesWorkspaceNameFilesGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.list({
  afterFileId: "5fce6c55-6146-4c3e-a50f-b008c42e141a",
  afterValue: "laborum",
  content: "placeat",
  field: ListFilesApiV1WorkspacesWorkspaceNameFilesGetFieldField.CreatedAt,
  filter: "eum",
  limit: 420539,
  metaKey: "nobis",
  metaValue: "quas",
  name: "Drew Hoeger I",
  order: ListFilesApiV1WorkspacesWorkspaceNameFilesGetOrderOrder.Asc,
  pageNumber: 131482,
  workspaceName: "provident",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ListFilesApiV1WorkspacesWorkspaceNameFilesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateMetaData

Updates the metadata of a file. You can modify existing metadata or add new ones. The metadata of the documents that were created
from this file will also be updated.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { UpdateFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaPutResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.updateMetaData({
  requestBody: {
    "molestiae": "magnam",
  },
  fileId: "74778a7b-d466-4d28-810a-b3cdca425190",
  workspaceName: "tempora",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: UpdateFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## upload

Uploads a file into the workspace. You can also use this endpoint to create a text file. To do that, enter the file name and text as its contents.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  UploadFileApiV1WorkspacesWorkspaceNameFilesPostResponse,
  UploadFileApiV1WorkspacesWorkspaceNameFilesPostWriteModeFileWriteModeEnum,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.upload({
  bodyUploadFileApiV1WorkspacesWorkspaceNameFilesPost: {
    file: {
      file: "debitis",
      content: "ipsam".encode(),
    },
    meta: "aspernatur",
    text: "sequi",
  },
  fileName: "quo",
  workspaceName: "esse",
  writeMode: UploadFileApiV1WorkspacesWorkspaceNameFilesPostWriteModeFileWriteModeEnum.Fail,
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: UploadFileApiV1WorkspacesWorkspaceNameFilesPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
