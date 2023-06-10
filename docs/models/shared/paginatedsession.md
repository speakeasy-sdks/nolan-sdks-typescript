# PaginatedSession

Your upload sessions.


## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `data`                                      | [Session](../../models/shared/session.md)[] | :heavy_check_mark:                          | N/A                                         |
| `hasMore`                                   | *boolean*                                   | :heavy_check_mark:                          | Whether the session has more files.         |
| `total`                                     | *number*                                    | :heavy_check_mark:                          | The total number of files in the session.   |