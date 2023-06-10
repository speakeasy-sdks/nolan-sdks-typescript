# PipelineFieldSearchResult

Metadata for the pipeline's index.


## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `data`                                           | *string*[]                                       | :heavy_check_mark:                               | A list of fields that you searched for.          |
| `hasMore`                                        | *boolean*                                        | :heavy_check_mark:                               | Whether the paginated result has more results.   |
| `total`                                          | *number*                                         | :heavy_check_mark:                               | The total number of results matching your query. |