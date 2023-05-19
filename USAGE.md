<!-- Start SDK Example Usage -->
```typescript
import { Deepset } from "ds-test";
import { ListEvalRunsFieldField, ListEvalRunsOrderOrder, ListEvalRunsResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.list({
  after: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
  before: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
  field: ListEvalRunsFieldField.IntegratedRecallSingleHit,
  filter: "cum",
  limit: 456150,
  order: ListEvalRunsOrderOrder.Asc,
  pageNumber: 568434,
  select: "aspernatur",
  workspaceName: "perferendis",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ListEvalRunsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->