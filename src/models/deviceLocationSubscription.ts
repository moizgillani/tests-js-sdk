/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface DeviceLocationSubscription {
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** Location service license type. */
  locType?: string;
  /** The number of billable location requests allowed per billing cycle. */
  maxAllowance?: string;
  /** Location service purchase time. */
  purchaseTime?: string;
}

export const deviceLocationSubscriptionSchema: Schema<DeviceLocationSubscription> = object(
  {
    accountName: ['accountName', optional(string())],
    locType: ['locType', optional(string())],
    maxAllowance: ['maxAllowance', optional(string())],
    purchaseTime: ['purchaseTime', optional(string())],
  }
);