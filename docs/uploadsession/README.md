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
  sessionId: "ad4f9efc-1b45-412c-9032-648dc2f61519",
  workspaceName: "provident",
}, {
  httpBearer: "",
}).then((res: CloseSessionApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  workspaceName: "soluta",
}, {
  httpBearer: "",
}).then((res: CreateUploadSessionApiV1WorkspacesWorkspaceNameUploadSessionsPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  after: "fd0e9fe6-c632-4ca3-aed0-117996312fde",
  before: "04771778-ff61-4d01-b476-360a15db6a66",
  ingestionStatus: GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetIngestionStatusFileIngestionStatusEnum.Pending,
  limit: 431760,
  pageNumber: 374753,
  sessionId: "9a1adeaa-b585-41d6-8645-b08b61891baa",
  workspaceName: "voluptatem",
}, {
  httpBearer: "",
}).then((res: GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getStatus

Displays the details of a session. Use this endpoint to check the status of the files in a session or the session expiration date.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetSessionStatusApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.uploadSession.getStatus({
  sessionId: "fe1ade00-8e6f-48c5-b350-d8cdb5a34181",
  workspaceName: "tempora",
}, {
  httpBearer: "",
}).then((res: GetSessionStatusApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Returns a list of all active upload sessions.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListUploadSessionsApiV1WorkspacesWorkspaceNameUploadSessionsGetResponse } from "ds-test/dist/sdk/models/operations";
import { SessionFileWriteModeEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.uploadSession.list({
  after: "30104218-13d5-4208-ace7-e253b668451c",
  before: "6c6e205e-16de-4ab3-bec9-578a64584273",
  isExpired: false,
  limit: 681740,
  pageNumber: 514054,
  workspaceName: "incidunt",
}, {
  httpBearer: "",
}).then((res: ListUploadSessionsApiV1WorkspacesWorkspaceNameUploadSessionsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
