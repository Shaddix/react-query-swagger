//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../axios-client-minimal-sample.types';
import type { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { throwException, isAxiosError } from '../axios-client-minimal-sample.types';
import { getAxios, getBaseUrl } from './helpers';

export function jsonInQuery(dto?: Types.DummyDto | null | undefined, config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/query/JsonInQuery?";
    if (dto !== undefined && dto !== null)
    {
        const content_ = Types.serializeDummyDto(dto);
        url_ += "dto=" + encodeURIComponent(content_) + "&";
    }
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigJsonInQuery,
        ...config,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigJsonInQuery?.headers,
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processJsonInQuery(_response);
    });
}

function processJsonInQuery(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

export function jsonInNestedQuery(test?: string | undefined, dummy?: Types.DummyDto | undefined, config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/query/JsonInNested?";
    if (test === null)
        throw new Error("The parameter 'test' cannot be null.");
    else if (test !== undefined)
        url_ += "Test=" + encodeURIComponent("" + test) + "&";
    if (dummy === null)
        throw new Error("The parameter 'dummy' cannot be null.");
    else if (dummy !== undefined)
    {
        const content_ = Types.serializeDummyDto(dummy);
        url_ += "Dummy=" + encodeURIComponent(content_) + "&";
    }
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigJsonInNestedQuery,
        ...config,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigJsonInNestedQuery?.headers,
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processJsonInNestedQuery(_response);
    });
}

function processJsonInNestedQuery(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

export function dateOnlyInQuery(date?: Date | undefined, config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/query/DateOnlyInQuery?";
    if (date === null)
        throw new Error("The parameter 'date' cannot be null.");
    else if (date !== undefined)
        url_ += "date=" + encodeURIComponent(date ? "" + Types.formatDate(date) : "") + "&";
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigDateOnlyInQuery,
        ...config,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigDateOnlyInQuery?.headers,
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processDateOnlyInQuery(_response);
    });
}

function processDateOnlyInQuery(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

export function dateTimeInQuery(date?: Date | undefined, config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/query/DateTimeInQuery?";
    if (date === null)
        throw new Error("The parameter 'date' cannot be null.");
    else if (date !== undefined)
        url_ += "date=" + encodeURIComponent(date ? "" + date.toISOString() : "") + "&";
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigDateTimeInQuery,
        ...config,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigDateTimeInQuery?.headers,
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processDateTimeInQuery(_response);
    });
}

function processDateTimeInQuery(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

export function arrayInQuery(data?: string[] | null | undefined, config?: AxiosRequestConfig | undefined): Promise<string[]> {
    let url_ = getBaseUrl() + "/query/ArrayInQuery?";
    if (data !== undefined && data !== null)
        data && data.forEach(item => { url_ += "data=" + encodeURIComponent("" + item) + "&"; });
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigArrayInQuery,
        ...config,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigArrayInQuery?.headers,
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processArrayInQuery(_response);
    });
}

function processArrayInQuery(response: AxiosResponse): Promise<string[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = resultData200;
        return Promise.resolve<string[]>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string[]>(null as any);
}

export function dictionaryInQuery(data?: { [key: string]: string; } | null | undefined, config?: AxiosRequestConfig | undefined): Promise<{ [key: string]: string; }> {
    let url_ = getBaseUrl() + "/query/DictionaryInQuery?";
    if (data !== undefined && data !== null)
        data && Object.keys(data).forEach(key => { url_ += encodeURIComponent(key) +"=" + encodeURIComponent("" + data[key]) + "&"; });
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigDictionaryInQuery,
        ...config,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigDictionaryInQuery?.headers,
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processDictionaryInQuery(_response);
    });
}

function processDictionaryInQuery(response: AxiosResponse): Promise<{ [key: string]: string; }> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = resultData200;
        return Promise.resolve<{ [key: string]: string; }>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<{ [key: string]: string; }>(null as any);
}

export function dictionaryInJsonQuery(data?: { [key: string]: string; } | null | undefined, config?: AxiosRequestConfig | undefined): Promise<{ [key: string]: string; }> {
    let url_ = getBaseUrl() + "/query/DictionaryInJsonQuery?";
    if (data !== undefined && data !== null)
    {
        const content_ = JSON.stringify(data);
        url_ += "data=" + encodeURIComponent(content_) + "&";
    }
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigDictionaryInJsonQuery,
        ...config,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigDictionaryInJsonQuery?.headers,
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processDictionaryInJsonQuery(_response);
    });
}

function processDictionaryInJsonQuery(response: AxiosResponse): Promise<{ [key: string]: string; }> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = resultData200;
        return Promise.resolve<{ [key: string]: string; }>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<{ [key: string]: string; }>(null as any);
}

export function getViaPost(dto: Types.DummyDto, config?: AxiosRequestConfig | undefined): Promise<Types.DummyDto> {
    let url_ = getBaseUrl() + "/query/GetViaPost";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = Types.serializeDummyDto(dto);

    let options_: AxiosRequestConfig = {
        ..._requestConfigGetViaPost,
        ...config,
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            ..._requestConfigGetViaPost?.headers,
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processGetViaPost(_response);
    });
}

function processGetViaPost(response: AxiosResponse): Promise<Types.DummyDto> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = Types.initDummyDto(resultData200);
        return Promise.resolve<Types.DummyDto>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.DummyDto>(null as any);
}

export function nonGetViaPost(dto: Types.DummyDto, config?: AxiosRequestConfig | undefined): Promise<Types.DummyDto> {
    let url_ = getBaseUrl() + "/query/NonGetViaPost";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = Types.serializeDummyDto(dto);

    let options_: AxiosRequestConfig = {
        ..._requestConfigNonGetViaPost,
        ...config,
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            ..._requestConfigNonGetViaPost?.headers,
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processNonGetViaPost(_response);
    });
}

function processNonGetViaPost(response: AxiosResponse): Promise<Types.DummyDto> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = Types.initDummyDto(resultData200);
        return Promise.resolve<Types.DummyDto>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.DummyDto>(null as any);
}

export function withBody(dto: Types.BodyDto, config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/query/WithBody";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = Types.serializeBodyDto(dto);

    let options_: AxiosRequestConfig = {
        ..._requestConfigWithBody,
        ...config,
        data: content_,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigWithBody?.headers,
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processWithBody(_response);
    });
}

function processWithBody(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

export function withClassInQuery(tst?: string | undefined, config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/query/ClassInQuery?";
    if (tst === null)
        throw new Error("The parameter 'tst' cannot be null.");
    else if (tst !== undefined)
        url_ += "Tst=" + encodeURIComponent("" + tst) + "&";
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigWithClassInQuery,
        ...config,
        method: "GET",
        url: url_,
        headers: {
            ..._requestConfigWithClassInQuery?.headers,
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processWithClassInQuery(_response);
    });
}

function processWithClassInQuery(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}
let _requestConfigJsonInQuery: Partial<AxiosRequestConfig> | null;
export function getJsonInQueryRequestConfig() {
  return _requestConfigJsonInQuery;
}
export function setJsonInQueryRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigJsonInQuery = value;
}
export function patchJsonInQueryRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigJsonInQuery = patch(_requestConfigJsonInQuery ?? {});
}

let _requestConfigJsonInNestedQuery: Partial<AxiosRequestConfig> | null;
export function getJsonInNestedQueryRequestConfig() {
  return _requestConfigJsonInNestedQuery;
}
export function setJsonInNestedQueryRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigJsonInNestedQuery = value;
}
export function patchJsonInNestedQueryRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigJsonInNestedQuery = patch(_requestConfigJsonInNestedQuery ?? {});
}

let _requestConfigDateOnlyInQuery: Partial<AxiosRequestConfig> | null;
export function getDateOnlyInQueryRequestConfig() {
  return _requestConfigDateOnlyInQuery;
}
export function setDateOnlyInQueryRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigDateOnlyInQuery = value;
}
export function patchDateOnlyInQueryRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigDateOnlyInQuery = patch(_requestConfigDateOnlyInQuery ?? {});
}

let _requestConfigDateTimeInQuery: Partial<AxiosRequestConfig> | null;
export function getDateTimeInQueryRequestConfig() {
  return _requestConfigDateTimeInQuery;
}
export function setDateTimeInQueryRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigDateTimeInQuery = value;
}
export function patchDateTimeInQueryRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigDateTimeInQuery = patch(_requestConfigDateTimeInQuery ?? {});
}

let _requestConfigArrayInQuery: Partial<AxiosRequestConfig> | null;
export function getArrayInQueryRequestConfig() {
  return _requestConfigArrayInQuery;
}
export function setArrayInQueryRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigArrayInQuery = value;
}
export function patchArrayInQueryRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigArrayInQuery = patch(_requestConfigArrayInQuery ?? {});
}

let _requestConfigDictionaryInQuery: Partial<AxiosRequestConfig> | null;
export function getDictionaryInQueryRequestConfig() {
  return _requestConfigDictionaryInQuery;
}
export function setDictionaryInQueryRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigDictionaryInQuery = value;
}
export function patchDictionaryInQueryRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigDictionaryInQuery = patch(_requestConfigDictionaryInQuery ?? {});
}

let _requestConfigDictionaryInJsonQuery: Partial<AxiosRequestConfig> | null;
export function getDictionaryInJsonQueryRequestConfig() {
  return _requestConfigDictionaryInJsonQuery;
}
export function setDictionaryInJsonQueryRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigDictionaryInJsonQuery = value;
}
export function patchDictionaryInJsonQueryRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigDictionaryInJsonQuery = patch(_requestConfigDictionaryInJsonQuery ?? {});
}

let _requestConfigGetViaPost: Partial<AxiosRequestConfig> | null;
export function getGetViaPostRequestConfig() {
  return _requestConfigGetViaPost;
}
export function setGetViaPostRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigGetViaPost = value;
}
export function patchGetViaPostRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigGetViaPost = patch(_requestConfigGetViaPost ?? {});
}

let _requestConfigNonGetViaPost: Partial<AxiosRequestConfig> | null;
export function getNonGetViaPostRequestConfig() {
  return _requestConfigNonGetViaPost;
}
export function setNonGetViaPostRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigNonGetViaPost = value;
}
export function patchNonGetViaPostRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigNonGetViaPost = patch(_requestConfigNonGetViaPost ?? {});
}

let _requestConfigWithBody: Partial<AxiosRequestConfig> | null;
export function getWithBodyRequestConfig() {
  return _requestConfigWithBody;
}
export function setWithBodyRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigWithBody = value;
}
export function patchWithBodyRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigWithBody = patch(_requestConfigWithBody ?? {});
}

let _requestConfigWithClassInQuery: Partial<AxiosRequestConfig> | null;
export function getWithClassInQueryRequestConfig() {
  return _requestConfigWithClassInQuery;
}
export function setWithClassInQueryRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigWithClassInQuery = value;
}
export function patchWithClassInQueryRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigWithClassInQuery = patch(_requestConfigWithClassInQuery ?? {});
}