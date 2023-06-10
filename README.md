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
  httpBearer: "",
}).then((res: ListEvalRunsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiToken](docs/sdks/apitoken/README.md)

* [createToken](docs/sdks/apitoken/README.md#createtoken) - Create Token
* [list](docs/sdks/apitoken/README.md#list) - Get Tokens [private]
* [remove](docs/sdks/apitoken/README.md#remove) - Remove Token [private]

### [documentStore](docs/sdks/documentstore/README.md)

* [checkConnection](docs/sdks/documentstore/README.md#checkconnection) - Check Connection [private]
* [countDocuments](docs/sdks/documentstore/README.md#countdocuments) - Count Documents Stream [private]
* [get](docs/sdks/documentstore/README.md#get) - Get Document [private]
* [listDocumentStreams](docs/sdks/documentstore/README.md#listdocumentstreams) - Get All Documents Stream
* [listDocuments](docs/sdks/documentstore/README.md#listdocuments) - Get All Documents [private]
* [search](docs/sdks/documentstore/README.md#search) - Query Documents Stream

### [evalRun](docs/sdks/evalrun/README.md)

* [createEvalRun](docs/sdks/evalrun/README.md#createevalrun) - Create Eval Run
* [createTag](docs/sdks/evalrun/README.md#createtag) - Create Tag [private]
* [delete](docs/sdks/evalrun/README.md#delete) - Delete Eval Run
* [deleteTag](docs/sdks/evalrun/README.md#deletetag) - Delete Tag [private]
* [get](docs/sdks/evalrun/README.md#get) - Get Eval Run
* [getNodeEvalPredictions](docs/sdks/evalrun/README.md#getnodeevalpredictions) - Get Node Eval Predictions
* [list](docs/sdks/evalrun/README.md#list) - Get Eval Runs
* [listTags](docs/sdks/evalrun/README.md#listtags) - Get Tags [private]
* [start](docs/sdks/evalrun/README.md#start) - Start Eval Run
* [update](docs/sdks/evalrun/README.md#update) - Edit Eval Run
* [updateTag](docs/sdks/evalrun/README.md#updatetag) - Update Tag [private]

### [evaluationSet](docs/sdks/evaluationset/README.md)

* [delete](docs/sdks/evaluationset/README.md#delete) - Delete Evaluation Set
* [get](docs/sdks/evaluationset/README.md#get) - Get Evaluation Set
* [getCsv](docs/sdks/evaluationset/README.md#getcsv) - Get Evaluation Set Csv File
* [importEvaluationSet](docs/sdks/evaluationset/README.md#importevaluationset) - Import Evaluation Set
* [list](docs/sdks/evaluationset/README.md#list) - Get Evaluation Sets
* [retrigger](docs/sdks/evaluationset/README.md#retrigger) - Retrigger Label Matching

### [file](docs/sdks/file/README.md)

* [deleteMulti](docs/sdks/file/README.md#deletemulti) - Delete Files
* [deleteSingle](docs/sdks/file/README.md#deletesingle) - Delete File
* [get](docs/sdks/file/README.md#get) - Get File
* [getDocument](docs/sdks/file/README.md#getdocument) - Get Document
* [getMetaData](docs/sdks/file/README.md#getmetadata) - Get File Meta
* [list](docs/sdks/file/README.md#list) - List Files
* [updateMetaData](docs/sdks/file/README.md#updatemetadata) - Update File Meta
* [upload](docs/sdks/file/README.md#upload) - Upload File

### [health](docs/sdks/health/README.md)

* [check](docs/sdks/health/README.md#check) - Health
* [getOpenapi](docs/sdks/health/README.md#getopenapi) - Redirect

### [modelRegistryToken](docs/sdks/modelregistrytoken/README.md)

* [get](docs/sdks/modelregistrytoken/README.md#get) - Get Token [private]
* [~~getTokenDeprecated~~](docs/sdks/modelregistrytoken/README.md#gettokendeprecated) - Get Token Deprecated [private] :warning: **Deprecated**
* [list](docs/sdks/modelregistrytoken/README.md#list) - Get Tokens [private]
* [remove](docs/sdks/modelregistrytoken/README.md#remove) - Remove Token [private]
* [~~removeTokenDeprecated~~](docs/sdks/modelregistrytoken/README.md#removetokendeprecated) - Remove Token Deprecated [private] :warning: **Deprecated**
* [save](docs/sdks/modelregistrytoken/README.md#save) - Save Token [private]
* [~~saveTokenDeprecated~~](docs/sdks/modelregistrytoken/README.md#savetokendeprecated) - Save Token Deprecated [private] :warning: **Deprecated**
* [update](docs/sdks/modelregistrytoken/README.md#update) - Update Token [private]
* [~~updateTokenDeprecated~~](docs/sdks/modelregistrytoken/README.md#updatetokendeprecated) - Update Token Deprecated [private] :warning: **Deprecated**

### [models](docs/sdks/models/README.md)

* [list](docs/sdks/models/README.md#list) - Get Model [private]

### [notebook](docs/sdks/notebook/README.md)

* [create](docs/sdks/notebook/README.md#create) - Post Notebook [private]
* [getServerState](docs/sdks/notebook/README.md#getserverstate) - Get Jupyter Lab [private]
* [start](docs/sdks/notebook/README.md#start) - Start Jupyter Lab [private]

### [organization](docs/sdks/organization/README.md)

* [get](docs/sdks/organization/README.md#get) - Get Organization [private]
* [invite](docs/sdks/organization/README.md#invite) - Invite User To Organization [private]

### [pipeline](docs/sdks/pipeline/README.md)

* [addFeedback](docs/sdks/pipeline/README.md#addfeedback) - Add Feedback
* [create](docs/sdks/pipeline/README.md#create) - Create Pipeline
* [delete](docs/sdks/pipeline/README.md#delete) - Delete Pipeline
* [deploy](docs/sdks/pipeline/README.md#deploy) - Deploy Pipeline
* [get](docs/sdks/pipeline/README.md#get) - Get Pipeline
* [getFeedback](docs/sdks/pipeline/README.md#getfeedback) - Get Pipeline Feedback
* [getFiles](docs/sdks/pipeline/README.md#getfiles) - Get Pipeline Files
* [getIndexing](docs/sdks/pipeline/README.md#getindexing) - Get Pipeline Indexing
* [getJson](docs/sdks/pipeline/README.md#getjson) - Get Pipeline Yaml As Json
* [getMetadata](docs/sdks/pipeline/README.md#getmetadata) - Get Pipeline Index Metadata [private]
* [getMetadataFieldValues](docs/sdks/pipeline/README.md#getmetadatafieldvalues) - Get Pipeline Metadata Field Values [private]
* [getMinMaxAggregationMetadata](docs/sdks/pipeline/README.md#getminmaxaggregationmetadata) - Get Pipeline Min Max Aggregation Metadata [private]
* [getStats](docs/sdks/pipeline/README.md#getstats) - Get Pipeline Stats
* [getYaml](docs/sdks/pipeline/README.md#getyaml) - Get Pipeline Yaml
* [list](docs/sdks/pipeline/README.md#list) - List Pipelines
* [search](docs/sdks/pipeline/README.md#search) - Search
* [searchHistory](docs/sdks/pipeline/README.md#searchhistory) - Pipeline Search History [private]
* [setDefault](docs/sdks/pipeline/README.md#setdefault) - Set Default Pipeline
* [undeploy](docs/sdks/pipeline/README.md#undeploy) - Undeploy Pipeline
* [updateYaml](docs/sdks/pipeline/README.md#updateyaml) - Update Pipeline Yaml

### [searchSession](docs/sdks/searchsession/README.md)

* [create](docs/sdks/searchsession/README.md#create) - Create Search Session [private]

### [sharedPrototype](docs/sdks/sharedprototype/README.md)

* [create](docs/sdks/sharedprototype/README.md#create) - Create Prototype [private]
* [createExternalUser](docs/sdks/sharedprototype/README.md#createexternaluser) - Create External User [private]
* [get](docs/sdks/sharedprototype/README.md#get) - Get Shared Prototype [private]
* [list](docs/sdks/sharedprototype/README.md#list) - List Prototypes [private]
* [revoke](docs/sdks/sharedprototype/README.md#revoke) - Revoke Shared Prototype [private]
* [update](docs/sdks/sharedprototype/README.md#update) - Edit Shared Prototype [private]

### [uploadSession](docs/sdks/uploadsession/README.md)

* [close](docs/sdks/uploadsession/README.md#close) - Close Session
* [create](docs/sdks/uploadsession/README.md#create) - Create Upload Session
* [getFiles](docs/sdks/uploadsession/README.md#getfiles) - Get Session Files
* [getStatus](docs/sdks/uploadsession/README.md#getstatus) - Get Session Status
* [list](docs/sdks/uploadsession/README.md#list) - Get Upload Sessions

### [user](docs/sdks/user/README.md)

* [delete](docs/sdks/user/README.md#delete) - Delete User [private]
* [get](docs/sdks/user/README.md#get) - Get User [private]
* [list](docs/sdks/user/README.md#list) - Get Users [private]
* [me](docs/sdks/user/README.md#me) - Read Users Me [private]
* [updatePermission](docs/sdks/user/README.md#updatepermission) - Update User Permission [private]

### [workspace](docs/sdks/workspace/README.md)

* [create](docs/sdks/workspace/README.md#create) - Create Workspace [private]
* [delete](docs/sdks/workspace/README.md#delete) - Delete Workspace [private]
* [get](docs/sdks/workspace/README.md#get) - Get Workspace [private]
* [getStats](docs/sdks/workspace/README.md#getstats) - Get Workspace Stats [private]
* [list](docs/sdks/workspace/README.md#list) - List Workspaces [private]
* [searchCount](docs/sdks/workspace/README.md#searchcount) - Search Count [private]
* [searchHistory](docs/sdks/workspace/README.md#searchhistory) - Search History [private]
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

