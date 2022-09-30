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
import type { TraceMsg, Traces } from '../models';
export interface GetAnnotatedTraceRequest {
    hash: string;
}
export interface GetTraceRequest {
    hash: string;
}
export interface GetTracesByAccountRequest {
    account: string;
    limit?: number;
}
/**
 * TraceApi - interface
 *
 * @export
 * @interface TraceApiInterface
 */
export interface TraceApiInterface {
    /**
     * Get the annotated trace by trace ID or hash of any transaction in trace
     * @param {string} hash trace ID or transaction hash in hex (without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TraceApiInterface
     */
    getAnnotatedTraceRaw(requestParameters: GetAnnotatedTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * Get the annotated trace by trace ID or hash of any transaction in trace
     */
    getAnnotatedTrace(requestParameters: GetAnnotatedTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * Get the trace by trace ID or hash of any transaction in trace
     * @param {string} hash trace ID or transaction hash in hex (without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TraceApiInterface
     */
    getTraceRaw(requestParameters: GetTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TraceMsg>>;
    /**
     * Get the trace by trace ID or hash of any transaction in trace
     */
    getTrace(requestParameters: GetTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TraceMsg>;
    /**
     * Get traces for account
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {number} [limit]
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof TraceApiInterface
     */
    getTracesByAccountRaw(requestParameters: GetTracesByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Traces>>;
    /**
     * Get traces for account
     */
    getTracesByAccount(requestParameters: GetTracesByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Traces>;
}
/**
 *
 */
export declare class TraceApi extends runtime.BaseAPI implements TraceApiInterface {
    /**
     * Get the annotated trace by trace ID or hash of any transaction in trace
     */
    getAnnotatedTraceRaw(requestParameters: GetAnnotatedTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;
    /**
     * Get the annotated trace by trace ID or hash of any transaction in trace
     */
    getAnnotatedTrace(requestParameters: GetAnnotatedTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;
    /**
     * Get the trace by trace ID or hash of any transaction in trace
     */
    getTraceRaw(requestParameters: GetTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TraceMsg>>;
    /**
     * Get the trace by trace ID or hash of any transaction in trace
     */
    getTrace(requestParameters: GetTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TraceMsg>;
    /**
     * Get traces for account
     */
    getTracesByAccountRaw(requestParameters: GetTracesByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Traces>>;
    /**
     * Get traces for account
     */
    getTracesByAccount(requestParameters: GetTracesByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Traces>;
}
