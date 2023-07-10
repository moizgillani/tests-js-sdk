/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

/** Device logging information. */
export interface DeviceLoggingRequest {
  /** List of device IMEI identifiers. */
  deviceIds: string[];
}

export const deviceLoggingRequestSchema: Schema<DeviceLoggingRequest> = object({
  deviceIds: ['deviceIds', array(string())],
});