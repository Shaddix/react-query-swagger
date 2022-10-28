import * as Types from '../no-hooks-client';

import { Client as ClientClass } from '../no-hooks-client';
import { createClient, getBaseUrl } from './helpers';

type FindPetsByStatusQueryParameters = {
    status: Types.Status[];
};

type FindPetsByTagsQueryParameters = {
    tags: string[];
};

type GetPetByIdQueryParameters = {
    petId: number;
};

type GetOrderByIdQueryParameters = {
    orderId: number;
};

type GetUserByNameQueryParameters = {
    username: string;
};

type LoginUserQueryParameters = {
    username: string;
    password: string;
};

function baseUrl() {
  return getBaseUrl() ?? '' + '/v2';
}

function Client() {
  const client = createClient(ClientClass);
  return client;
}

                        

export function findPetsByStatusUrl(status: Types.Status[]): string {
  let url_ = getBaseUrl() + "/pet/findByStatus?";
  if (status === undefined || status === null)
    throw new Error("The parameter 'status' must be defined and cannot be null.");
  else
    status && status.forEach(item => { url_ += "status=" + encodeURIComponent("" + item) + "&"; });
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

                        

export function findPetsByTagsUrl(tags: string[]): string {
  let url_ = getBaseUrl() + "/pet/findByTags?";
  if (tags === undefined || tags === null)
    throw new Error("The parameter 'tags' must be defined and cannot be null.");
  else
    tags && tags.forEach(item => { url_ += "tags=" + encodeURIComponent("" + item) + "&"; });
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

                        

export function getPetByIdUrl(petId: number): string {
  let url_ = getBaseUrl() + "/pet/{petId}";

if (petId === undefined || petId === null)
  throw new Error("The parameter 'petId' must be defined.");
url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

                                    

export function getOrderByIdUrl(orderId: number): string {
  let url_ = getBaseUrl() + "/store/order/{orderId}";

if (orderId === undefined || orderId === null)
  throw new Error("The parameter 'orderId' must be defined.");
url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

                            

export function getInventoryUrl(): string {
  let url_ = getBaseUrl() + "/store/inventory";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

                                

export function getUserByNameUrl(username: string): string {
  let url_ = getBaseUrl() + "/user/{username}";

if (username === undefined || username === null)
  throw new Error("The parameter 'username' must be defined.");
url_ = url_.replace("{username}", encodeURIComponent("" + username));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

                                

export function loginUserUrl(username: string, password: string): string {
  let url_ = getBaseUrl() + "/user/login?";
  if (username === undefined || username === null)
    throw new Error("The parameter 'username' must be defined and cannot be null.");
  else
    url_ += "username=" + encodeURIComponent("" + username) + "&";
  if (password === undefined || password === null)
    throw new Error("The parameter 'password' must be defined and cannot be null.");
  else
    url_ += "password=" + encodeURIComponent("" + password) + "&";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

                        

export function logoutUserUrl(): string {
  let url_ = getBaseUrl() + "/user/logout";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

                
