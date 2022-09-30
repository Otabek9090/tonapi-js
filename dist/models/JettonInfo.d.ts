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
import type { JettonMetadata } from './JettonMetadata';
/**
 *
 * @export
 * @interface JettonInfo
 */
export interface JettonInfo {
    /**
     *
     * @type {JettonMetadata}
     * @memberof JettonInfo
     */
    metadata: JettonMetadata;
    /**
     *
     * @type {boolean}
     * @memberof JettonInfo
     */
    mintable: boolean;
    /**
     *
     * @type {string}
     * @memberof JettonInfo
     */
    totalSupply: string;
}
/**
 * Check if a given object implements the JettonInfo interface.
 */
export declare function instanceOfJettonInfo(value: object): boolean;
export declare function JettonInfoFromJSON(json: any): JettonInfo;
export declare function JettonInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonInfo;
export declare function JettonInfoToJSON(value?: JettonInfo | null): any;
