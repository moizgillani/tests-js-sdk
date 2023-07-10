/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  V2CampaignMetaInfo,
  v2CampaignMetaInfoSchema,
} from './v2CampaignMetaInfo';

/** Campaign history details. */
export interface V2CampaignHistory {
  /** Has more report flag. */
  hasMoreData: boolean;
  /** Campaign identifier. */
  lastSeenCampaignId?: string;
  /** Software upgrade list. */
  campaignList: V2CampaignMetaInfo[] | null;
}

export const v2CampaignHistorySchema: Schema<V2CampaignHistory> = object({
  hasMoreData: ['hasMoreData', boolean()],
  lastSeenCampaignId: ['lastSeenCampaignId', optional(string())],
  campaignList: [
    'campaignList',
    nullable(array(lazy(() => v2CampaignMetaInfoSchema))),
  ],
});
