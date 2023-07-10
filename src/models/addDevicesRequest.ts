/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { AccountDeviceList, accountDeviceListSchema } from './accountDeviceList';
import { CustomFields, customFieldsSchema } from './customFields';

/** Request to add the devices. */
export interface AddDevicesRequest {
  /** The billing account to which the devices are added. */
  accountName?: string;
  /** The names and values for any custom fields that you want set for the devices as they are added to the account. */
  customFields?: CustomFields[];
  /** The devices that you want to add. */
  devicesToAdd?: AccountDeviceList[];
  /** The name of a device group to add the devices to. They are added to the default device group if you don't include this parameter. */
  groupName?: string;
  /** The Stock Keeping Unit (SKU) number of a 4G device type with an embedded SIM. */
  skuNumber?: string;
  /** The initial service state for the devices. The only valid state is “Preactive.” */
  state?: string;
}

export const addDevicesRequestSchema: Schema<AddDevicesRequest> = object({
  accountName: ['accountName', optional(string())],
  customFields: [
    'customFields',
    optional(array(lazy(() => customFieldsSchema))),
  ],
  devicesToAdd: [
    'devicesToAdd',
    optional(array(lazy(() => accountDeviceListSchema))),
  ],
  groupName: ['groupName', optional(string())],
  skuNumber: ['skuNumber', optional(string())],
  state: ['state', optional(string())],
});
