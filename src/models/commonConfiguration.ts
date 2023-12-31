/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Blueprint, blueprintSchema } from './blueprint';
import { CloudCredential, cloudCredentialSchema } from './cloudCredential';
import { K8sVersionEnum, k8sVersionEnumSchema } from './k8sVersionEnum';

export interface CommonConfiguration {
  cloudCredentials?: CloudCredential;
  /** Version of K8s platform. */
  k8sVersion?: K8sVersionEnum;
  blueprint?: Blueprint;
}

export const commonConfigurationSchema: Schema<CommonConfiguration> = object({
  cloudCredentials: [
    'cloudCredentials',
    optional(lazy(() => cloudCredentialSchema)),
  ],
  k8sVersion: ['k8sVersion', optional(k8sVersionEnumSchema)],
  blueprint: ['blueprint', optional(lazy(() => blueprintSchema))],
});
