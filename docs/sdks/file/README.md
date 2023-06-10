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
      "harum",
      "iusto",
    ],
  },
  workspaceName: "ipsum",
}, {
  httpBearer: "",
}).then((res: DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteRequest](../../models/operations/deletefilesapiv1workspacesworkspacenamefilesdeleterequest.md)   | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `security`                                                                                                                                                     | [operations.DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteSecurity](../../models/operations/deletefilesapiv1workspacesworkspacenamefilesdeletesecurity.md) | :heavy_check_mark:                                                                                                                                             | The security requirements to use for the request.                                                                                                              |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.DeleteFilesApiV1WorkspacesWorkspaceNameFilesDeleteResponse](../../models/operations/deletefilesapiv1workspacesworkspacenamefilesdeleteresponse.md)>**


## deleteSingle

Removes the file from the workspace.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { DeleteFileApiV1WorkspacesWorkspaceNameFilesFileIdDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.deleteSingle({
  fileId: "cf3be453-f870-4b32-ab5a-73429cdb1a84",
  workspaceName: "aspernatur",
}, {
  httpBearer: "",
}).then((res: DeleteFileApiV1WorkspacesWorkspaceNameFilesFileIdDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.DeleteFileApiV1WorkspacesWorkspaceNameFilesFileIdDeleteRequest](../../models/operations/deletefileapiv1workspacesworkspacenamefilesfileiddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `security`                                                                                                                                                               | [operations.DeleteFileApiV1WorkspacesWorkspaceNameFilesFileIdDeleteSecurity](../../models/operations/deletefileapiv1workspacesworkspacenamefilesfileiddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                       | The security requirements to use for the request.                                                                                                                        |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.DeleteFileApiV1WorkspacesWorkspaceNameFilesFileIdDeleteResponse](../../models/operations/deletefileapiv1workspacesworkspacenamefilesfileiddeleteresponse.md)>**


## get

Retrieves the file contents.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetFileApiV1WorkspacesWorkspaceNameFilesFileIdGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.get({
  fileId: "2bb679d2-3227-415b-b0cb-b1e31b8b90f3",
  workspaceName: "dolore",
}, {
  httpBearer: "",
}).then((res: GetFileApiV1WorkspacesWorkspaceNameFilesFileIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.GetFileApiV1WorkspacesWorkspaceNameFilesFileIdGetRequest](../../models/operations/getfileapiv1workspacesworkspacenamefilesfileidgetrequest.md)   | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `security`                                                                                                                                                   | [operations.GetFileApiV1WorkspacesWorkspaceNameFilesFileIdGetSecurity](../../models/operations/getfileapiv1workspacesworkspacenamefilesfileidgetsecurity.md) | :heavy_check_mark:                                                                                                                                           | The security requirements to use for the request.                                                                                                            |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.GetFileApiV1WorkspacesWorkspaceNameFilesFileIdGetResponse](../../models/operations/getfileapiv1workspacesworkspacenamefilesfileidgetresponse.md)>**


## getDocument

Returns all documents generated for a file.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetDocumentApiV1WorkspacesWorkspaceNameFilesFileIdDocumentsGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.getDocument({
  fileId: "43a1108e-0adc-4f4b-9218-79fce953f73e",
  workspaceName: "tenetur",
}, {
  httpBearer: "",
}).then((res: GetDocumentApiV1WorkspacesWorkspaceNameFilesFileIdDocumentsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.GetDocumentApiV1WorkspacesWorkspaceNameFilesFileIdDocumentsGetRequest](../../models/operations/getdocumentapiv1workspacesworkspacenamefilesfileiddocumentsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `security`                                                                                                                                                                             | [operations.GetDocumentApiV1WorkspacesWorkspaceNameFilesFileIdDocumentsGetSecurity](../../models/operations/getdocumentapiv1workspacesworkspacenamefilesfileiddocumentsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                      |
| `config`                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                     | Available config options for making requests.                                                                                                                                          |


### Response

**Promise<[operations.GetDocumentApiV1WorkspacesWorkspaceNameFilesFileIdDocumentsGetResponse](../../models/operations/getdocumentapiv1workspacesworkspacenamefilesfileiddocumentsgetresponse.md)>**


## getMetaData

Displays the metadata of a file.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.getMetaData({
  fileId: "7fbc7abd-74dd-439c-8f5d-2cff7c70a456",
  workspaceName: "aspernatur",
}, {
  httpBearer: "",
}).then((res: GetFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                    | [operations.GetFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaGetRequest](../../models/operations/getfilemetaapiv1workspacesworkspacenamefilesfileidmetagetrequest.md)   | :heavy_check_mark:                                                                                                                                                           | The request object to use for the request.                                                                                                                                   |
| `security`                                                                                                                                                                   | [operations.GetFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaGetSecurity](../../models/operations/getfilemetaapiv1workspacesworkspacenamefilesfileidmetagetsecurity.md) | :heavy_check_mark:                                                                                                                                                           | The security requirements to use for the request.                                                                                                                            |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.GetFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaGetResponse](../../models/operations/getfilemetaapiv1workspacesworkspacenamefilesfileidmetagetresponse.md)>**


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
  afterFileId: "6d436813-f16d-49f5-bce6-c556146c3e25",
  afterValue: "eaque",
  content: "a",
  field: ListFilesApiV1WorkspacesWorkspaceNameFilesGetFieldField.Name,
  filter: "aut",
  limit: 11427,
  metaKey: "deleniti",
  metaValue: "impedit",
  name: "Mrs. Denise Tillman MD",
  order: ListFilesApiV1WorkspacesWorkspaceNameFilesGetOrderOrder.Desc,
  pageNumber: 810424,
  workspaceName: "velit",
}, {
  httpBearer: "",
}).then((res: ListFilesApiV1WorkspacesWorkspaceNameFilesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.ListFilesApiV1WorkspacesWorkspaceNameFilesGetRequest](../../models/operations/listfilesapiv1workspacesworkspacenamefilesgetrequest.md)   | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `security`                                                                                                                                           | [operations.ListFilesApiV1WorkspacesWorkspaceNameFilesGetSecurity](../../models/operations/listfilesapiv1workspacesworkspacenamefilesgetsecurity.md) | :heavy_check_mark:                                                                                                                                   | The security requirements to use for the request.                                                                                                    |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.ListFilesApiV1WorkspacesWorkspaceNameFilesGetResponse](../../models/operations/listfilesapiv1workspacesworkspacenamefilesgetresponse.md)>**


## updateMetaData

Updates the metadata of a file. You can modify existing metadata or add new ones. The metadata of the documents that were created
from this file will also be updated.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { UpdateFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaPutResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.file.updateMetaData({
  requestBody: {},
  fileId: "66c8dd6b-1442-4907-8747-78a7bd466d28",
  workspaceName: "quisquam",
}, {
  httpBearer: "",
}).then((res: UpdateFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.UpdateFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaPutRequest](../../models/operations/updatefilemetaapiv1workspacesworkspacenamefilesfileidmetaputrequest.md)   | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `security`                                                                                                                                                                         | [operations.UpdateFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaPutSecurity](../../models/operations/updatefilemetaapiv1workspacesworkspacenamefilesfileidmetaputsecurity.md) | :heavy_check_mark:                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                  |
| `config`                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                 | Available config options for making requests.                                                                                                                                      |


### Response

**Promise<[operations.UpdateFileMetaApiV1WorkspacesWorkspaceNameFilesFileIdMetaPutResponse](../../models/operations/updatefilemetaapiv1workspacesworkspacenamefilesfileidmetaputresponse.md)>**


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
      file: "veritatis",
      content: "ipsa".encode(),
    },
    meta: "id",
    text: "quidem",
  },
  fileName: "neque",
  workspaceName: "quo",
  writeMode: UploadFileApiV1WorkspacesWorkspaceNameFilesPostWriteModeFileWriteModeEnum.Fail,
}, {
  httpBearer: "",
}).then((res: UploadFileApiV1WorkspacesWorkspaceNameFilesPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.UploadFileApiV1WorkspacesWorkspaceNameFilesPostRequest](../../models/operations/uploadfileapiv1workspacesworkspacenamefilespostrequest.md)   | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `security`                                                                                                                                               | [operations.UploadFileApiV1WorkspacesWorkspaceNameFilesPostSecurity](../../models/operations/uploadfileapiv1workspacesworkspacenamefilespostsecurity.md) | :heavy_check_mark:                                                                                                                                       | The security requirements to use for the request.                                                                                                        |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.UploadFileApiV1WorkspacesWorkspaceNameFilesPostResponse](../../models/operations/uploadfileapiv1workspacesworkspacenamefilespostresponse.md)>**

