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
exports.TraceMsgToJSON = exports.TraceMsgFromJSONTyped = exports.TraceMsgFromJSON = exports.instanceOfTraceMsg = void 0;
const runtime_1 = require("../runtime");
const AccountAddress_1 = require("./AccountAddress");
const TraceTX_1 = require("./TraceTX");
/**
 * Check if a given object implements the TraceMsg interface.
 */
function instanceOfTraceMsg(value) {
    let isInstance = true;
    isInstance = isInstance && "createdLt" in value;
    isInstance = isInstance && "destination" in value;
    isInstance = isInstance && "fwdFee" in value;
    isInstance = isInstance && "ihrFee" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfTraceMsg = instanceOfTraceMsg;
function TraceMsgFromJSON(json) {
    return TraceMsgFromJSONTyped(json, false);
}
exports.TraceMsgFromJSON = TraceMsgFromJSON;
function TraceMsgFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comment': !(0, runtime_1.exists)(json, 'comment') ? undefined : json['comment'],
        'createdLt': json['created_lt'],
        'destination': (0, AccountAddress_1.AccountAddressFromJSON)(json['destination']),
        'fwdFee': json['fwd_fee'],
        'ihrFee': json['ihr_fee'],
        'source': (0, AccountAddress_1.AccountAddressFromJSON)(json['source']),
        'tx': !(0, runtime_1.exists)(json, 'tx') ? undefined : (0, TraceTX_1.TraceTXFromJSON)(json['tx']),
        'value': json['value'],
    };
}
exports.TraceMsgFromJSONTyped = TraceMsgFromJSONTyped;
function TraceMsgToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'comment': value.comment,
        'created_lt': value.createdLt,
        'destination': (0, AccountAddress_1.AccountAddressToJSON)(value.destination),
        'fwd_fee': value.fwdFee,
        'ihr_fee': value.ihrFee,
        'source': (0, AccountAddress_1.AccountAddressToJSON)(value.source),
        'tx': (0, TraceTX_1.TraceTXToJSON)(value.tx),
        'value': value.value,
    };
}
exports.TraceMsgToJSON = TraceMsgToJSON;
