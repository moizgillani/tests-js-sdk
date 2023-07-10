/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ClusterConfigEndpointAccessTypeEnum,
  clusterConfigEndpointAccessTypeEnumSchema,
} from './clusterConfigEndpointAccessTypeEnum';
import {
  EdgeServiceLaunchParams,
  edgeServiceLaunchParamsSchema,
} from './edgeServiceLaunchParams';
import { IdList, idListSchema } from './idList';
import {
  NetworkNatModeEnum,
  networkNatModeEnumSchema,
} from './networkNatModeEnum';

export interface ClusterConfiguration {
  tags?: EdgeServiceLaunchParams;
  endPointAccessType?: ClusterConfigEndpointAccessTypeEnum;
  autoCreateNetworkInfra?: boolean;
  infraIPv4range?: string;
  networkNatMode?: NetworkNatModeEnum;
  availabilityZones?: IdList[];
  privateNetworkInfraIds?: IdList[];
  publicNetworkInfraIds?: IdList[];
}

export const clusterConfigurationSchema: Schema<ClusterConfiguration> = object({
  tags: ['tags', optional(lazy(() => edgeServiceLaunchParamsSchema))],
  endPointAccessType: [
    'endPointAccessType',
    optional(clusterConfigEndpointAccessTypeEnumSchema),
  ],
  autoCreateNetworkInfra: ['autoCreateNetworkInfra', optional(boolean())],
  infraIPv4range: ['infraIPv4range', optional(string())],
  networkNatMode: ['networkNatMode', optional(networkNatModeEnumSchema)],
  availabilityZones: [
    'availabilityZones',
    optional(array(lazy(() => idListSchema))),
  ],
  privateNetworkInfraIds: [
    'privateNetworkInfraIds',
    optional(array(lazy(() => idListSchema))),
  ],
  publicNetworkInfraIds: [
    'publicNetworkInfraIds',
    optional(array(lazy(() => idListSchema))),
  ],
});
