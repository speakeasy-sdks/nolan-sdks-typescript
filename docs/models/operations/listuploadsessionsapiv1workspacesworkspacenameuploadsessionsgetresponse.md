# ListUploadSessionsApiV1WorkspacesWorkspaceNameUploadSessionsGetResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `httpValidationError`                                                    | [shared.HTTPValidationError](../../models/shared/httpvalidationerror.md) | :heavy_minus_sign:                                                       | Validation Error                                                         |
| `paginatedSession`                                                       | [shared.PaginatedSession](../../models/shared/paginatedsession.md)       | :heavy_minus_sign:                                                       | Your upload sessions.                                                    |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `rawResponse`                                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema)                 | :heavy_minus_sign:                                                       | N/A                                                                      |