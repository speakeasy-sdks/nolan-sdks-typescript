/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LabelWithPrediction } from "./labelwithprediction";
import { Expose, Transform, Type } from "class-transformer";

/**
 * An enumeration.
 */
export enum AnswerEvalNodePredictionEvaluationMode {
    Isolated = "ISOLATED",
    Integrated = "INTEGRATED",
}

/**
 * Filters which were used for the evaluation of the query.
 */
export class AnswerEvalNodePredictionQueryFilters extends SpeakeasyBase {}

/**
 * This node returns answer objects during the prediction.
 */
export enum AnswerEvalNodePredictionPredictionType {
    Answer = "answer",
}

export class AnswerEvalNodePrediction extends SpeakeasyBase {
    /**
     * The answer which the node returned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "answer" })
    answer?: string;

    /**
     * End index of the predicted answer in the predicted context.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "answer_end" })
    answerEnd?: number;

    /**
     * Start index of the predicted answer in the predicted context.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "answer_start" })
    answerStart?: number;

    /**
     * Context of the node's prediction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "context" })
    context?: string;

    /**
     * The maximum context similarity of all predictions for the given label.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "context_similarity" })
    contextSimilarity: number;

    /**
     * The date and time when the prediction was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * End index of the predicted answer in the source document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "document_answer_end" })
    documentAnswerEnd?: number;

    /**
     * Start index of the predicted answer in the source document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "document_answer_start" })
    documentAnswerStart?: number;

    /**
     * The ID of the predicted document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "document_id" })
    documentId?: string;

    /**
     * The IDs of the referenced documents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "document_ids" })
    documentIds?: string[];

    /**
     * Whether the node was evaluated as part of the entire pipeline (integrated) or on its own (isolated).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eval_mode" })
    evalMode: AnswerEvalNodePredictionEvaluationMode;

    /**
     * ID for the results of a node which this prediction belongs to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eval_node_result_id" })
    evalNodeResultId: string;

    /**
     * 'True' if the node returned the answer as specified in the evaluation set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "exact_match" })
    exactMatch: boolean;

    /**
     * 'True' if the node returned the context as specified in the evaluation set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "exact_match_context_scope" })
    exactMatchContextScope: boolean;

    /**
     * 'True' if the node returned the document and context as specified in the evaluation set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "exact_match_document_id_and_context_scope" })
    exactMatchDocumentIdAndContextScope: boolean;

    /**
     * Overlap between returned answer and correct answer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "f1" })
    f1: number;

    /**
     * Best F1 for the correct answers with matching context.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "f1_context_scope" })
    f1ContextScope: number;

    /**
     * Best F1 for the correct answer with matching document and context.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "f1_document_id_and_context_scope" })
    f1DocumentIdAndContextScope: number;

    /**
     * Best F1 for the correct answer with matching document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "f1_document_id_scope" })
    f1DocumentIdScope: number;

    /**
     * Filters which were used for the evaluation of the query.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "filters" })
    @Type(() => AnswerEvalNodePredictionQueryFilters)
    filters?: AnswerEvalNodePredictionQueryFilters;

    /**
     * The index of this prediction for a particular query.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "index" })
    index: number;

    /**
     * The labels associated with this prediction including label specific prediction data such as the f1 score for this specific label.
     */
    @SpeakeasyMetadata({ elemType: LabelWithPrediction })
    @Expose({ name: "labels" })
    @Type(() => LabelWithPrediction)
    labels: LabelWithPrediction[];

    /**
     * Unique identifier of this eval prediction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prediction_id" })
    predictionId: string;

    /**
     * This node returns answer objects during the prediction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prediction_type" })
    predictionType: AnswerEvalNodePredictionPredictionType;

    /**
     * The prompt that was used to generate the result.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prompt" })
    prompt?: string;

    /**
     * The text which was used to evaluate this particular node's query behavior.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query: string;

    /**
     * The rank of this prediction among the predictions of the node for the given query.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rank" })
    rank: number;

    /**
     * Semantic similarity between returned answer and correct answer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sas" })
    sas?: number;

    /**
     * Best SAS for the correct answers with matching context.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sas_context_scope" })
    sasContextScope?: number;

    /**
     * Best SAS for the correct answer with matching document and context.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sas_document_id_and_context_scope" })
    sasDocumentIdAndContextScope?: number;

    /**
     * Best SAS for the correct answer with matching document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sas_document_id_scope" })
    sasDocumentIdScope?: number;

    /**
     * The date and time when the prediction was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
