/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * This node returns 'Document' objects, not 'Answer' objects.
 */
export enum DocumentNodeEvalRunMetricNodeType {
  DocumentNode = "document_node",
}

export class DocumentNodeEvalRunMetric extends SpeakeasyBase {
  /**
   * The mean average precision of the node when it's evaluated in the integrated mode. For more information, see [Experiments and Metrics](https://docs.cloud.deepset.ai/docs/experiments-and-metrics).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "integrated_mean_average_precision" })
  integratedMeanAveragePrecision?: number;

  /**
   * The mean reciprocal rank of the node when it's evaluated in the integrated mode. For more information, see [Experiments and Metrics](https://docs.cloud.deepset.ai/docs/experiments-and-metrics).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "integrated_mean_reciprocal_rank" })
  integratedMeanReciprocalRank?: number;

  /**
   * The normal discounted cumulative gain of the node when it's evaluated in integrated mode. For more information, see [Experiments and Metrics](https://docs.cloud.deepset.ai/docs/experiments-and-metrics).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "integrated_normal_discounted_cumulative_gain" })
  integratedNormalDiscountedCumulativeGain?: number;

  /**
   * The precision of the node when it's evaluated in integrated mode. For more information, see [Experiments and Metrics](https://docs.cloud.deepset.ai/docs/experiments-and-metrics).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "integrated_precision" })
  integratedPrecision?: number;

  /**
   * The recall multi hit metric of the node when it's evaluated in integrated mode. For more information, see [Experiments and Metrics](https://docs.cloud.deepset.ai/docs/experiments-and-metrics).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "integrated_recall_multi_hit" })
  integratedRecallMultiHit?: number;

  /**
   * The recall single hit metric of the node when it's evaluated in integrated mode. For more information, see [Experiments and Metrics](https://docs.cloud.deepset.ai/docs/experiments-and-metrics).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "integrated_recall_single_hit" })
  integratedRecallSingleHit?: number;

  /**
   * The name of the evaluated pipeline node.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "node_name" })
  nodeName: string;

  /**
   * This node returns 'Document' objects, not 'Answer' objects.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "node_type" })
  nodeType: DocumentNodeEvalRunMetricNodeType;
}
