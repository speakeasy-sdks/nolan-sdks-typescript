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
  workspaceName: "fugiat",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: CreateSearchSessionApiV1WorkspacesWorkspaceNameSearchSessionsPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
