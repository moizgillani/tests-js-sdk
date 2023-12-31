/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AwsCspProfileCredTypeEnum
 */
export enum AwsCspProfileCredTypeEnum {
  ACCESSKEY = 'ACCESS_KEY',
  ROLEARN = 'ROLE_ARN',
}

/**
 * Schema for AwsCspProfileCredTypeEnum
 */
export const awsCspProfileCredTypeEnumSchema: Schema<AwsCspProfileCredTypeEnum> = stringEnum(AwsCspProfileCredTypeEnum);
