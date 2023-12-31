/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

/** The details of the UsageAnomaly trigger. */
export interface UsageAnomalyAttributes {
  /** The Verizon billing account associated with the anomaly triggers for this trigger to be active for devices in those accounts. An account name is usually numeric, and must include any leading zeros. */
  accountNames?: string;
  /** The names of device groups associated with the anomaly triggers for this trigger to be active for devices in those groups. */
  deviceGroup?: string;
  /** Whether or not to include anomalies classified as 'abnormal'.<br />true<br />false<br />Classification is set as part of ThingSpace Intelligence anomaly detection settings. */
  includeAbnormal?: boolean;
  /** Whether or not to include anomalies classified as 'very abnormal'.<br />true<br />false<br />Classification is set as part of ThingSpace Intelligence anomaly detection settings. */
  includeVeryAbnormal?: boolean;
  /** Whether or not to include anomalies that are directionally under the expected usage.<br />true<br />false. */
  includeUnderExpectedUsage?: boolean;
  /** Whether or not to include anomalies that are directionally over the expected usage. <br />true<br />false. */
  includeOverExpectedUsage?: boolean;
}

export const usageAnomalyAttributesSchema: Schema<UsageAnomalyAttributes> = object(
  {
    accountNames: ['accountNames', optional(string())],
    deviceGroup: ['deviceGroup', optional(string())],
    includeAbnormal: ['includeAbnormal', optional(boolean())],
    includeVeryAbnormal: ['includeVeryAbnormal', optional(boolean())],
    includeUnderExpectedUsage: [
      'includeUnderExpectedUsage',
      optional(boolean()),
    ],
    includeOverExpectedUsage: ['includeOverExpectedUsage', optional(boolean())],
  }
);
