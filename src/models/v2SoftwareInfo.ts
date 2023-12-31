/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Software information. */
export interface V2SoftwareInfo {
  /** Software name. */
  name: string;
  /** Software version. */
  version: string;
  /** Upgrade time. */
  upgradeTime: string;
}

export const v2SoftwareInfoSchema: Schema<V2SoftwareInfo> = object({
  name: ['name', string()],
  version: ['version', string()],
  upgradeTime: ['upgradeTime', string()],
});
