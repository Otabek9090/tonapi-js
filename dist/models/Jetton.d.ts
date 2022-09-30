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
/**
 *
 * @export
 * @interface Jetton
 */
export interface Jetton {
    /**
     *
     * @type {string}
     * @memberof Jetton
     */
    address: string;
    /**
     *
     * @type {number}
     * @memberof Jetton
     */
    decimals: number;
    /**
     *
     * @type {string}
     * @memberof Jetton
     */
    image?: string;
    /**
     *
     * @type {string}
     * @memberof Jetton
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Jetton
     */
    symbol: string;
}
/**
 * Check if a given object implements the Jetton interface.
 */
export declare function instanceOfJetton(value: object): boolean;
export declare function JettonFromJSON(json: any): Jetton;
export declare function JettonFromJSONTyped(json: any, ignoreDiscriminator: boolean): Jetton;
export declare function JettonToJSON(value?: Jetton | null): any;
