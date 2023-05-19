# ds-test

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/nolan-sdks-typescript
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/nolan-sdks-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Deepset } from "ds-test";
import { ListEvalRunsFieldField, ListEvalRunsOrderOrder, ListEvalRunsResponse } from "ds-test/dist/sdk/models/operations";

const sdk = new Deepset();

sdk.evalRun.list({
  after: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
  before: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
  field: ListEvalRunsFieldField.IntegratedRecallSingleHit,
  filter: "cum",
  limit: 456150,
  order: ListEvalRunsOrderOrder.Asc,
  pageNumber: 568434,
  select: "aspernatur",
  workspaceName: "perferendis",
}, {
  httpBearer: "YOUR_BEARER_TOKEN_HERE",
}).then((res: ListEvalRunsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiToken](docs/apitoken/README.md)

* [createToken](docs/apitoken/README.md#createtoken) - Create Token
* [list](docs/apitoken/README.md#list) - Get Tokens [private]
* [remove](docs/apitoken/README.md#remove) - Remove Token [private]

### [documentStore](docs/documentstore/README.md)

* [checkConnection](docs/documentstore/README.md#checkconnection) - Check Connection [private]
* [countDocuments](docs/documentstore/README.md#countdocuments) - Count Documents Stream [private]
* [get](docs/documentstore/README.md#get) - Get Document [private]
* [listDocumentStreams](docs/documentstore/README.md#listdocumentstreams) - Get All Documents Stream
* [listDocuments](docs/documentstore/README.md#listdocuments) - Get All Documents [private]
* [search](docs/documentstore/README.md#search) - Query Documents Stream

### [evalRun](docs/evalrun/README.md)

* [createEvalRun](docs/evalrun/README.md#createevalrun) - Create Eval Run
* [createTag](docs/evalrun/README.md#createtag) - Create Tag [private]
* [delete](docs/evalrun/README.md#delete) - Delete Eval Run
* [deleteTag](docs/evalrun/README.md#deletetag) - Delete Tag [private]
* [get](docs/evalrun/README.md#get) - Get Eval Run
* [getNodeEvalPredictions](docs/evalrun/README.md#getnodeevalpredictions) - Get Node Eval Predictions
* [list](docs/evalrun/README.md#list) - Get Eval Runs
* [listTags](docs/evalrun/README.md#listtags) - Get Tags [private]
* [start](docs/evalrun/README.md#start) - Start Eval Run
* [update](docs/evalrun/README.md#update) - Edit Eval Run
* [updateTag](docs/evalrun/README.md#updatetag) - Update Tag [private]

### [evaluationSet](docs/evaluationset/README.md)

* [delete](docs/evaluationset/README.md#delete) - Delete Evaluation Set
* [get](docs/evaluationset/README.md#get) - Get Evaluation Set
* [getCsv](docs/evaluationset/README.md#getcsv) - Get Evaluation Set Csv File
* [importEvaluationSet](docs/evaluationset/README.md#importevaluationset) - Import Evaluation Set
* [list](docs/evaluationset/README.md#list) - Get Evaluation Sets
* [retrigger](docs/evaluationset/README.md#retrigger) - Retrigger Label Matching

### [file](docs/file/README.md)

* [deleteMulti](docs/file/README.md#deletemulti) - Delete Files
* [deleteSingle](docs/file/README.md#deletesingle) - Delete File
* [get](docs/file/README.md#get) - Get File
* [getDocument](docs/file/README.md#getdocument) - Get Document
* [getMetaData](docs/file/README.md#getmetadata) - Get File Meta
* [list](docs/file/README.md#list) - List Files
* [updateMetaData](docs/file/README.md#updatemetadata) - Update File Meta
* [upload](docs/file/README.md#upload) - Upload File

### [health](docs/health/README.md)

* [check](docs/health/README.md#check) - Health
* [getOpenapi](docs/health/README.md#getopenapi) - Redirect

### [modelRegistryToken](docs/modelregistrytoken/README.md)

* [get](docs/modelregistrytoken/README.md#get) - Get Token [private]
* [~~getTokenDeprecated~~](docs/modelregistrytoken/README.md#gettokendeprecated) - Get Token Deprecated [private] :warning: **Deprecated**
* [list](docs/modelregistrytoken/README.md#list) - Get Tokens [private]
* [remove](docs/modelregistrytoken/README.md#remove) - Remove Token [private]
* [~~removeTokenDeprecated~~](docs/modelregistrytoken/README.md#removetokendeprecated) - Remove Token Deprecated [private] :warning: **Deprecated**
* [save](docs/modelregistrytoken/README.md#save) - Save Token [private]
* [~~saveTokenDeprecated~~](docs/modelregistrytoken/README.md#savetokendeprecated) - Save Token Deprecated [private] :warning: **Deprecated**
* [update](docs/modelregistrytoken/README.md#update) - Update Token [private]
* [~~updateTokenDeprecated~~](docs/modelregistrytoken/README.md#updatetokendeprecated) - Update Token Deprecated [private] :warning: **Deprecated**

### [models](docs/models/README.md)

* [list](docs/models/README.md#list) - Get Model [private]

### [notebook](docs/notebook/README.md)

* [create](docs/notebook/README.md#create) - Post Notebook [private]
* [getServerState](docs/notebook/README.md#getserverstate) - Get Jupyter Lab [private]
* [start](docs/notebook/README.md#start) - Start Jupyter Lab [private]

### [organization](docs/organization/README.md)

* [get](docs/organization/README.md#get) - Get Organization [private]
* [invite](docs/organization/README.md#invite) - Invite User To Organization [private]

### [pipeline](docs/pipeline/README.md)

* [addFeedback](docs/pipeline/README.md#addfeedback) - Add Feedback
* [create](docs/pipeline/README.md#create) - Create Pipeline
* [delete](docs/pipeline/README.md#delete) - Delete Pipeline
* [deploy](docs/pipeline/README.md#deploy) - Deploy Pipeline
* [get](docs/pipeline/README.md#get) - Get Pipeline
* [getFeedback](docs/pipeline/README.md#getfeedback) - Get Pipeline Feedback
* [getFiles](docs/pipeline/README.md#getfiles) - Get Pipeline Files
* [getIndexing](docs/pipeline/README.md#getindexing) - Get Pipeline Indexing
* [getJson](docs/pipeline/README.md#getjson) - Get Pipeline Yaml As Json
* [getMetadata](docs/pipeline/README.md#getmetadata) - Get Pipeline Index Metadata [private]
* [getMetadataFieldValues](docs/pipeline/README.md#getmetadatafieldvalues) - Get Pipeline Metadata Field Values [private]
* [getMinMaxAggregationMetadata](docs/pipeline/README.md#getminmaxaggregationmetadata) - Get Pipeline Min Max Aggregation Metadata [private]
* [getStats](docs/pipeline/README.md#getstats) - Get Pipeline Stats
* [getYaml](docs/pipeline/README.md#getyaml) - Get Pipeline Yaml
* [list](docs/pipeline/README.md#list) - List Pipelines
* [search](docs/pipeline/README.md#search) - Search
* [searchHistory](docs/pipeline/README.md#searchhistory) - Pipeline Search History [private]
* [setDefault](docs/pipeline/README.md#setdefault) - Set Default Pipeline
* [undeploy](docs/pipeline/README.md#undeploy) - Undeploy Pipeline
* [updateYaml](docs/pipeline/README.md#updateyaml) - Update Pipeline Yaml

### [searchSession](docs/searchsession/README.md)

* [create](docs/searchsession/README.md#create) - Create Search Session [private]

### [sharedPrototype](docs/sharedprototype/README.md)

* [create](docs/sharedprototype/README.md#create) - Create Prototype [private]
* [createExternalUser](docs/sharedprototype/README.md#createexternaluser) - Create External User [private]
* [get](docs/sharedprototype/README.md#get) - Get Shared Prototype [private]
* [list](docs/sharedprototype/README.md#list) - List Prototypes [private]
* [revoke](docs/sharedprototype/README.md#revoke) - Revoke Shared Prototype [private]
* [update](docs/sharedprototype/README.md#update) - Edit Shared Prototype [private]

### [uploadSession](docs/uploadsession/README.md)

* [close](docs/uploadsession/README.md#close) - Close Session
* [create](docs/uploadsession/README.md#create) - Create Upload Session
* [getFiles](docs/uploadsession/README.md#getfiles) - Get Session Files
* [getStatus](docs/uploadsession/README.md#getstatus) - Get Session Status
* [list](docs/uploadsession/README.md#list) - Get Upload Sessions

### [user](docs/user/README.md)

* [delete](docs/user/README.md#delete) - Delete User [private]
* [get](docs/user/README.md#get) - Get User [private]
* [list](docs/user/README.md#list) - Get Users [private]
* [me](docs/user/README.md#me) - Read Users Me [private]
* [updatePermission](docs/user/README.md#updatepermission) - Update User Permission [private]

### [workspace](docs/workspace/README.md)

* [create](docs/workspace/README.md#create) - Create Workspace [private]
* [delete](docs/workspace/README.md#delete) - Delete Workspace [private]
* [get](docs/workspace/README.md#get) - Get Workspace [private]
* [getStats](docs/workspace/README.md#getstats) - Get Workspace Stats [private]
* [list](docs/workspace/README.md#list) - List Workspaces [private]
* [searchCount](docs/workspace/README.md#searchcount) - Search Count [private]
* [searchHistory](docs/workspace/README.md#searchhistory) - Search History [private]
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

