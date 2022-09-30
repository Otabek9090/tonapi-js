/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface JettonMetadata
 */
export interface JettonMetadata {
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof JettonMetadata
     */
    decimals: number;
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof JettonMetadata
     */
    symbol: string;
}

/**
 * Check if a given object implements the JettonMetadata interface.
 */
export function instanceOfJettonMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "decimals" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "symbol" in value;

    return isInstance;
}

export function JettonMetadataFromJSON(json: any): JettonMetadata {
    return JettonMetadataFromJSONTyped(json, false);
}

export function JettonMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'decimals': json['decimals'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'name': json['name'],
        'symbol': json['symbol'],
    };
}

export function JettonMetadataToJSON(value?: JettonMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'decimals': value.decimals,
        'description': value.description,
        'image': value.image,
        'name': value.name,
        'symbol': value.symbol,
    };
}

