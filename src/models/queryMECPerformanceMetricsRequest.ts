/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** MEC performance metrics request. */
export interface QueryMECPerformanceMetricsRequest {
  /** The 15-digit International Mobile Equipment Identifier. */
  iMEI: string;
  /** The 12-digit Mobile Station International Subscriber Directory Number. */
  mSISDN: string;
}

export const queryMECPerformanceMetricsRequestSchema: Schema<QueryMECPerformanceMetricsRequest> = object(
  { iMEI: ['IMEI', string()], mSISDN: ['MSISDN', string()] }
);
