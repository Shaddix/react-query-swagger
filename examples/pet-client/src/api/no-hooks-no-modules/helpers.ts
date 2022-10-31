//-----ReactQueryFile-----
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';
type ClientFactoryFunction = <T>(type: (new (...params: any[]) => T)) => T;
let _clientFactoryFunction: ClientFactoryFunction = <T>(type: (new (...params: any[]) => T)) => {
  const params = [_baseUrl, _fetchFactory()];
  return new type(...params);
};
/*
  Overrides default Client factory function
*/
export function setClientFactory(value: ClientFactoryFunction) {
  _clientFactoryFunction = value;
}

/*
  Returns current Client factory function
*/
export function getClientFactory() {
  return _clientFactoryFunction;
}

/*
  Function that will be called from `useQuery...` methods to get a client of certain type
*/
export function createClient<T>(type: (new () => T)) {
  return _clientFactoryFunction(type);
}let _jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
export function getJsonParseReviver() {
  return _jsonParseReviver;
}
export function setJsonParseReviver(value: ((key: string, value: any) => any) | undefined) {
  _jsonParseReviver = value;
}
/*
  Determines if first parameter of useSomethingQuery is an object with query parameters, or it's a regular parameter
  Returns true if parameter is Object
  Returns false if parameter is number/string/boolean/Date or Array
*/
function isParameterObject(param: unknown) {
    if (param === null || param === undefined) return false;
    if (param instanceof Array) return false;
    const isObject = typeof param === 'object';
    if (!isObject) return false;
    if (param instanceof Date) return false;
    return true;
}

let _baseUrl = '';
/*
  Returns the base URL for http requests
*/
export function getBaseUrl(): string {
  return _baseUrl;
}

/*
  Sets the base URL for http requests
*/
export function setBaseUrl(baseUrl: string) {
  _baseUrl = baseUrl;
}

let _fetchFactory = () => <any>window;
/*
  Returns currently used factory for fetch
*/
export function getFetch(): { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }  {
  return _fetchFactory?.() ?? { fetch };
}
/*
  Sets currently used factory for fetch
*/
export function setFetchFactory(factory: () => { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
  _fetchFactory = factory;
}
//-----/ReactQueryFile----