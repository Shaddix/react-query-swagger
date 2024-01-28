//-----Types.File-----
export interface ApiResponse  {
  code?: number | null;
  type?: string | null;
  message?: string | null;
}
export function deserializeApiResponse(json: string): ApiResponse {
  const data = JSON.parse(json) as ApiResponse;
  initApiResponse(data);
  return data;
}
export function initApiResponse(_data: ApiResponse) {
    return _data;
}
export function serializeApiResponse(_data: ApiResponse | undefined) {
  if (_data) {
    _data = prepareSerializeApiResponse(_data as ApiResponse);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeApiResponse(_data: ApiResponse): ApiResponse {
  const data: Record<string, any> = { ..._data };
  return data as ApiResponse;
}
export interface Category  {
  id?: number | null;
  name?: string | null;
}
export function deserializeCategory(json: string): Category {
  const data = JSON.parse(json) as Category;
  initCategory(data);
  return data;
}
export function initCategory(_data: Category) {
    return _data;
}
export function serializeCategory(_data: Category | undefined) {
  if (_data) {
    _data = prepareSerializeCategory(_data as Category);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCategory(_data: Category): Category {
  const data: Record<string, any> = { ..._data };
  return data as Category;
}
export interface Pet  {
  id?: number | null;
  category?: Category | null;
  name: string;
  photoUrls: string[];
  tags?: Tag[] | null;
  /** pet status in the store */
  status?: PetStatus | null;
}
export function deserializePet(json: string): Pet {
  const data = JSON.parse(json) as Pet;
  initPet(data);
  return data;
}
export function initPet(_data: Pet) {
  if (_data) {
    _data.category = _data["category"] && initCategory(_data["category"]);
    _data.photoUrls = _data["photoUrls"];
    if (Array.isArray(_data["tags"])) {
      _data.tags = _data["tags"].map(item => 
        initTag(item)
      );
    }
    _data.status = _data["status"];
  }
  return _data;
}
export function serializePet(_data: Pet | undefined) {
  if (_data) {
    _data = prepareSerializePet(_data as Pet);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePet(_data: Pet): Pet {
  const data: Record<string, any> = { ..._data };
  data["category"] = _data.category && prepareSerializeCategory(_data.category);
  if (Array.isArray(_data.tags)) {
    data["tags"] = _data.tags.map(item => 
        prepareSerializeTag(item)
    );
  }
  return data as Pet;
}
export interface Tag  {
  id?: number | null;
  name?: string | null;
}
export function deserializeTag(json: string): Tag {
  const data = JSON.parse(json) as Tag;
  initTag(data);
  return data;
}
export function initTag(_data: Tag) {
    return _data;
}
export function serializeTag(_data: Tag | undefined) {
  if (_data) {
    _data = prepareSerializeTag(_data as Tag);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeTag(_data: Tag): Tag {
  const data: Record<string, any> = { ..._data };
  return data as Tag;
}
export interface Order  {
  id?: number | null;
  petId?: number | null;
  quantity?: number | null;
  shipDate?: Date | null;
  /** Order Status */
  status?: OrderStatus | null;
  complete?: boolean | null;
}
export function deserializeOrder(json: string): Order {
  const data = JSON.parse(json) as Order;
  initOrder(data);
  return data;
}
export function initOrder(_data: Order) {
  if (_data) {
    _data.shipDate = _data["shipDate"] ? new Date(_data["shipDate"].toString()) : <any>null;
    _data.status = _data["status"];
  }
  return _data;
}
export function serializeOrder(_data: Order | undefined) {
  if (_data) {
    _data = prepareSerializeOrder(_data as Order);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeOrder(_data: Order): Order {
  const data: Record<string, any> = { ..._data };
  data["shipDate"] = _data.shipDate && _data.shipDate.toISOString();
  return data as Order;
}
export interface User  {
  id?: number | null;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
  phone?: string | null;
  /** User Status */
  userStatus?: number | null;
}
export function deserializeUser(json: string): User {
  const data = JSON.parse(json) as User;
  initUser(data);
  return data;
}
export function initUser(_data: User) {
    return _data;
}
export function serializeUser(_data: User | undefined) {
  if (_data) {
    _data = prepareSerializeUser(_data as User);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeUser(_data: User): User {
  const data: Record<string, any> = { ..._data };
  return data as User;
}
export enum Status {
    Available = "available",
    Pending = "pending",
    Sold = "sold",
}
export enum PetStatus {
    Available = "available",
    Pending = "pending",
    Sold = "sold",
}
export enum OrderStatus {
    Placed = "placed",
    Approved = "approved",
    Delivered = "delivered",
}
import type { AxiosError } from 'axios'
export interface FileParameter {
    data: any;
    fileName: string;
}
export class ApiException extends Error {
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