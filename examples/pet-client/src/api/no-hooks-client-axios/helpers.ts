//-----ReactQueryFile-----
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

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

let _axiosFactory: () => AxiosInstance | undefined = () => undefined;
/*
  Returns currently used factory for Axios instances
*/
export function getAxios() {
  return _axiosFactory?.() ?? axios;
}
/*
  Sets the factory for Axios instances
*/
export function setAxiosFactory(factory: () => AxiosInstance) {
  _axiosFactory = factory;
}
//-----/ReactQueryFile----