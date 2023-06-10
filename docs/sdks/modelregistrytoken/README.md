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
  GetTokenApiV1ModelRegistryTokensProviderGetProviderModelProvider,
  GetTokenApiV1ModelRegistryTokensProviderGetResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.get({
  provider: GetTokenApiV1ModelRegistryTokensProviderGetProviderModelProvider.Cohere,
}, {
  httpBearer: "",
}).then((res: GetTokenApiV1ModelRegistryTokensProviderGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.GetTokenApiV1ModelRegistryTokensProviderGetRequest](../../models/operations/gettokenapiv1modelregistrytokensprovidergetrequest.md)   | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `security`                                                                                                                                       | [operations.GetTokenApiV1ModelRegistryTokensProviderGetSecurity](../../models/operations/gettokenapiv1modelregistrytokensprovidergetsecurity.md) | :heavy_check_mark:                                                                                                                               | The security requirements to use for the request.                                                                                                |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetTokenApiV1ModelRegistryTokensProviderGetResponse](../../models/operations/gettokenapiv1modelregistrytokensprovidergetresponse.md)>**


## ~~getTokenDeprecated~~

Returns the Hugging Face model token. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { GetTokenDeprecatedApiV1ModelRegistryTokenGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.getTokenDeprecated({
  httpBearer: "",
}).then((res: GetTokenDeprecatedApiV1ModelRegistryTokenGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                                         | [operations.GetTokenDeprecatedApiV1ModelRegistryTokenGetSecurity](../../models/operations/gettokendeprecatedapiv1modelregistrytokengetsecurity.md) | :heavy_check_mark:                                                                                                                                 | The security requirements to use for the request.                                                                                                  |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetTokenDeprecatedApiV1ModelRegistryTokenGetResponse](../../models/operations/gettokendeprecatedapiv1modelregistrytokengetresponse.md)>**


## list

Returns the model tokens. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { ListTokensApiV1ModelRegistryTokensGetResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.list({
  httpBearer: "",
}).then((res: ListTokensApiV1ModelRegistryTokensGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                           | [operations.ListTokensApiV1ModelRegistryTokensGetSecurity](../../models/operations/listtokensapiv1modelregistrytokensgetsecurity.md) | :heavy_check_mark:                                                                                                                   | The security requirements to use for the request.                                                                                    |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.ListTokensApiV1ModelRegistryTokensGetResponse](../../models/operations/listtokensapiv1modelregistrytokensgetresponse.md)>**


## remove

Deletes the model token from deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  RemoveTokenApiV1ModelRegistryTokensProviderDeleteProviderModelProvider,
  RemoveTokenApiV1ModelRegistryTokensProviderDeleteResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.remove({
  provider: RemoveTokenApiV1ModelRegistryTokensProviderDeleteProviderModelProvider.Cohere,
}, {
  httpBearer: "",
}).then((res: RemoveTokenApiV1ModelRegistryTokensProviderDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.RemoveTokenApiV1ModelRegistryTokensProviderDeleteRequest](../../models/operations/removetokenapiv1modelregistrytokensproviderdeleterequest.md)   | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `security`                                                                                                                                                   | [operations.RemoveTokenApiV1ModelRegistryTokensProviderDeleteSecurity](../../models/operations/removetokenapiv1modelregistrytokensproviderdeletesecurity.md) | :heavy_check_mark:                                                                                                                                           | The security requirements to use for the request.                                                                                                            |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.RemoveTokenApiV1ModelRegistryTokensProviderDeleteResponse](../../models/operations/removetokenapiv1modelregistrytokensproviderdeleteresponse.md)>**


## ~~removeTokenDeprecated~~

Deletes the Hugging Face model token from deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.removeTokenDeprecated({
  httpBearer: "",
}).then((res: RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                                                     | [operations.RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteSecurity](../../models/operations/removetokendeprecatedapiv1modelregistrytokendeletesecurity.md) | :heavy_check_mark:                                                                                                                                             | The security requirements to use for the request.                                                                                                              |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.RemoveTokenDeprecatedApiV1ModelRegistryTokenDeleteResponse](../../models/operations/removetokendeprecatedapiv1modelregistrytokendeleteresponse.md)>**


## save

Imports your model token and saves it in deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  SaveTokenApiV1ModelRegistryTokensProviderPostProviderModelProvider,
  SaveTokenApiV1ModelRegistryTokensProviderPostResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.save({
  createModelRegistryToken: {
    token: "eius",
  },
  provider: SaveTokenApiV1ModelRegistryTokensProviderPostProviderModelProvider.Huggingface,
}, {
  httpBearer: "",
}).then((res: SaveTokenApiV1ModelRegistryTokensProviderPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.SaveTokenApiV1ModelRegistryTokensProviderPostRequest](../../models/operations/savetokenapiv1modelregistrytokensproviderpostrequest.md)   | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `security`                                                                                                                                           | [operations.SaveTokenApiV1ModelRegistryTokensProviderPostSecurity](../../models/operations/savetokenapiv1modelregistrytokensproviderpostsecurity.md) | :heavy_check_mark:                                                                                                                                   | The security requirements to use for the request.                                                                                                    |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.SaveTokenApiV1ModelRegistryTokensProviderPostResponse](../../models/operations/savetokenapiv1modelregistrytokensproviderpostresponse.md)>**


## ~~saveTokenDeprecated~~

Imports your Hugging Face model token and saves it in deepset Cloud. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { SaveTokenDeprecatedApiV1ModelRegistryTokenPostResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.saveTokenDeprecated({
  token: "voluptas",
}, {
  httpBearer: "",
}).then((res: SaveTokenDeprecatedApiV1ModelRegistryTokenPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [shared.CreateModelRegistryToken](../../models/shared/createmodelregistrytoken.md)                                                                     | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `security`                                                                                                                                             | [operations.SaveTokenDeprecatedApiV1ModelRegistryTokenPostSecurity](../../models/operations/savetokendeprecatedapiv1modelregistrytokenpostsecurity.md) | :heavy_check_mark:                                                                                                                                     | The security requirements to use for the request.                                                                                                      |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.SaveTokenDeprecatedApiV1ModelRegistryTokenPostResponse](../../models/operations/savetokendeprecatedapiv1modelregistrytokenpostresponse.md)>**


## update

Replaces the current model token with a new one. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import {
  UpdateTokenApiV1ModelRegistryTokensProviderPutProviderModelProvider,
  UpdateTokenApiV1ModelRegistryTokensProviderPutResponse,
} from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.update({
  updateModelRegistryToken: {
    token: "ab",
  },
  provider: UpdateTokenApiV1ModelRegistryTokensProviderPutProviderModelProvider.Openai,
}, {
  httpBearer: "",
}).then((res: UpdateTokenApiV1ModelRegistryTokensProviderPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.UpdateTokenApiV1ModelRegistryTokensProviderPutRequest](../../models/operations/updatetokenapiv1modelregistrytokensproviderputrequest.md)   | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `security`                                                                                                                                             | [operations.UpdateTokenApiV1ModelRegistryTokensProviderPutSecurity](../../models/operations/updatetokenapiv1modelregistrytokensproviderputsecurity.md) | :heavy_check_mark:                                                                                                                                     | The security requirements to use for the request.                                                                                                      |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.UpdateTokenApiV1ModelRegistryTokensProviderPutResponse](../../models/operations/updatetokenapiv1modelregistrytokensproviderputresponse.md)>**


## ~~updateTokenDeprecated~~

Replaces the current Hugging Face model token with a new one. This is an endpoint we use internally. This means it can change anytime so bear this in mind if you want to use it.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Deepset } from "ds-test";
import { UpdateTokenDeprecatedApiV1ModelRegistryTokenPutResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.modelRegistryToken.updateTokenDeprecated({
  token: "consequatur",
}, {
  httpBearer: "",
}).then((res: UpdateTokenDeprecatedApiV1ModelRegistryTokenPutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [shared.UpdateModelRegistryToken](../../models/shared/updatemodelregistrytoken.md)                                                                       | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `security`                                                                                                                                               | [operations.UpdateTokenDeprecatedApiV1ModelRegistryTokenPutSecurity](../../models/operations/updatetokendeprecatedapiv1modelregistrytokenputsecurity.md) | :heavy_check_mark:                                                                                                                                       | The security requirements to use for the request.                                                                                                        |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.UpdateTokenDeprecatedApiV1ModelRegistryTokenPutResponse](../../models/operations/updatetokendeprecatedapiv1modelregistrytokenputresponse.md)>**

