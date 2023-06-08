# notebook

### Available Operations

* [create](#create) - Post Notebook [private]
* [getServerState](#getserverstate) - Get Jupyter Lab [private]
* [start](#start) - Start Jupyter Lab [private]

## create

Creates a Jupyter notebook on the Jupyter server. You must have a server ready to create a notebook. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { PostNotebookApiV1NotebookPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.notebook.create({
  requestBody: {
    "commodi": "sapiente",
    "dolores": "deserunt",
    "molestiae": "accusantium",
  },
  pipelineId: "c688282a-a482-4562-b222-e9817ee17cbe",
}, {
  httpBearer: "",
}).then((res: PostNotebookApiV1NotebookPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getServerState

Returns the state of the Jupyter lab server. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetJupyterLabApiV1NotebookServerGetResponse } from "ds-test/dist/sdk/models/operations";
import { ServerState, ServerType } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.notebook.getServerState({
  httpBearer: "",
}).then((res: GetJupyterLabApiV1NotebookServerGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## start

Opens the Jupyter lab. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { StartJupyterLabApiV1NotebookServerPostResponse } from "ds-test/dist/sdk/models/operations";
import { NotebookServerPostServerType } from "ds-test/dist/sdk/models/shared";

const sdk = new Deepset();

sdk.notebook.start({
  serverType: NotebookServerPostServerType.GpuServer,
}, {
  httpBearer: "",
}).then((res: StartJupyterLabApiV1NotebookServerPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
