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
import { CloseSessionSessionCloseStatusEnumEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.uploadSession.close({
  closeSession: {
    status: CloseSessionSessionCloseStatusEnumEnum.Closed,
  },
  sessionId: "d4f9efc1-b451-42c1-8326-48dc2f615199",
  workspaceName: "earum",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
import { CreateSessionFileWriteModeEnumEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.uploadSession.create({
  createSession: {
    writeMode: CreateSessionFileWriteModeEnumEnum.Fail,
  },
  workspaceName: "hic",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetIngestionStatusFileIngestionStatusEnumEnum,
  GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetResponse,
} from "ds-test/dist/sdk/models/operations";
import {
  SessionFileFileIngestionStatusEnumEnum,
  SessionFileFileIngestionStatusReasonEnumEnum,
} from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.uploadSession.getFiles({
  after: "d0e9fe6c-632c-4a3a-ad01-17996312fde0",
  before: "4771778f-f61d-4017-8763-60a15db6a660",
  ingestionStatus: GetSessionFilesApiV1WorkspacesWorkspaceNameUploadSessionsSessionIdFilesGetIngestionStatusFileIngestionStatusEnumEnum.Failed,
  limit: 374753,
  pageNumber: 614528,
  sessionId: "a1adeaab-5851-4d6c-a45b-08b61891baa0",
  workspaceName: "sapiente",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
  sessionId: "e1ade008-e6f8-4c5f-b50d-8cdb5a341814",
  workspaceName: "dolor",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
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
import { SessionFileWriteModeEnumEnum } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.uploadSession.list({
  after: "01042181-3d52-408e-8e7e-253b668451c6",
  before: "c6e205e1-6dea-4b3f-ac95-78a64584273a",
  isExpired: false,
  limit: 514054,
  pageNumber: 277340,
  workspaceName: "quasi",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: ListUploadSessionsApiV1WorkspacesWorkspaceNameUploadSessionsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
