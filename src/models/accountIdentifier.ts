/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The ID of the authenticating billing account, in the format `{"billingaccountid":"1234567890-12345"}`. */
export interface AccountIdentifier {
  billingaccountid?: string;
}

export const accountIdentifierSchema: Schema<AccountIdentifier> = object({
  billingaccountid: ['billingaccountid', optional(string())],
});
