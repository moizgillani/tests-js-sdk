/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface NodeStatusInfo {
  machineID?: string;
  systemUUID?: string;
  bootID?: string;
  kernelVersion?: string;
  osImage?: string;
  containerRuntimeVersion?: string;
  kubeletVersion?: string;
  kubeProxyVersion?: string;
  operatingSystem?: string;
  architecture?: string;
}

export const nodeStatusInfoSchema: Schema<NodeStatusInfo> = object({
  machineID: ['machineID', optional(string())],
  systemUUID: ['systemUUID', optional(string())],
  bootID: ['bootID', optional(string())],
  kernelVersion: ['kernelVersion', optional(string())],
  osImage: ['osImage', optional(string())],
  containerRuntimeVersion: ['containerRuntimeVersion', optional(string())],
  kubeletVersion: ['kubeletVersion', optional(string())],
  kubeProxyVersion: ['kubeProxyVersion', optional(string())],
  operatingSystem: ['operatingSystem', optional(string())],
  architecture: ['architecture', optional(string())],
});