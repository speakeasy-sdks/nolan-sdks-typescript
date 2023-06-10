# PipelineIndexingStatusDetail

Successful Response


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `failedFileCount`                                               | *number*                                                        | :heavy_check_mark:                                              | Files that failed during indexing                               |
| `indexedFileCount`                                              | *number*                                                        | :heavy_check_mark:                                              | Files that were successfully indexed.                           |
| `indexedNoDocumentsFileCount`                                   | *number*                                                        | :heavy_check_mark:                                              | Number of files that were indexed but did not create documents. |
| `pendingFileCount`                                              | *number*                                                        | :heavy_check_mark:                                              | The number of pending files to be indexed                       |
| `totalFileCount`                                                | *number*                                                        | :heavy_check_mark:                                              | The total number of files assigned to a pipeline.               |