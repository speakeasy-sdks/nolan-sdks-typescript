/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Document } from "./document";
import { Expose, Type } from "class-transformer";

/**
 * Successful Response
 */
export class Documents extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Document })
    @Expose({ name: "data" })
    @Type(() => Document)
    data: Document[];

    /**
     * The total number of documents created for a file with the ID you specified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total: number;
}
