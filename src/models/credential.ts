/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Credential {
  name?: string;
  password?: string;
}

export const credentialSchema: Schema<Credential> = object({
  name: ['name', optional(string())],
  password: ['password', optional(string())],
});
