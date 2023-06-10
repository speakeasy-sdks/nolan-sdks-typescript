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
  author: "tempora",
  nodeType: "debitis",
}, {
  httpBearer: "",
}).then((res: ListModelApiV1ModelGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListModelApiV1ModelGetRequest](../../models/operations/listmodelapiv1modelgetrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.ListModelApiV1ModelGetSecurity](../../models/operations/listmodelapiv1modelgetsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListModelApiV1ModelGetResponse](../../models/operations/listmodelapiv1modelgetresponse.md)>**

