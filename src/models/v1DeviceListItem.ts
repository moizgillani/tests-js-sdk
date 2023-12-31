/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** A JSON object for each device that was included in the request, showing the device IMEI, the status of the addition or removal, and additional information about the status. */
export interface V1DeviceListItem {
  /** Device IMEI. */
  deviceId?: string;
  /** Whether the device was successfully added or removed from the campaign. */
  status?: string;
  /** Additional details about the status. */
  reason?: string;
}

export const v1DeviceListItemSchema: Schema<V1DeviceListItem> = object({
  deviceId: ['deviceId', optional(string())],
  status: ['status', optional(string())],
  reason: ['Reason', optional(string())],
});
