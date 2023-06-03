/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ApiToken } from "./apitoken";
import { DocumentStore } from "./documentstore";
import { EvalRun } from "./evalrun";
import { EvaluationSet } from "./evaluationset";
import { File } from "./file";
import { Health } from "./health";
import { ModelRegistryToken } from "./modelregistrytoken";
import { Models } from "./models";
import { Notebook } from "./notebook";
import { Organization } from "./organization";
import { Pipeline } from "./pipeline";
import { SearchSession } from "./searchsession";
import { SharedPrototype } from "./sharedprototype";
import { UploadSession } from "./uploadsession";
import { User } from "./user";
import { Workspace } from "./workspace";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.cloud.deepset.ai"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    sdkVersion = "1.8.0";
    genVersion = "2.35.3";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * deepset Cloud API description
 */
export class Deepset {
    public apiToken: ApiToken;
    public documentStore: DocumentStore;
    public evalRun: EvalRun;
    public evaluationSet: EvaluationSet;
    public file: File;
    public health: Health;
    public modelRegistryToken: ModelRegistryToken;
    public models: Models;
    public notebook: Notebook;
    public organization: Organization;
    public pipeline: Pipeline;
    public searchSession: SearchSession;
    public sharedPrototype: SharedPrototype;
    public uploadSession: UploadSession;
    public user: User;
    public workspace: Workspace;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.apiToken = new ApiToken(this.sdkConfiguration);
        this.documentStore = new DocumentStore(this.sdkConfiguration);
        this.evalRun = new EvalRun(this.sdkConfiguration);
        this.evaluationSet = new EvaluationSet(this.sdkConfiguration);
        this.file = new File(this.sdkConfiguration);
        this.health = new Health(this.sdkConfiguration);
        this.modelRegistryToken = new ModelRegistryToken(this.sdkConfiguration);
        this.models = new Models(this.sdkConfiguration);
        this.notebook = new Notebook(this.sdkConfiguration);
        this.organization = new Organization(this.sdkConfiguration);
        this.pipeline = new Pipeline(this.sdkConfiguration);
        this.searchSession = new SearchSession(this.sdkConfiguration);
        this.sharedPrototype = new SharedPrototype(this.sdkConfiguration);
        this.uploadSession = new UploadSession(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.workspace = new Workspace(this.sdkConfiguration);
    }
}
