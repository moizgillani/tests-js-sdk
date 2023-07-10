/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { DeviceLocationResultError } from '../errors/deviceLocationResultError';
import {
  CallbackRegistrationResult,
  callbackRegistrationResultSchema,
} from '../models/callbackRegistrationResult';
import {
  CallbackServiceNameEnum,
  callbackServiceNameEnumSchema,
} from '../models/callbackServiceNameEnum';
import {
  DeviceLocationCallback,
  deviceLocationCallbackSchema,
} from '../models/deviceLocationCallback';
import {
  DeviceLocationSuccessResult,
  deviceLocationSuccessResultSchema,
} from '../models/deviceLocationSuccessResult';
import { array, string } from '../schema';
import { BaseController } from './baseController';

export class DeviceLocationCallbacksController extends BaseController {
  /**
   * Returns a list of all registered callback URLs for the account.
   *
   * @param account Account number.
   * @return Response from the API call
   */
  async listRegisteredCallbacks(
    account: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceLocationCallback[]>> {
    const req = this.createRequest('GET');
    req.baseUrl('Device Location');
    const mapped = req.prepareArgs({ account: [account, string()] });
    req.appendTemplatePath`/callbacks/${mapped.account}`;
    req.throwOn(400, DeviceLocationResultError, 'Error response.');
    return req.callAsJson(array(deviceLocationCallbackSchema), requestOptions);
  }

  /**
   * Provide a URL to receive messages from a ThingSpace callback service.
   *
   * @param account      Account number.
   * @param body         Request to register a callback.
   * @return Response from the API call
   */
  async registerCallback(
    account: string,
    body: DeviceLocationCallback,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CallbackRegistrationResult>> {
    const req = this.createRequest('POST');
    req.baseUrl('Device Location');
    const mapped = req.prepareArgs({
      account: [account, string()],
      body: [body, deviceLocationCallbackSchema],
    });
    req.header('Content-Type', '*/*');
    req.json(mapped.body);
    req.appendTemplatePath`/callbacks/${mapped.account}`;
    req.throwOn(400, DeviceLocationResultError, 'Error response.');
    return req.callAsJson(callbackRegistrationResultSchema, requestOptions);
  }

  /**
   * Deregister a URL to stop receiving callback messages.
   *
   * @param account Account number.
   * @param service Callback service name.
   * @return Response from the API call
   */
  async deregisterCallback(
    account: string,
    service: CallbackServiceNameEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceLocationSuccessResult>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('Device Location');
    const mapped = req.prepareArgs({
      account: [account, string()],
      service: [service, callbackServiceNameEnumSchema],
    });
    req.appendTemplatePath`/callbacks/${mapped.account}/name/${mapped.service}`;
    req.throwOn(400, DeviceLocationResultError, 'Error response.');
    return req.callAsJson(deviceLocationSuccessResultSchema, requestOptions);
  }
}