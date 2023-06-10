# GetUserApiV1UsersUserIdGetResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `httpValidationError`                                                    | [shared.HTTPValidationError](../../models/shared/httpvalidationerror.md) | :heavy_minus_sign:                                                       | Validation Error                                                         |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `rawResponse`                                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema)                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `user`                                                                   | [shared.User](../../models/shared/user.md)                               | :heavy_minus_sign:                                                       | Successful Response                                                      |