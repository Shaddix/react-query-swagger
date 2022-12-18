//-----ReactQueryFile-----
import { useQuery, useMutation } from '@tanstack/react-query';
import type { UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import type { QueryMetaContextValue } from 'react-query-swagger';
import { QueryMetaContext } from 'react-query-swagger';
import { useContext } from 'react';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

const _resultTypesByQueryKey: Record<string, () => { init(data: any): void }> = {};
export function addResultTypeFactory(typeName: string, factory: () => { init(data: any): void }) {
  _resultTypesByQueryKey[typeName] = factory;
}
export function getResultTypeFactory(typeName: string) {
  return _resultTypesByQueryKey[typeName];
}

export function trimArrayEnd<T>(arr: T[]): T[] {
    let lastDefinedValueIndex = arr.length - 1;
    while (lastDefinedValueIndex >= 0) {
        if (arr[lastDefinedValueIndex] === undefined) {
            lastDefinedValueIndex--;
        } else {
            break;
        }
    }
    return lastDefinedValueIndex === arr.length - 1 ? arr : arr.slice(0, lastDefinedValueIndex + 1);
}

export function addMetaToOptions<T extends {meta?: QueryMeta | MutationMeta | undefined}>(options: T | undefined, metaContext: QueryMetaContextValue): T | undefined {
  if (metaContext.metaFn) {
    options = options ?? { } as any;
    options!.meta = {
      ...metaContext.metaFn(),
      ...options!.meta,
    };
  }
  return options;
}

/*
  Determines if first parameter of useSomethingQuery is an object with query parameters, or it's a regular parameter
  Returns true if parameter is Object
  Returns false if parameter is number/string/boolean/Date or Array
*/
export function isParameterObject(param: unknown) {
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
  Returns an instance of Axios either created by a configured factory or a default one
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