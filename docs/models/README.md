# models

### Available Operations

* [list](#list) - Get Model [private]

## list

Returns a list of models available for the specified node_type. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListModelApiV1ModelGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.models.list({
  author: "aliquam",
  nodeType: "odio",
}, {
  httpBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
}).then((res: ListModelApiV1ModelGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
