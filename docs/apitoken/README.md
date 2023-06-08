# apiToken

### Available Operations

* [createToken](#createtoken) - Create Token
* [list](#list) - Get Tokens [private]
* [remove](#remove) - Remove Token [private]

## createToken

Creates the API key that you can use to connect deepset Cloud to your application.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { CreateTokenApiV1TokenPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.apiToken.createToken({
  expiresAt: new Date("2022-05-20T13:30:46.463Z"),
}, {
  httpBearer: "",
}).then((res: CreateTokenApiV1TokenPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Returns all API keys present in deepset Cloud together with their properties. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListTokensApiV1TokenGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.apiToken.list({
  after: "29396fea-7596-4eb1-8faa-a2352c595590",
  before: "7aff1a3a-2fa9-4467-b392-51aa52c3f5ad",
  limit: 13571,
  pageNumber: 97101,
}, {
  httpBearer: "",
}).then((res: ListTokensApiV1TokenGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## remove

Deletes the API key. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { RemoveTokenApiV1TokenApiTokenIdDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.apiToken.remove({
  apiTokenId: "9da1ffe7-8f09-47b0-874f-15471b5e6e13",
}, {
  httpBearer: "",
}).then((res: RemoveTokenApiV1TokenApiTokenIdDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
