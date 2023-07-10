/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Notification, notificationSchema } from './notification';
import {
  UsageAnomalyAttributes,
  usageAnomalyAttributesSchema,
} from './usageAnomalyAttributes';

/** Trigger details. */
export interface TriggerType2 {
  /** The details of the UsageAnomaly trigger. */
  anomalyattributes?: UsageAnomalyAttributes;
  /** The notification details of the trigger. */
  notification?: Notification;
}

export const triggerType2Schema: Schema<TriggerType2> = object({
  anomalyattributes: [
    'anomalyattributes',
    optional(lazy(() => usageAnomalyAttributesSchema)),
  ],
  notification: ['notification', optional(lazy(() => notificationSchema))],
});
