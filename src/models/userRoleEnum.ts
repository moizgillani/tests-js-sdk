/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for UserRoleEnum
 */
export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
  ORGADMIN = 'ORGADMIN',
}

/**
 * Schema for UserRoleEnum
 */
export const userRoleEnumSchema: Schema<UserRoleEnum> = stringEnum(UserRoleEnum);
