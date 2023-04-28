//-----Types.File-----
export interface DummyDto  {
  test?: string;
  dateOnly?: Date;
  dateTime?: Date;
}
export function deserializeDummyDto(json: string): DummyDto {
  const data = JSON.parse(json) as DummyDto;
  initDummyDto(data);
  return data;
}
export function initDummyDto(_data: DummyDto) {
  if (_data) {
    _data.dateOnly = _data["dateOnly"] ? parseDateOnly(_data["dateOnly"].toString()) : <any>null;
    _data.dateTime = _data["dateTime"] ? new Date(_data["dateTime"].toString()) : <any>null;
  }
  return _data;
}
export function serializeDummyDto(_data: DummyDto) {
  const data = prepareSerializeDummyDto(_data as DummyDto);
  return JSON.stringify(data);
}
export function prepareSerializeDummyDto(_data: DummyDto): DummyDto {
  const data: Record<string, any> = { ..._data };
  data["dateOnly"] = _data.dateOnly && formatDate(_data.dateOnly);
  data["dateTime"] = _data.dateTime && _data.dateTime.toISOString();
  return data as DummyDto;
}
export function formatDate(d: Date) {
    return d.getFullYear() + '-' + 
        (d.getMonth() < 9 ? ('0' + (d.getMonth()+1)) : (d.getMonth()+1)) + '-' +
        (d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate());
}
export function parseDateOnly(s: string) {
    const date = new Date(s);
    return new Date(date.getTime() + 
        date.getTimezoneOffset() * 60000);
}
import type { AxiosError } from 'axios'
export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;
    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    protected isApiException = true;
    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}
export function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}
export function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}
//-----/Types.File-----