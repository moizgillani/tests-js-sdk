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
import { AccessIntents, accessIntentsSchema } from './accessIntents';
import {
  DeploymentLocation,
  deploymentLocationSchema,
} from './deploymentLocation';
import {
  LinkedServiceInstance,
  linkedServiceInstanceSchema,
} from './linkedServiceInstance';
import { PlacementIntents, placementIntentsSchema } from './placementIntents';
import {
  ServicesProfileRegistrationStateEnum,
  servicesProfileRegistrationStateEnumSchema,
} from './servicesProfileRegistrationStateEnum';

export interface ServicesProfileRegistration {
  /** Id of the service profile. */
  id?: string;
  /** Name for a service profile. */
  name?: string;
  /** Service being deployed. */
  serviceName?: string;
  /** Service version being deployed. */
  serviceVersion?: string;
  currentVersion?: string;
  version?: string;
  state?: ServicesProfileRegistrationStateEnum;
  /** Id of particular customer. */
  customerID?: string;
  createdBy?: string;
  createdAt?: string;
  lastUpdatedBy?: string;
  lastUpdatedAt?: string;
  linkedServiceInstances?: LinkedServiceInstance[] | null;
  accessIntents?: AccessIntents;
  placementIntents?: PlacementIntents;
  deploymentLocations?: DeploymentLocation[] | null;
}

export const servicesProfileRegistrationSchema: Schema<ServicesProfileRegistration> = object(
  {
    id: ['id', optional(string())],
    name: ['name', optional(string())],
    serviceName: ['serviceName', optional(string())],
    serviceVersion: ['serviceVersion', optional(string())],
    currentVersion: ['currentVersion', optional(string())],
    version: ['version', optional(string())],
    state: ['state', optional(servicesProfileRegistrationStateEnumSchema)],
    customerID: ['customerID', optional(string())],
    createdBy: ['createdBy', optional(string())],
    createdAt: ['createdAt', optional(string())],
    lastUpdatedBy: ['lastUpdatedBy', optional(string())],
    lastUpdatedAt: ['lastUpdatedAt', optional(string())],
    linkedServiceInstances: [
      'linkedServiceInstances',
      optional(nullable(array(lazy(() => linkedServiceInstanceSchema)))),
    ],
    accessIntents: ['accessIntents', optional(lazy(() => accessIntentsSchema))],
    placementIntents: [
      'placementIntents',
      optional(lazy(() => placementIntentsSchema)),
    ],
    deploymentLocations: [
      'deploymentLocations',
      optional(nullable(array(lazy(() => deploymentLocationSchema)))),
    ],
  }
);