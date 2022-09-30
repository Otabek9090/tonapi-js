"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsToJSON = exports.SubscriptionsFromJSONTyped = exports.SubscriptionsFromJSON = exports.instanceOfSubscriptions = void 0;
const Subscription_1 = require("./Subscription");
/**
 * Check if a given object implements the Subscriptions interface.
 */
function instanceOfSubscriptions(value) {
    let isInstance = true;
    isInstance = isInstance && "subscriptions" in value;
    return isInstance;
}
exports.instanceOfSubscriptions = instanceOfSubscriptions;
function SubscriptionsFromJSON(json) {
    return SubscriptionsFromJSONTyped(json, false);
}
exports.SubscriptionsFromJSON = SubscriptionsFromJSON;
function SubscriptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'subscriptions': (json['subscriptions'].map(Subscription_1.SubscriptionFromJSON)),
    };
}
exports.SubscriptionsFromJSONTyped = SubscriptionsFromJSONTyped;
function SubscriptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'subscriptions': (value.subscriptions.map(Subscription_1.SubscriptionToJSON)),
    };
}
exports.SubscriptionsToJSON = SubscriptionsToJSON;
