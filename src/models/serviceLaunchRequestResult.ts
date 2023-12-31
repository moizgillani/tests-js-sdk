/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { ConfigFileItem, configFileItemSchema } from './configFileItem';
import {
  LinkedServiceInstance,
  linkedServiceInstanceSchema,
} from './linkedServiceInstance';
import {
  ServiceLaunchStateEnum,
  serviceLaunchStateEnumSchema,
} from './serviceLaunchStateEnum';

export interface ServiceLaunchRequestResult {
  /** Unique service profile ID. */
  id?: string;
  /** Service request name. */
  name?: string;
  /** Service being deployed. */
  serviceName?: string;
  state?: ServiceLaunchStateEnum;
  /** Service version being deployed. */
  serviceVersion?: string;
  serviceId?: string;
  /** The service profile ID that is created during the post-service API. */
  serviceProfileId?: string;
  cspProfileId?: string;
  configFiles?: ConfigFileItem[];
  linkedServiceInstances?: LinkedServiceInstance[] | null;
  createdAt?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export const serviceLaunchRequestResultSchema: Schema<ServiceLaunchRequestResult> = object(
  {
    id: ['id', optional(string())],
    name: ['name', optional(string())],
    serviceName: ['serviceName', optional(string())],
    state: ['state', optional(serviceLaunchStateEnumSchema)],
    serviceVersion: ['serviceVersion', optional(string())],
    serviceId: ['serviceId', optional(string())],
    serviceProfileId: ['serviceProfileId', optional(string())],
    cspProfileId: ['cspProfileId', optional(string())],
    configFiles: [
      'configFiles',
      optional(array(lazy(() => configFileItemSchema))),
    ],
    linkedServiceInstances: [
      'linkedServiceInstances',
      optional(nullable(array(lazy(() => linkedServiceInstanceSchema)))),
    ],
    createdAt: ['createdAt', optional(string())],
    updatedAt: ['updatedAt', optional(string())],
    updatedBy: ['updatedBy', optional(string())],
  }
);
