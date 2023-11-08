//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../axios-client-minimal-sample.types';
import { useQuery, useMutation } from '@tanstack/react-query';
import type { UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { trimArrayEnd, isParameterObject, getBaseUrl, addMetaToOptions } from './helpers';
import type { QueryMetaContextValue } from 'react-query-swagger';
import { QueryMetaContext } from 'react-query-swagger';
import { useContext } from 'react';
import * as Client from './ArrayReturnClient'
export { Client };
import type { AxiosRequestConfig } from 'axios';



export function stringUrl(): string {
  let url_ = getBaseUrl() + "/array/String";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let stringDefaultOptions: Omit<UseQueryOptions<string[], unknown, string[]>, 'queryKey'> = {
  queryFn: __string,
};
export function getStringDefaultOptions() {
  return stringDefaultOptions;
};
export function setStringDefaultOptions(options: typeof stringDefaultOptions) {
  stringDefaultOptions = options;
}

export function stringQueryKey(): QueryKey;
export function stringQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'ArrayReturnClient',
      'string',
    ]);
}
function __string() {
  return Client.string(
    );
}

export function useStringQuery<TSelectData = string[], TError = unknown>(options?: Omit<UseQueryOptions<string[], TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useStringQuery<TSelectData = string[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<string[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<string[], TError, TSelectData>({
    queryFn: __string,
    queryKey: stringQueryKey(),
    ...stringDefaultOptions as unknown as Omit<UseQueryOptions<string[], TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setStringData(queryClient: QueryClient, updater: (data: string[] | undefined) => string[], ) {
  queryClient.setQueryData(stringQueryKey(),
    updater
  );
}

export function setStringDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: string[] | undefined) => string[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function numberUrl(): string {
  let url_ = getBaseUrl() + "/array/Number";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let numberDefaultOptions: Omit<UseQueryOptions<number[], unknown, number[]>, 'queryKey'> = {
  queryFn: __number,
};
export function getNumberDefaultOptions() {
  return numberDefaultOptions;
};
export function setNumberDefaultOptions(options: typeof numberDefaultOptions) {
  numberDefaultOptions = options;
}

export function numberQueryKey(): QueryKey;
export function numberQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'ArrayReturnClient',
      'number',
    ]);
}
function __number() {
  return Client.number(
    );
}

export function useNumberQuery<TSelectData = number[], TError = unknown>(options?: Omit<UseQueryOptions<number[], TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useNumberQuery<TSelectData = number[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<number[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<number[], TError, TSelectData>({
    queryFn: __number,
    queryKey: numberQueryKey(),
    ...numberDefaultOptions as unknown as Omit<UseQueryOptions<number[], TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setNumberData(queryClient: QueryClient, updater: (data: number[] | undefined) => number[], ) {
  queryClient.setQueryData(numberQueryKey(),
    updater
  );
}

export function setNumberDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: number[] | undefined) => number[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function booleanUrl(): string {
  let url_ = getBaseUrl() + "/array/Bool";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let booleanDefaultOptions: Omit<UseQueryOptions<boolean[], unknown, boolean[]>, 'queryKey'> = {
  queryFn: __boolean,
};
export function getBooleanDefaultOptions() {
  return booleanDefaultOptions;
};
export function setBooleanDefaultOptions(options: typeof booleanDefaultOptions) {
  booleanDefaultOptions = options;
}

export function booleanQueryKey(): QueryKey;
export function booleanQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'ArrayReturnClient',
      'boolean',
    ]);
}
function __boolean() {
  return Client.boolean_(
    );
}

export function useBooleanQuery<TSelectData = boolean[], TError = unknown>(options?: Omit<UseQueryOptions<boolean[], TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useBooleanQuery<TSelectData = boolean[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<boolean[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<boolean[], TError, TSelectData>({
    queryFn: __boolean,
    queryKey: booleanQueryKey(),
    ...booleanDefaultOptions as unknown as Omit<UseQueryOptions<boolean[], TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setBooleanData(queryClient: QueryClient, updater: (data: boolean[] | undefined) => boolean[], ) {
  queryClient.setQueryData(booleanQueryKey(),
    updater
  );
}

export function setBooleanDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: boolean[] | undefined) => boolean[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dateOnlyUrl(): string {
  let url_ = getBaseUrl() + "/array/DateOnly";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dateOnlyDefaultOptions: Omit<UseQueryOptions<Date[], unknown, Date[]>, 'queryKey'> = {
  queryFn: __dateOnly,
};
export function getDateOnlyDefaultOptions() {
  return dateOnlyDefaultOptions;
};
export function setDateOnlyDefaultOptions(options: typeof dateOnlyDefaultOptions) {
  dateOnlyDefaultOptions = options;
}

export function dateOnlyQueryKey(): QueryKey;
export function dateOnlyQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'ArrayReturnClient',
      'dateOnly',
    ]);
}
function __dateOnly() {
  return Client.dateOnly(
    );
}

export function useDateOnlyQuery<TSelectData = Date[], TError = unknown>(options?: Omit<UseQueryOptions<Date[], TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDateOnlyQuery<TSelectData = Date[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Date[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Date[], TError, TSelectData>({
    queryFn: __dateOnly,
    queryKey: dateOnlyQueryKey(),
    ...dateOnlyDefaultOptions as unknown as Omit<UseQueryOptions<Date[], TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setDateOnlyData(queryClient: QueryClient, updater: (data: Date[] | undefined) => Date[], ) {
  queryClient.setQueryData(dateOnlyQueryKey(),
    updater
  );
}

export function setDateOnlyDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Date[] | undefined) => Date[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dateTimeUrl(): string {
  let url_ = getBaseUrl() + "/array/DateTime";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dateTimeDefaultOptions: Omit<UseQueryOptions<Date[], unknown, Date[]>, 'queryKey'> = {
  queryFn: __dateTime,
};
export function getDateTimeDefaultOptions() {
  return dateTimeDefaultOptions;
};
export function setDateTimeDefaultOptions(options: typeof dateTimeDefaultOptions) {
  dateTimeDefaultOptions = options;
}

export function dateTimeQueryKey(): QueryKey;
export function dateTimeQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'ArrayReturnClient',
      'dateTime',
    ]);
}
function __dateTime() {
  return Client.dateTime(
    );
}

export function useDateTimeQuery<TSelectData = Date[], TError = unknown>(options?: Omit<UseQueryOptions<Date[], TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDateTimeQuery<TSelectData = Date[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Date[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Date[], TError, TSelectData>({
    queryFn: __dateTime,
    queryKey: dateTimeQueryKey(),
    ...dateTimeDefaultOptions as unknown as Omit<UseQueryOptions<Date[], TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setDateTimeData(queryClient: QueryClient, updater: (data: Date[] | undefined) => Date[], ) {
  queryClient.setQueryData(dateTimeQueryKey(),
    updater
  );
}

export function setDateTimeDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Date[] | undefined) => Date[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dummyDtoUrl(): string {
  let url_ = getBaseUrl() + "/array/Dummy";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dummyDtoDefaultOptions: Omit<UseQueryOptions<Types.DummyDto[], unknown, Types.DummyDto[]>, 'queryKey'> = {
  queryFn: __dummyDto,
};
export function getDummyDtoDefaultOptions() {
  return dummyDtoDefaultOptions;
};
export function setDummyDtoDefaultOptions(options: typeof dummyDtoDefaultOptions) {
  dummyDtoDefaultOptions = options;
}

export function dummyDtoQueryKey(): QueryKey;
export function dummyDtoQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'ArrayReturnClient',
      'dummyDto',
    ]);
}
function __dummyDto() {
  return Client.dummyDto(
    );
}

export function useDummyDtoQuery<TSelectData = Types.DummyDto[], TError = unknown>(options?: Omit<UseQueryOptions<Types.DummyDto[], TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDummyDtoQuery<TSelectData = Types.DummyDto[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.DummyDto[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Types.DummyDto[], TError, TSelectData>({
    queryFn: __dummyDto,
    queryKey: dummyDtoQueryKey(),
    ...dummyDtoDefaultOptions as unknown as Omit<UseQueryOptions<Types.DummyDto[], TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setDummyDtoData(queryClient: QueryClient, updater: (data: Types.DummyDto[] | undefined) => Types.DummyDto[], ) {
  queryClient.setQueryData(dummyDtoQueryKey(),
    updater
  );
}

export function setDummyDtoDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.DummyDto[] | undefined) => Types.DummyDto[]) {
  queryClient.setQueryData(queryKey, updater);
}