/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { DomainBids } from '../models';
export interface GetDomainBidsRequest {
    domain: string;
}
/**
 * DomainBidsApi - interface
 *
 * @export
 * @interface DomainBidsApiInterface
 */
export interface DomainBidsApiInterface {
    /**
     * Get domain bids
     * @param {string} domain domain names with .ton
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainBidsApiInterface
     */
    getDomainBidsRaw(requestParameters: GetDomainBidsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainBids>>;
    /**
     * Get domain bids
     */
    getDomainBids(requestParameters: GetDomainBidsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainBids>;
}
/**
 *
 */
export declare class DomainBidsApi extends runtime.BaseAPI implements DomainBidsApiInterface {
    /**
     * Get domain bids
     */
    getDomainBidsRaw(requestParameters: GetDomainBidsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainBids>>;
    /**
     * Get domain bids
     */
    getDomainBids(requestParameters: GetDomainBidsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainBids>;
}
