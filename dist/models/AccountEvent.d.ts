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
import type { AccountAddress } from './AccountAddress';
import type { Action } from './Action';
import type { Fee } from './Fee';
/**
 *
 * @export
 * @interface AccountEvent
 */
export interface AccountEvent {
    /**
     *
     * @type {AccountAddress}
     * @memberof AccountEvent
     */
    account: AccountAddress;
    /**
     *
     * @type {Array<Action>}
     * @memberof AccountEvent
     */
    actions: Array<Action>;
    /**
     *
     * @type {string}
     * @memberof AccountEvent
     */
    eventId: string;
    /**
     *
     * @type {Fee}
     * @memberof AccountEvent
     */
    fee: Fee;
    /**
     * Event is not finished yet. Transactions still happening
     * @type {boolean}
     * @memberof AccountEvent
     */
    inProgress: boolean;
    /**
     * scam
     * @type {boolean}
     * @memberof AccountEvent
     */
    isScam: boolean;
    /**
     *
     * @type {number}
     * @memberof AccountEvent
     */
    lt: number;
    /**
     *
     * @type {number}
     * @memberof AccountEvent
     */
    timestamp: number;
}
/**
 * Check if a given object implements the AccountEvent interface.
 */
export declare function instanceOfAccountEvent(value: object): boolean;
export declare function AccountEventFromJSON(json: any): AccountEvent;
export declare function AccountEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountEvent;
export declare function AccountEventToJSON(value?: AccountEvent | null): any;
