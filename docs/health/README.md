# health

### Available Operations

* [check](#check) - Health
* [getOpenapi](#getopenapi) - Redirect

## check

Checks if the API works correctly.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { HealthHealthGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.health.check().then((res: HealthHealthGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOpenapi

Opens the documentation in Open API.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { RedirectGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.health.getOpenapi().then((res: RedirectGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
