/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { V3DeviceStatus, v3DeviceStatusSchema } from './v3DeviceStatus';

/** Campaign history. */
export interface V3CampaignDevice {
  /** Total device count. */
  totalDevice?: number;
  /** Has more report flag. */
  hasMoreData: boolean;
  /** Device identifier. */
  lastSeenDeviceId?: string;
  /** Maximum page size. */
  maxPageSize: number;
  /** List of devices with id in IMEI. */
  deviceList: V3DeviceStatus[];
}

export const v3CampaignDeviceSchema: Schema<V3CampaignDevice> = object({
  totalDevice: ['totalDevice', optional(number())],
  hasMoreData: ['hasMoreData', boolean()],
  lastSeenDeviceId: ['lastSeenDeviceId', optional(string())],
  maxPageSize: ['maxPageSize', number()],
  deviceList: ['deviceList', array(lazy(() => v3DeviceStatusSchema))],
});
