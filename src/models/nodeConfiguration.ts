/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  EndPointAccessTypeEnum,
  endPointAccessTypeEnumSchema,
} from './endPointAccessTypeEnum';
import { IdList, idListSchema } from './idList';
import {
  NodeConfigurationLabel,
  nodeConfigurationLabelSchema,
} from './nodeConfigurationLabel';
import {
  NodeConfigurationTag,
  nodeConfigurationTagSchema,
} from './nodeConfigurationTag';

export interface NodeConfiguration {
  /** Name of the nodeGroup. */
  name?: string;
  isWavelengthZone?: boolean;
  isManagedNodeGroup?: boolean;
  isSpotInstanceNeeded?: boolean;
  endPointAccessType?: EndPointAccessTypeEnum;
  instanceType?: string;
  nodes?: number;
  nodesMin?: number;
  nodesMax?: number;
  nodeVolumeType?: string;
  subnetCidrBlock?: string;
  nodeAmiFamily?: string;
  nodeVolumeSize?: number;
  keyName?: string;
  maxPodPerNode?: number;
  useVolumeEncryption?: boolean;
  nodePrivateNetworking?: boolean;
  instanceProfileArn?: string;
  instanceRoleArn?: string;
  instanceRolePermissionBoundary?: string;
  securityGroupIds?: IdList[];
  availabilityZoneIds?: IdList[];
  labels?: NodeConfigurationLabel;
  tags?: NodeConfigurationTag;
  autoCreateServiceRoles?: boolean;
  enableFullAccessToEcr?: boolean;
  enableAsgAccess?: boolean;
  enableDnsAccess?: boolean;
  enableAppMeshAccess?: boolean;
  enableAlbAccess?: boolean;
  enableEfsAccess?: boolean;
}

export const nodeConfigurationSchema: Schema<NodeConfiguration> = object({
  name: ['name', optional(string())],
  isWavelengthZone: ['isWavelengthZone', optional(boolean())],
  isManagedNodeGroup: ['isManagedNodeGroup', optional(boolean())],
  isSpotInstanceNeeded: ['isSpotInstanceNeeded', optional(boolean())],
  endPointAccessType: [
    'endPointAccessType',
    optional(endPointAccessTypeEnumSchema),
  ],
  instanceType: ['instanceType', optional(string())],
  nodes: ['nodes', optional(number())],
  nodesMin: ['nodesMin', optional(number())],
  nodesMax: ['nodesMax', optional(number())],
  nodeVolumeType: ['nodeVolumeType', optional(string())],
  subnetCidrBlock: ['subnetCidrBlock', optional(string())],
  nodeAmiFamily: ['nodeAmiFamily', optional(string())],
  nodeVolumeSize: ['nodeVolumeSize', optional(number())],
  keyName: ['keyName', optional(string())],
  maxPodPerNode: ['maxPodPerNode', optional(number())],
  useVolumeEncryption: ['useVolumeEncryption', optional(boolean())],
  nodePrivateNetworking: ['nodePrivateNetworking', optional(boolean())],
  instanceProfileArn: ['instanceProfileArn', optional(string())],
  instanceRoleArn: ['instanceRoleArn', optional(string())],
  instanceRolePermissionBoundary: [
    'instanceRolePermissionBoundary',
    optional(string()),
  ],
  securityGroupIds: [
    'securityGroupIds',
    optional(array(lazy(() => idListSchema))),
  ],
  availabilityZoneIds: [
    'availabilityZoneIds',
    optional(array(lazy(() => idListSchema))),
  ],
  labels: ['labels', optional(lazy(() => nodeConfigurationLabelSchema))],
  tags: ['tags', optional(lazy(() => nodeConfigurationTagSchema))],
  autoCreateServiceRoles: ['autoCreateServiceRoles', optional(boolean())],
  enableFullAccessToEcr: ['enableFullAccessToEcr', optional(boolean())],
  enableAsgAccess: ['enableAsgAccess', optional(boolean())],
  enableDnsAccess: ['enableDnsAccess', optional(boolean())],
  enableAppMeshAccess: ['enableAppMeshAccess', optional(boolean())],
  enableAlbAccess: ['enableAlbAccess', optional(boolean())],
  enableEfsAccess: ['enableEfsAccess', optional(boolean())],
});