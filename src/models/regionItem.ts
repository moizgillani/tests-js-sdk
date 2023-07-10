/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { ZoneItem, zoneItemSchema } from './zoneItem';

export interface RegionItem {
  /** Region name. */
  region?: string;
  zones?: ZoneItem[];
}

export const regionItemSchema: Schema<RegionItem> = object({
  region: ['region', optional(string())],
  zones: ['zones', optional(array(lazy(() => zoneItemSchema)))],
});
