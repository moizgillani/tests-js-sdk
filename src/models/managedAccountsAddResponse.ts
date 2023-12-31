/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { StatusList, statusListSchema } from './statusList';

export interface ManagedAccountsAddResponse {
  /** Transaction identifier */
  txId?: string;
  statusList?: StatusList[];
}

export const managedAccountsAddResponseSchema: Schema<ManagedAccountsAddResponse> = object(
  {
    txId: ['TxId', optional(string())],
    statusList: ['statusList', optional(array(lazy(() => statusListSchema)))],
  }
);
