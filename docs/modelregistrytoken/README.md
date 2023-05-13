# modelRegistryToken

### Available Operations

* [get](#get) - Get Token [private]
* [~~getTokenDeprecated~~](#gettokendeprecated) - Get Token Deprecated [private] :warning: **Deprecated**
* [list](#list) - Get Tokens [private]
* [remove](#remove) - Remove Token [private]
* [~~removeTokenDeprecated~~](#removetokendeprecated) - Remove Token Deprecated [private] :warning: **Deprecated**
* [save](#save) - Save Token [private]
* [~~saveTokenDeprecated~~](#savetokendeprecated) - Save Token Deprecated [private] :warning: **Deprecated**
* [update](#update) - Update Token [private]
* [~~updateTokenDeprecated~~](#updatetokendeprecated) - Update Token Deprecated [private] :warning: **Deprecated**

## get

Returns the model token. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  GetTokenApiV1ModelRegistryTokensProviderGetProviderModelProviderEnum,
  GetTokenApiV1ModelRegistryTokensProviderGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.get({
  provider: GetTokenApiV1ModelRegistryTokensProviderGetProviderModelProviderEnum.Huggingface,
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetTokenApiV1ModelRegistryTokensProviderGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~getTokenDeprecated~~

Returns the Hugging Face model token. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetTokenDeprecatedApiV1ModelRegistryTokenGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.getTokenDeprecated({
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: GetTokenDeprecatedApiV1ModelRegistryTokenGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Returns the model tokens. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListTokensApiV1ModelRegistryTokensGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.list({
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ListTokensApiV1ModelRegistryTokensGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## remove

Deletes the model token from deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  RemoveTokenApiV1ModelRegistryTokensProviderDeleteProviderModelProviderEnum,
  RemoveTokenApiV1ModelRegistryTokensProviderDeleteResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.remove({
  provider: RemoveTokenApiV1ModelRegistryTokensProviderDeleteProviderModelProviderEnum.Cohere,
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: RemoveTokenApiV1ModelRegistryTokensProviderDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~removeTokenDeprecated~~

Deletes the Hugging Face model token from deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.removeTokenDeprecated({
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## save

Imports your model token and saves it in deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  SaveTokenApiV1ModelRegistryTokensProviderPostProviderModelProviderEnum,
  SaveTokenApiV1ModelRegistryTokensProviderPostResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.save({
  createModelRegistryToken: {
    token: "quod",
  },
  provider: SaveTokenApiV1ModelRegistryTokensProviderPostProviderModelProviderEnum.Openai,
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: SaveTokenApiV1ModelRegistryTokensProviderPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~saveTokenDeprecated~~

Imports your Hugging Face model token and saves it in deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { SaveTokenDeprecatedApiV1ModelRegistryTokenPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.saveTokenDeprecated({
  token: "inventore",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: SaveTokenDeprecatedApiV1ModelRegistryTokenPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Replaces the current model token with a new one. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  UpdateTokenApiV1ModelRegistryTokensProviderPutProviderModelProviderEnum,
  UpdateTokenApiV1ModelRegistryTokensProviderPutResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.update({
  updateModelRegistryToken: {
    token: "nihil",
  },
  provider: UpdateTokenApiV1ModelRegistryTokensProviderPutProviderModelProviderEnum.Openai,
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: UpdateTokenApiV1ModelRegistryTokensProviderPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~updateTokenDeprecated~~

Replaces the current Hugging Face model token with a new one. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { UpdateTokenDeprecatedApiV1ModelRegistryTokenPutResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.updateTokenDeprecated({
  token: "accusamus",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: UpdateTokenDeprecatedApiV1ModelRegistryTokenPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
