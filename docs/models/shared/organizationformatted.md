# OrganizationFormatted


## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `name`                                            | *string*                                          | :heavy_check_mark:                                | Unique name of an organization                    |
| `organizationId`                                  | *string*                                          | :heavy_check_mark:                                | Unique identifier of an organization              |
| `pricingPlan`                                     | *number*                                          | :heavy_minus_sign:                                | Pricing plan of an organization, between 0 and 3  |
| `role`                                            | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `workspaces`                                      | [EntityRole](../../models/shared/entityrole.md)[] | :heavy_check_mark:                                | N/A                                               |