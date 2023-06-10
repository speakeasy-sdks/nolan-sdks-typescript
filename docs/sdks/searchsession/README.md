# searchSession

### Available Operations

* [create](#create) - Create Search Session [private]

## create

This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.searchSession.create({
  workspaceName: "rem",
}, {
  httpBearer: "",
}).then((res: CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostRequest](../../models/operations/createsearchsessionapiv1workspacesworkspacenamesearchsessionspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `security`                                                                                                                                                                                   | [operations.CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostSecurity](../../models/operations/createsearchsessionapiv1workspacesworkspacenamesearchsessionspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                            |
| `config`                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                |


### Response

**Promise<[operations.CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostResponse](../../models/operations/createsearchsessionapiv1workspacesworkspacenamesearchsessionspostresponse.md)>**

