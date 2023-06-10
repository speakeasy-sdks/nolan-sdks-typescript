# PaginatedSessionFile

Returns a list of files registered to the session.


## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `data`                                              | [SessionFile](../../models/shared/sessionfile.md)[] | :heavy_check_mark:                                  | N/A                                                 |
| `hasMore`                                           | *boolean*                                           | :heavy_check_mark:                                  | Whether the session has more files.                 |
| `total`                                             | *number*                                            | :heavy_check_mark:                                  | The total number of files in the session.           |