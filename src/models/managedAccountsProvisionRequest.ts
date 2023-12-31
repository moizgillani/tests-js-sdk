/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';
import { ServiceNameEnum, serviceNameEnumSchema } from './serviceNameEnum';

export interface ManagedAccountsProvisionRequest {
  /** Managed account identifier */
  accountName: string;
  /** Primary Account identifier */
  paccountName: string;
  /** Service name */
  serviceName: ServiceNameEnum;
  /** SKU name */
  type: string;
  /** Transaction identifier returned by add request */
  txid: string;
}

export const managedAccountsProvisionRequestSchema: Schema<ManagedAccountsProvisionRequest> = object(
  {
    accountName: ['accountName', string()],
    paccountName: ['paccountName', string()],
    serviceName: ['serviceName', serviceNameEnumSchema],
    type: ['type', string()],
    txid: ['txid', string()],
  }
);
