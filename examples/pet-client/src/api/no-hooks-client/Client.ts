import * as Types from '../no-hooks-client';
import { throwException } from '../no-hooks-client';
import { getFetch, getBaseUrl, getJsonParseReviver } from './helpers';

/**
 * uploads an image
 * @param petId ID of pet to update
 * @param additionalMetadata (optional) Additional data to pass to server
 * @param file (optional) file to upload
 * @return successful operation
 */
export function uploadFile(petId: number, additionalMetadata?: string | null | undefined, file?: Types.FileParameter | null | undefined): Promise<Types.ApiResponse> {
    let url_ = getBaseUrl() + "/pet/{petId}/uploadImage";

    if (petId === undefined || petId === null)
      throw new Error("The parameter 'petId' must be defined.");
    url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
      url_ = url_.replace(/[?&]$/, "");

    const content_ = new FormData();
    if (additionalMetadata !== null && additionalMetadata !== undefined)
        content_.append("additionalMetadata", additionalMetadata.toString());
    if (file !== null && file !== undefined)
        content_.append("file", file.data, file.fileName ? file.fileName : "file");

    let options_: RequestInit = {
        body: content_,
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processUploadFile(_response);
    });
}

function processUploadFile(response: Response): Promise<Types.ApiResponse> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, getJsonParseReviver());
        result200 = Types.ApiResponse.fromJS(resultData200);
        return result200;
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<Types.ApiResponse>(null as any);
}

/**
 * Add a new pet to the store
 * @param body Pet object that needs to be added to the store
 */
export function addPet(body: Types.Pet): Promise<void> {
    let url_ = getBaseUrl() + "/pet";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processAddPet(_response);
    });
}

function processAddPet(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 405) {
        return response.text().then((_responseText) => {
        return throwException("Invalid input", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Update an existing pet
 * @param body Pet object that needs to be added to the store
 */
export function updatePet(body: Types.Pet): Promise<void> {
    let url_ = getBaseUrl() + "/pet";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
        body: content_,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processUpdatePet(_response);
    });
}

function processUpdatePet(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid ID supplied", status, _responseText, _headers);
        });
    } else if (status === 404) {
        return response.text().then((_responseText) => {
        return throwException("Pet not found", status, _responseText, _headers);
        });
    } else if (status === 405) {
        return response.text().then((_responseText) => {
        return throwException("Validation exception", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Finds Pets by status
 * @param status Status values that need to be considered for filter
 * @return successful operation
 */
export function findPetsByStatus(status: Types.Status[]): Promise<Types.Pet[]> {
    let url_ = getBaseUrl() + "/pet/findByStatus?";
      if (status === undefined || status === null)
        throw new Error("The parameter 'status' must be defined and cannot be null.");
      else
        status && status.forEach(item => { url_ += "status=" + encodeURIComponent("" + item) + "&"; });
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processFindPetsByStatus(_response);
    });
}

function processFindPetsByStatus(response: Response): Promise<Types.Pet[]> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, getJsonParseReviver());
        if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200)
                result200!.push(Types.Pet.fromJS(item));
        }
        else {
            result200 = <any>null;
        }
        return result200;
        });
    } else if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid status value", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<Types.Pet[]>(null as any);
}

/**
 * Finds Pets by tags
 * @param tags Tags to filter by
 * @return successful operation
 * @deprecated
 */
export function findPetsByTags(tags: string[]): Promise<Types.Pet[]> {
    let url_ = getBaseUrl() + "/pet/findByTags?";
      if (tags === undefined || tags === null)
        throw new Error("The parameter 'tags' must be defined and cannot be null.");
      else
        tags && tags.forEach(item => { url_ += "tags=" + encodeURIComponent("" + item) + "&"; });
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processFindPetsByTags(_response);
    });
}

function processFindPetsByTags(response: Response): Promise<Types.Pet[]> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, getJsonParseReviver());
        if (Array.isArray(resultData200)) {
            result200 = [] as any;
            for (let item of resultData200)
                result200!.push(Types.Pet.fromJS(item));
        }
        else {
            result200 = <any>null;
        }
        return result200;
        });
    } else if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid tag value", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<Types.Pet[]>(null as any);
}

/**
 * Find pet by ID
 * @param petId ID of pet to return
 * @return successful operation
 */
export function getPetById(petId: number): Promise<Types.Pet> {
    let url_ = getBaseUrl() + "/pet/{petId}";

    if (petId === undefined || petId === null)
      throw new Error("The parameter 'petId' must be defined.");
    url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processGetPetById(_response);
    });
}

function processGetPetById(response: Response): Promise<Types.Pet> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, getJsonParseReviver());
        result200 = Types.Pet.fromJS(resultData200);
        return result200;
        });
    } else if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid ID supplied", status, _responseText, _headers);
        });
    } else if (status === 404) {
        return response.text().then((_responseText) => {
        return throwException("Pet not found", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<Types.Pet>(null as any);
}

/**
 * Updates a pet in the store with form data
 * @param petId ID of pet that needs to be updated
 * @param name (optional) Updated name of the pet
 * @param status (optional) Updated status of the pet
 */
export function updatePetWithForm(petId: number, name?: string | null | undefined, status?: string | null | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/pet/{petId}";

    if (petId === undefined || petId === null)
      throw new Error("The parameter 'petId' must be defined.");
    url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
      url_ = url_.replace(/[?&]$/, "");

    let content_ = "";
    if (name !== undefined)
        content_ += encodeURIComponent("name") + "=" + encodeURIComponent("" + name) + "&";
    if (status !== undefined)
        content_ += encodeURIComponent("status") + "=" + encodeURIComponent("" + status) + "&";
    content_ = content_.replace(/&$/, "");

    let options_: RequestInit = {
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processUpdatePetWithForm(_response);
    });
}

function processUpdatePetWithForm(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 405) {
        return response.text().then((_responseText) => {
        return throwException("Invalid input", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Deletes a pet
 * @param petId Pet id to delete
 * @param api_key (optional) 
 */
export function deletePet(petId: number, api_key?: string | null | undefined): Promise<void> {
    let url_ = getBaseUrl() + "/pet/{petId}";

    if (petId === undefined || petId === null)
      throw new Error("The parameter 'petId' must be defined.");
    url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "DELETE",
        headers: {
            "api_key": api_key !== undefined && api_key !== null ? "" + api_key : "",
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processDeletePet(_response);
    });
}

function processDeletePet(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid ID supplied", status, _responseText, _headers);
        });
    } else if (status === 404) {
        return response.text().then((_responseText) => {
        return throwException("Pet not found", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Place an order for a pet
 * @param body order placed for purchasing the pet
 * @return successful operation
 */
export function placeOrder(body: Types.Order): Promise<Types.Order> {
    let url_ = getBaseUrl() + "/store/order";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processPlaceOrder(_response);
    });
}

function processPlaceOrder(response: Response): Promise<Types.Order> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, getJsonParseReviver());
        result200 = Types.Order.fromJS(resultData200);
        return result200;
        });
    } else if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid Order", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<Types.Order>(null as any);
}

/**
 * Find purchase order by ID
 * @param orderId ID of pet that needs to be fetched
 * @return successful operation
 */
export function getOrderById(orderId: number): Promise<Types.Order> {
    let url_ = getBaseUrl() + "/store/order/{orderId}";

    if (orderId === undefined || orderId === null)
      throw new Error("The parameter 'orderId' must be defined.");
    url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processGetOrderById(_response);
    });
}

function processGetOrderById(response: Response): Promise<Types.Order> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, getJsonParseReviver());
        result200 = Types.Order.fromJS(resultData200);
        return result200;
        });
    } else if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid ID supplied", status, _responseText, _headers);
        });
    } else if (status === 404) {
        return response.text().then((_responseText) => {
        return throwException("Order not found", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<Types.Order>(null as any);
}

/**
 * Delete purchase order by ID
 * @param orderId ID of the order that needs to be deleted
 */
export function deleteOrder(orderId: number): Promise<void> {
    let url_ = getBaseUrl() + "/store/order/{orderId}";

    if (orderId === undefined || orderId === null)
      throw new Error("The parameter 'orderId' must be defined.");
    url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "DELETE",
        headers: {
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processDeleteOrder(_response);
    });
}

function processDeleteOrder(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid ID supplied", status, _responseText, _headers);
        });
    } else if (status === 404) {
        return response.text().then((_responseText) => {
        return throwException("Order not found", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Returns pet inventories by status
 * @return successful operation
 */
export function getInventory(): Promise<{ [key: string]: number; }> {
    let url_ = getBaseUrl() + "/store/inventory";
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processGetInventory(_response);
    });
}

function processGetInventory(response: Response): Promise<{ [key: string]: number; }> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, getJsonParseReviver());
        if (resultData200) {
            result200 = {} as any;
            for (let key in resultData200) {
                if (resultData200.hasOwnProperty(key))
                    (<any>result200)![key] = resultData200[key] !== undefined ? resultData200[key] : <any>null;
            }
        }
        else {
            result200 = <any>null;
        }
        return result200;
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<{ [key: string]: number; }>(null as any);
}

/**
 * Creates list of users with given input array
 * @param body List of user object
 * @return successful operation
 */
export function createUsersWithArrayInput(body: Types.User[]): Promise<void> {
    let url_ = getBaseUrl() + "/user/createWithArray";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processCreateUsersWithArrayInput(_response);
    });
}

function processCreateUsersWithArrayInput(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    {
        return response.text().then((_responseText) => {
        return;
        });
    }
}

/**
 * Creates list of users with given input array
 * @param body List of user object
 * @return successful operation
 */
export function createUsersWithListInput(body: Types.User[]): Promise<void> {
    let url_ = getBaseUrl() + "/user/createWithList";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processCreateUsersWithListInput(_response);
    });
}

function processCreateUsersWithListInput(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    {
        return response.text().then((_responseText) => {
        return;
        });
    }
}

/**
 * Get user by user name
 * @param username The name that needs to be fetched. Use user1 for testing.
 * @return successful operation
 */
export function getUserByName(username: string): Promise<Types.User> {
    let url_ = getBaseUrl() + "/user/{username}";

    if (username === undefined || username === null)
      throw new Error("The parameter 'username' must be defined.");
    url_ = url_.replace("{username}", encodeURIComponent("" + username));
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processGetUserByName(_response);
    });
}

function processGetUserByName(response: Response): Promise<Types.User> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, getJsonParseReviver());
        result200 = Types.User.fromJS(resultData200);
        return result200;
        });
    } else if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid username supplied", status, _responseText, _headers);
        });
    } else if (status === 404) {
        return response.text().then((_responseText) => {
        return throwException("User not found", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<Types.User>(null as any);
}

/**
 * Updated user
 * @param username name that need to be updated
 * @param body Updated user object
 */
export function updateUser(username: string, body: Types.User): Promise<void> {
    let url_ = getBaseUrl() + "/user/{username}";

    if (username === undefined || username === null)
      throw new Error("The parameter 'username' must be defined.");
    url_ = url_.replace("{username}", encodeURIComponent("" + username));
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
        body: content_,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processUpdateUser(_response);
    });
}

function processUpdateUser(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid user supplied", status, _responseText, _headers);
        });
    } else if (status === 404) {
        return response.text().then((_responseText) => {
        return throwException("User not found", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Delete user
 * @param username The name that needs to be deleted
 */
export function deleteUser(username: string): Promise<void> {
    let url_ = getBaseUrl() + "/user/{username}";

    if (username === undefined || username === null)
      throw new Error("The parameter 'username' must be defined.");
    url_ = url_.replace("{username}", encodeURIComponent("" + username));
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "DELETE",
        headers: {
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processDeleteUser(_response);
    });
}

function processDeleteUser(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid username supplied", status, _responseText, _headers);
        });
    } else if (status === 404) {
        return response.text().then((_responseText) => {
        return throwException("User not found", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<void>(null as any);
}

/**
 * Logs user into the system
 * @param username The user name for login
 * @param password The password for login in clear text
 * @return successful operation
 */
export function loginUser(username: string, password: string): Promise<string> {
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

    let options_: RequestInit = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processLoginUser(_response);
    });
}

function processLoginUser(response: Response): Promise<string> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, getJsonParseReviver());
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
        return result200;
        });
    } else if (status === 400) {
        return response.text().then((_responseText) => {
        return throwException("Invalid username/password supplied", status, _responseText, _headers);
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<string>(null as any);
}

/**
 * Logs out current logged in user session
 * @return successful operation
 */
export function logoutUser(): Promise<void> {
    let url_ = getBaseUrl() + "/user/logout";
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "GET",
        headers: {
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processLogoutUser(_response);
    });
}

function processLogoutUser(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    {
        return response.text().then((_responseText) => {
        return;
        });
    }
}

/**
 * Create user
 * @param body Created user object
 * @return successful operation
 */
export function createUser(body: Types.User): Promise<void> {
    let url_ = getBaseUrl() + "/user";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processCreateUser(_response);
    });
}

function processCreateUser(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    {
        return response.text().then((_responseText) => {
        return;
        });
    }
}