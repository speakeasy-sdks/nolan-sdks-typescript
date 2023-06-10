# uploadSession

### Available Operations

* [close](#close) - Close Session
* [create](#create) - Create Upload Session
* [getFiles](#getfiles) - Get Session Files
* [getStatus](#getstatus) - Get Session Status
* [list](#list) - Get Upload Sessions

## close

Closes the session and starts the ingestion process.
If the session is not closed explicitly, the session will be automatically closed after 24 hours.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CloseSessionApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdPutResponse } from "ds-test/dist/sdk/models/operations";
import { CloseSessionSessionCloseStatusEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.uploadSession.close({
  closeSession: {
    status: CloseSessionSessionCloseStatusEnum.Closed,
  },
  sessionId: "e94764a3-e865-4e79-96f9-251a5a9da660",
  workspaceName: "repellat",
}, {
  httpBearer: "",
}).then((res: CloseSessionApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.CloseSessionApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdPutRequest](../../models/operations/closesessionapiv1workspacesworkspacenameuploadsessionssessionidputrequest.md)   | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `security`                                                                                                                                                                                     | [operations.CloseSessionApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdPutSecurity](../../models/operations/closesessionapiv1workspacesworkspacenameuploadsessionssessionidputsecurity.md) | :heavy_check_mark:                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                              |
| `config`                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                  |


### Response

**Promise<[operations.CloseSessionApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdPutResponse](../../models/operations/closesessionapiv1workspacesworkspacenameuploadsessionssessionidputresponse.md)>**


## create

Creates a session for uploading files and file metadata. The session remains active for 24 hours. You can upload up to 10 000 files in a session.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreateUploadSessionApiV1WorkspacesWorkspaceNameUploadSessionsPostResponse } from "ds-test/dist/sdk/models/operations";
import { CreateSessionFileWriteModeEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.uploadSession.create({
  createSession: {
    writeMode: CreateSessionFileWriteModeEnum.Fail,
  },
  workspaceName: "ullam",
}, {
  httpBearer: "",
}).then((res: CreateUploadSessionApiV1WorkspacesWorkspaceNameUploadSessionsPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.CreateUploadSessionApiV1WorkspacesWorkspaceNameUploadSessionsPostRequest](../../models/operations/createuploadsessionapiv1workspacesworkspacenameuploadsessionspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `security`                                                                                                                                                                                   | [operations.CreateUploadSessionApiV1WorkspacesWorkspaceNameUploadSessionsPostSecurity](../../models/operations/createuploadsessionapiv1workspacesworkspacenameuploadsessionspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                            |
| `config`                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                |


### Response

**Promise<[operations.CreateUploadSessionApiV1WorkspacesWorkspaceNameUploadSessionsPostResponse](../../models/operations/createuploadsessionapiv1workspacesworkspacenameuploadsessionspostresponse.md)>**


## getFiles

Displays the file details of a session. Use this endpoint to check the status of the files in a session or the session expiration date.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetIngestionStatusFileIngestionStatusEnum,
  GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetResponse,
} from "ds-test/dist/sdk/models/operations";
import { SessionFileFileIngestionStatusEnum, SessionFileFileIngestionStatusReasonEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.uploadSession.getFiles({
  after: "7bfaad4f-9efc-41b4-912c-1032648dc2f6",
  before: "15199ebf-d0e9-4fe6-8632-ca3aed011799",
  ingestionStatus: GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetIngestionStatusFileIngestionStatusEnum.Failed,
  limit: 241557,
  pageNumber: 96562,
  sessionId: "2fde0477-1778-4ff6-9d01-7476360a15db",
  workspaceName: "aliquid",
}, {
  httpBearer: "",
}).then((res: GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetRequest](../../models/operations/getsessionfilesapiv1workspacesworkspacenameuploadsessionssessionidfilesgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `security`                                                                                                                                                                                                     | [operations.GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetSecurity](../../models/operations/getsessionfilesapiv1workspacesworkspacenameuploadsessionssessionidfilesgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                              |
| `config`                                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                                  |


### Response

**Promise<[operations.GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetResponse](../../models/operations/getsessionfilesapiv1workspacesworkspacenameuploadsessionssessionidfilesgetresponse.md)>**


## getStatus

Displays the details of a session. Use this endpoint to check the status of the files in a session or the session expiration date.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetSessionStatusApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.uploadSession.getStatus({
  sessionId: "a660659a-1ade-4aab-9851-d6c645b08b61",
  workspaceName: "voluptatum",
}, {
  httpBearer: "",
}).then((res: GetSessionStatusApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                              | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                              | [operations.GetSessionStatusApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdGetRequest](../../models/operations/getsessionstatusapiv1workspacesworkspacenameuploadsessionssessionidgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                             |
| `security`                                                                                                                                                                                             | [operations.GetSessionStatusApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdGetSecurity](../../models/operations/getsessionstatusapiv1workspacesworkspacenameuploadsessionssessionidgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                                      |
| `config`                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                          |


### Response

**Promise<[operations.GetSessionStatusApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdGetResponse](../../models/operations/getsessionstatusapiv1workspacesworkspacenameuploadsessionssessionidgetresponse.md)>**


## list

Returns a list of all active upload sessions.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListUploadSessionsApiV1WorkspacesWorkspaceNameUploadSessionsGetResponse } from "ds-test/dist/sdk/models/operations";
import { SessionFileWriteModeEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.uploadSession.list({
  after: "91baa0fe-1ade-4008-a6f8-c5f350d8cdb5",
  before: "a3418143-0104-4218-93d5-208ece7e253b",
  isExpired: false,
  limit: 432984,
  pageNumber: 426943,
  workspaceName: "voluptatum",
}, {
  httpBearer: "",
}).then((res: ListUploadSessionsApiV1WorkspacesWorkspaceNameUploadSessionsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.ListUploadSessionsApiV1WorkspacesWorkspaceNameUploadSessionsGetRequest](../../models/operations/listuploadsessionsapiv1workspacesworkspacenameuploadsessionsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `security`                                                                                                                                                                               | [operations.ListUploadSessionsApiV1WorkspacesWorkspaceNameUploadSessionsGetSecurity](../../models/operations/listuploadsessionsapiv1workspacesworkspacenameuploadsessionsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                        |
| `config`                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                       | Available config options for making requests.                                                                                                                                            |


### Response

**Promise<[operations.ListUploadSessionsApiV1WorkspacesWorkspaceNameUploadSessionsGetResponse](../../models/operations/listuploadsessionsapiv1workspacesworkspacenameuploadsessionsgetresponse.md)>**

