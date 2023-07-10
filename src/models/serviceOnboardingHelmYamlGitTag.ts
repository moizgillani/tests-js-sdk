/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface ServiceOnboardingHelmYamlGitTag {
  /** The user can provide tagName to the Helm chart. */
  tagName: string;
  /** The user can provide an array of values. YAML files paths. */
  valuesYamlPaths?: string[];
}

export const serviceOnboardingHelmYamlGitTagSchema: Schema<ServiceOnboardingHelmYamlGitTag> = object(
  {
    tagName: ['tagName', string()],
    valuesYamlPaths: ['valuesYamlPaths', optional(array(string()))],
  }
);
