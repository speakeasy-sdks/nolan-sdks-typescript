# ListTokensApiV1TokenGetResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `httpValidationError`                                                    | [shared.HTTPValidationError](../../models/shared/httpvalidationerror.md) | :heavy_minus_sign:                                                       | Validation Error                                                         |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `rawResponse`                                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema)                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `tokenPagination`                                                        | [shared.TokenPagination](../../models/shared/tokenpagination.md)         | :heavy_minus_sign:                                                       | Successful Response                                                      |