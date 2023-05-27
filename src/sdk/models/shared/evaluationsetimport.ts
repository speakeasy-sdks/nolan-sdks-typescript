/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Returns the name of the imported evaluation set.
 */
export class EvaluationSetImport extends SpeakeasyBase {
    /**
     * Which evaluation set do you want to use? Type its name here.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}
