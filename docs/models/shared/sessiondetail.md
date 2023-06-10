# SessionDetail

Your upload sessions.


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `documentationUrl`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The URL to the documentation of the session.                                                  |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time when the session expires.                                                            |
| `ingestionStatus`                                                                             | [SessionDetailFileIngestionStatus](../../models/shared/sessiondetailfileingestionstatus.md)   | :heavy_check_mark:                                                                            | The status of the ingestion process for this file.                                            |
| `sessionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of a session.                                                               |