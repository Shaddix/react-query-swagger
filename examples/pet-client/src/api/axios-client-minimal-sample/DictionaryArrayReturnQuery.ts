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
import * as Client from './DictionaryArrayReturnClient'
export { Client };
import type { AxiosRequestConfig } from 'axios';



export function stringUrl(): string {
  let url_ = getBaseUrl() + "/dictionary-array/String";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let stringDefaultOptions: Omit<UseQueryOptions<{ [key: string]: string[]; }, unknown, { [key: string]: string[]; }>, 'queryKey'> = {
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
      'DictionaryArrayReturnClient',
      'string',
    ]);
}
function __string(context: QueryFunctionContext, axiosConfig?: AxiosRequestConfig | undefined) {
  return Client.string(
axiosConfig    );
}

export function useStringQuery<TSelectData = { [key: string]: string[]; }, TError = unknown>(options?: Omit<UseQueryOptions<{ [key: string]: string[]; }, TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useStringQuery<TSelectData = { [key: string]: string[]; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: string[]; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined = undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<{ [key: string]: string[]; }, TError, TSelectData>({
    queryFn: axiosConfig ? (context) => __string(context, axiosConfig) : __string,
    queryKey: stringQueryKey(),
    ...stringDefaultOptions as unknown as Omit<UseQueryOptions<{ [key: string]: string[]; }, TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setStringData(queryClient: QueryClient, updater: (data: { [key: string]: string[]; } | undefined) => { [key: string]: string[]; }, ) {
  queryClient.setQueryData(stringQueryKey(),
    updater
  );
}

export function setStringDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: string[]; } | undefined) => { [key: string]: string[]; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function numberUrl(): string {
  let url_ = getBaseUrl() + "/dictionary-array/Number";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let numberDefaultOptions: Omit<UseQueryOptions<{ [key: string]: number[]; }, unknown, { [key: string]: number[]; }>, 'queryKey'> = {
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
      'DictionaryArrayReturnClient',
      'number',
    ]);
}
function __number(context: QueryFunctionContext, axiosConfig?: AxiosRequestConfig | undefined) {
  return Client.number(
axiosConfig    );
}

export function useNumberQuery<TSelectData = { [key: string]: number[]; }, TError = unknown>(options?: Omit<UseQueryOptions<{ [key: string]: number[]; }, TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useNumberQuery<TSelectData = { [key: string]: number[]; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: number[]; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined = undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<{ [key: string]: number[]; }, TError, TSelectData>({
    queryFn: axiosConfig ? (context) => __number(context, axiosConfig) : __number,
    queryKey: numberQueryKey(),
    ...numberDefaultOptions as unknown as Omit<UseQueryOptions<{ [key: string]: number[]; }, TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setNumberData(queryClient: QueryClient, updater: (data: { [key: string]: number[]; } | undefined) => { [key: string]: number[]; }, ) {
  queryClient.setQueryData(numberQueryKey(),
    updater
  );
}

export function setNumberDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: number[]; } | undefined) => { [key: string]: number[]; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function booleanUrl(): string {
  let url_ = getBaseUrl() + "/dictionary-array/Bool";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let booleanDefaultOptions: Omit<UseQueryOptions<{ [key: string]: boolean[]; }, unknown, { [key: string]: boolean[]; }>, 'queryKey'> = {
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
      'DictionaryArrayReturnClient',
      'boolean',
    ]);
}
function __boolean(context: QueryFunctionContext, axiosConfig?: AxiosRequestConfig | undefined) {
  return Client.boolean_(
axiosConfig    );
}

export function useBooleanQuery<TSelectData = { [key: string]: boolean[]; }, TError = unknown>(options?: Omit<UseQueryOptions<{ [key: string]: boolean[]; }, TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useBooleanQuery<TSelectData = { [key: string]: boolean[]; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: boolean[]; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined = undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<{ [key: string]: boolean[]; }, TError, TSelectData>({
    queryFn: axiosConfig ? (context) => __boolean(context, axiosConfig) : __boolean,
    queryKey: booleanQueryKey(),
    ...booleanDefaultOptions as unknown as Omit<UseQueryOptions<{ [key: string]: boolean[]; }, TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setBooleanData(queryClient: QueryClient, updater: (data: { [key: string]: boolean[]; } | undefined) => { [key: string]: boolean[]; }, ) {
  queryClient.setQueryData(booleanQueryKey(),
    updater
  );
}

export function setBooleanDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: boolean[]; } | undefined) => { [key: string]: boolean[]; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dateOnlyUrl(): string {
  let url_ = getBaseUrl() + "/dictionary-array/DateOnly";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dateOnlyDefaultOptions: Omit<UseQueryOptions<{ [key: string]: Date[]; }, unknown, { [key: string]: Date[]; }>, 'queryKey'> = {
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
      'DictionaryArrayReturnClient',
      'dateOnly',
    ]);
}
function __dateOnly(context: QueryFunctionContext, axiosConfig?: AxiosRequestConfig | undefined) {
  return Client.dateOnly(
axiosConfig    );
}

export function useDateOnlyQuery<TSelectData = { [key: string]: Date[]; }, TError = unknown>(options?: Omit<UseQueryOptions<{ [key: string]: Date[]; }, TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDateOnlyQuery<TSelectData = { [key: string]: Date[]; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: Date[]; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined = undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<{ [key: string]: Date[]; }, TError, TSelectData>({
    queryFn: axiosConfig ? (context) => __dateOnly(context, axiosConfig) : __dateOnly,
    queryKey: dateOnlyQueryKey(),
    ...dateOnlyDefaultOptions as unknown as Omit<UseQueryOptions<{ [key: string]: Date[]; }, TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setDateOnlyData(queryClient: QueryClient, updater: (data: { [key: string]: Date[]; } | undefined) => { [key: string]: Date[]; }, ) {
  queryClient.setQueryData(dateOnlyQueryKey(),
    updater
  );
}

export function setDateOnlyDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: Date[]; } | undefined) => { [key: string]: Date[]; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dateTimeUrl(): string {
  let url_ = getBaseUrl() + "/dictionary-array/DateTime";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dateTimeDefaultOptions: Omit<UseQueryOptions<{ [key: string]: Date[]; }, unknown, { [key: string]: Date[]; }>, 'queryKey'> = {
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
      'DictionaryArrayReturnClient',
      'dateTime',
    ]);
}
function __dateTime(context: QueryFunctionContext, axiosConfig?: AxiosRequestConfig | undefined) {
  return Client.dateTime(
axiosConfig    );
}

export function useDateTimeQuery<TSelectData = { [key: string]: Date[]; }, TError = unknown>(options?: Omit<UseQueryOptions<{ [key: string]: Date[]; }, TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDateTimeQuery<TSelectData = { [key: string]: Date[]; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: Date[]; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined = undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<{ [key: string]: Date[]; }, TError, TSelectData>({
    queryFn: axiosConfig ? (context) => __dateTime(context, axiosConfig) : __dateTime,
    queryKey: dateTimeQueryKey(),
    ...dateTimeDefaultOptions as unknown as Omit<UseQueryOptions<{ [key: string]: Date[]; }, TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setDateTimeData(queryClient: QueryClient, updater: (data: { [key: string]: Date[]; } | undefined) => { [key: string]: Date[]; }, ) {
  queryClient.setQueryData(dateTimeQueryKey(),
    updater
  );
}

export function setDateTimeDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: Date[]; } | undefined) => { [key: string]: Date[]; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dummyDtoUrl(): string {
  let url_ = getBaseUrl() + "/dictionary-array/Dummy";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dummyDtoDefaultOptions: Omit<UseQueryOptions<{ [key: string]: Types.DummyDto[]; }, unknown, { [key: string]: Types.DummyDto[]; }>, 'queryKey'> = {
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
      'DictionaryArrayReturnClient',
      'dummyDto',
    ]);
}
function __dummyDto(context: QueryFunctionContext, axiosConfig?: AxiosRequestConfig | undefined) {
  return Client.dummyDto(
axiosConfig    );
}

export function useDummyDtoQuery<TSelectData = { [key: string]: Types.DummyDto[]; }, TError = unknown>(options?: Omit<UseQueryOptions<{ [key: string]: Types.DummyDto[]; }, TError, TSelectData>, 'queryKey'>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDummyDtoQuery<TSelectData = { [key: string]: Types.DummyDto[]; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: Types.DummyDto[]; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined = undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<{ [key: string]: Types.DummyDto[]; }, TError, TSelectData>({
    queryFn: axiosConfig ? (context) => __dummyDto(context, axiosConfig) : __dummyDto,
    queryKey: dummyDtoQueryKey(),
    ...dummyDtoDefaultOptions as unknown as Omit<UseQueryOptions<{ [key: string]: Types.DummyDto[]; }, TError, TSelectData>, 'queryKey'>,
    ...options,
  });
}

export function setDummyDtoData(queryClient: QueryClient, updater: (data: { [key: string]: Types.DummyDto[]; } | undefined) => { [key: string]: Types.DummyDto[]; }, ) {
  queryClient.setQueryData(dummyDtoQueryKey(),
    updater
  );
}

export function setDummyDtoDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: Types.DummyDto[]; } | undefined) => { [key: string]: Types.DummyDto[]; }) {
  queryClient.setQueryData(queryKey, updater);
}