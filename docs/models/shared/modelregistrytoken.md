# ModelRegistryToken

Successful Response


## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `invalid`                                         | *boolean*                                         | :heavy_check_mark:                                | Signals whether the token is invalid.             |
| `modelRegistryTokenId`                            | *string*                                          | :heavy_check_mark:                                | Unique identifier of the model registry token     |
| `provider`                                        | *string*                                          | :heavy_check_mark:                                | Model provider, for example huggingface           |
| `providerDomain`                                  | *string*                                          | :heavy_check_mark:                                | Model provider domain, for example huggingface.co |