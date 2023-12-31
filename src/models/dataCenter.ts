/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  DataCenterDistributionEnum,
  dataCenterDistributionEnumSchema,
} from './dataCenterDistributionEnum';
import {
  DataCenterPackageTypeEnum,
  dataCenterPackageTypeEnumSchema,
} from './dataCenterPackageTypeEnum';
import {
  EdgeServiceLaunchParams,
  edgeServiceLaunchParamsSchema,
} from './edgeServiceLaunchParams';
import { K8sVersionEnum, k8sVersionEnumSchema } from './k8sVersionEnum';

export interface DataCenter {
  /** Packages are optimized for various operating environments. Prepackaged images are available in OVA and QCOW formats. */
  packageType?: DataCenterPackageTypeEnum;
  /** Supported Kubernetes distribution for the selected cloud provider. */
  distribution?: DataCenterDistributionEnum;
  /** Indicate geo-location of cluster if you wish to use location based policies. */
  location?: string;
  /** Version of K8s platform. */
  k8sVersion?: K8sVersionEnum;
  /** Operating System for the master and worker nodes. */
  operatingSystem?: string;
  tags?: EdgeServiceLaunchParams[];
}

export const dataCenterSchema: Schema<DataCenter> = object({
  packageType: ['packageType', optional(dataCenterPackageTypeEnumSchema)],
  distribution: ['distribution', optional(dataCenterDistributionEnumSchema)],
  location: ['location', optional(string())],
  k8sVersion: ['k8sVersion', optional(k8sVersionEnumSchema)],
  operatingSystem: ['operatingSystem', optional(string())],
  tags: ['tags', optional(array(lazy(() => edgeServiceLaunchParamsSchema)))],
});
