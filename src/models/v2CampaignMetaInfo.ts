/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { V2TimeWindow, v2TimeWindowSchema } from './v2TimeWindow';

/** Campaign and campaign details. */
export interface V2CampaignMetaInfo {
  /** Account identifier. */
  accountName: string;
  /** Campaign identifier. */
  id: string;
  /** Campaign name. */
  campaignName?: string;
  /** Software name. */
  softwareName: string;
  /** LWM2M, OMD-DM or HTTP. */
  distributionType: string;
  /** Old software name. */
  softwareFrom: string;
  /** New software name. */
  softwareTo: string;
  /** Applicable make. */
  make: string;
  /** Applicable model. */
  model: string;
  /** Campaign start date. */
  startDate: string;
  /** Campaign end date. */
  endDate: string;
  /** Specifies starting date client should download package. If null, client will download as soon as possible. */
  downloadAfterDate?: string;
  /** List of allowed download time windows. */
  downloadTimeWindowList?: V2TimeWindow[];
  /** Client will install package after date. If null, client will install as soon as possible. */
  installAfterDate?: string;
  /** List of allowed install time windows. */
  installTimeWindowList?: V2TimeWindow[];
  /** Software upgrade status. */
  status: string;
}

export const v2CampaignMetaInfoSchema: Schema<V2CampaignMetaInfo> = object({
  accountName: ['accountName', string()],
  id: ['id', string()],
  campaignName: ['campaignName', optional(string())],
  softwareName: ['softwareName', string()],
  distributionType: ['distributionType', string()],
  softwareFrom: ['softwareFrom', string()],
  softwareTo: ['softwareTo', string()],
  make: ['make', string()],
  model: ['model', string()],
  startDate: ['startDate', string()],
  endDate: ['endDate', string()],
  downloadAfterDate: ['downloadAfterDate', optional(string())],
  downloadTimeWindowList: [
    'downloadTimeWindowList',
    optional(array(lazy(() => v2TimeWindowSchema))),
  ],
  installAfterDate: ['installAfterDate', optional(string())],
  installTimeWindowList: [
    'installTimeWindowList',
    optional(array(lazy(() => v2TimeWindowSchema))),
  ],
  status: ['status', string()],
});
