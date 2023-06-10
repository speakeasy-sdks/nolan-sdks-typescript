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
  emptyClass: {},
  pipelineId: "523c7e0b-c717-48e4-b96f-2a70c688282a",
}, {
  httpBearer: "",
}).then((res: PostNotebookApiV1NotebookPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostNotebookApiV1NotebookPostRequest](../../models/operations/postnotebookapiv1notebookpostrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.PostNotebookApiV1NotebookPostSecurity](../../models/operations/postnotebookapiv1notebookpostsecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostNotebookApiV1NotebookPostResponse](../../models/operations/postnotebookapiv1notebookpostresponse.md)>**


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

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                       | [operations.GetJupyterLabApiV1NotebookServerGetSecurity](../../models/operations/getjupyterlabapiv1notebookservergetsecurity.md) | :heavy_check_mark:                                                                                                               | The security requirements to use for the request.                                                                                |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetJupyterLabApiV1NotebookServerGetResponse](../../models/operations/getjupyterlabapiv1notebookservergetresponse.md)>**


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

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [shared.NotebookServerPost](../../models/shared/notebookserverpost.md)                                                                 | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `security`                                                                                                                             | [operations.StartJupyterLabApiV1NotebookServerPostSecurity](../../models/operations/startjupyterlabapiv1notebookserverpostsecurity.md) | :heavy_check_mark:                                                                                                                     | The security requirements to use for the request.                                                                                      |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.StartJupyterLabApiV1NotebookServerPostResponse](../../models/operations/startjupyterlabapiv1notebookserverpostresponse.md)>**

