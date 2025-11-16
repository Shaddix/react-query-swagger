//-----Types.File-----
export interface ProblemDetails  {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}
export function deserializeProblemDetails(json: string): ProblemDetails {
  const data = JSON.parse(json) as ProblemDetails;
  initProblemDetails(data);
  return data;
}
export function initProblemDetails(_data: ProblemDetails) {
    return _data;
}
export function serializeProblemDetails(_data: ProblemDetails | undefined) {
  if (_data) {
    _data = prepareSerializeProblemDetails(_data as ProblemDetails);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeProblemDetails(_data: ProblemDetails): ProblemDetails {
  const data: Record<string, any> = { ..._data };
  return data as ProblemDetails;
}
export interface HttpValidationProblemDetails extends ProblemDetails  {
  errors: { [key: string]: string[]; };
  [key: string]: any;
}
export function deserializeHttpValidationProblemDetails(json: string): HttpValidationProblemDetails {
  const data = JSON.parse(json) as HttpValidationProblemDetails;
  initHttpValidationProblemDetails(data);
  return data;
}
export function initHttpValidationProblemDetails(_data: HttpValidationProblemDetails) {
  initProblemDetails(_data);
    return _data;
}
export function serializeHttpValidationProblemDetails(_data: HttpValidationProblemDetails | undefined) {
  if (_data) {
    _data = prepareSerializeHttpValidationProblemDetails(_data as HttpValidationProblemDetails);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeHttpValidationProblemDetails(_data: HttpValidationProblemDetails): HttpValidationProblemDetails {
  const data = prepareSerializeProblemDetails(_data as HttpValidationProblemDetails) as Record<string, any>;
  return data as HttpValidationProblemDetails;
}
/** A ProblemDetails for validation errors. */
export interface ValidationProblemDetails extends HttpValidationProblemDetails  {
  /** Gets or sets the validation errors associated with this instance of ValidationProblemDetails. */
  errors: { [key: string]: string[]; };
  [key: string]: any;
}
export function deserializeValidationProblemDetails(json: string): ValidationProblemDetails {
  const data = JSON.parse(json) as ValidationProblemDetails;
  initValidationProblemDetails(data);
  return data;
}
export function initValidationProblemDetails(_data: ValidationProblemDetails) {
  initHttpValidationProblemDetails(_data);
    return _data;
}
export function serializeValidationProblemDetails(_data: ValidationProblemDetails | undefined) {
  if (_data) {
    _data = prepareSerializeValidationProblemDetails(_data as ValidationProblemDetails);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeValidationProblemDetails(_data: ValidationProblemDetails): ValidationProblemDetails {
  const data = prepareSerializeHttpValidationProblemDetails(_data as ValidationProblemDetails) as Record<string, any>;
  return data as ValidationProblemDetails;
}
export interface VariableDto  {
  id: number;
  name: string;
  actualUrl: string | null;
  actualValue: string;
  variableType: VariableType;
  urlType: UrlType | null;
  documents: VariableDocumentDto[] | null;
  basedOnDocumentId: number | null;
  documentId: number | null;
  isEnormous: boolean;
  isTable: boolean;
}
export function deserializeVariableDto(json: string): VariableDto {
  const data = JSON.parse(json) as VariableDto;
  initVariableDto(data);
  return data;
}
export function initVariableDto(_data: VariableDto) {
  if (_data) {
    _data.variableType = _data["variableType"];
    _data.urlType = _data["urlType"];
    if (Array.isArray(_data["documents"])) {
      _data.documents = _data["documents"].map(item => 
        initVariableDocumentDto(item)
      );
    }
  }
  return _data;
}
export function serializeVariableDto(_data: VariableDto | undefined) {
  if (_data) {
    _data = prepareSerializeVariableDto(_data as VariableDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeVariableDto(_data: VariableDto): VariableDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.documents)) {
    data["documents"] = _data.documents.map(item => 
        prepareSerializeVariableDocumentDto(item)
    );
  }
  return data as VariableDto;
}
export enum VariableType {
    Manual = "Manual",
    Auto = "Auto",
}
export enum UrlType {
    Default = "Default",
    Queries = "Queries",
    ServiceBus = "ServiceBus",
    Swagger = "Swagger",
    Dot = "Dot",
    Csproj = "Csproj",
    PackageJson = "PackageJson",
    Dgml = "Dgml",
    Tokyo = "Tokyo",
}
export interface VariableDocumentDto  {
  id: number;
  name: string;
}
export function deserializeVariableDocumentDto(json: string): VariableDocumentDto {
  const data = JSON.parse(json) as VariableDocumentDto;
  initVariableDocumentDto(data);
  return data;
}
export function initVariableDocumentDto(_data: VariableDocumentDto) {
    return _data;
}
export function serializeVariableDocumentDto(_data: VariableDocumentDto | undefined) {
  if (_data) {
    _data = prepareSerializeVariableDocumentDto(_data as VariableDocumentDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeVariableDocumentDto(_data: VariableDocumentDto): VariableDocumentDto {
  const data: Record<string, any> = { ..._data };
  return data as VariableDocumentDto;
}
export interface CreateVariableDto  {
  projectId: number;
  name: string;
  value: string;
  url: string;
  variableType: VariableType;
  urlType: UrlType | null;
  releaseId: number;
  /** Used only for System document variables to store version and name.
Refers to initial document id. */
  basedOnDocumentId: number | null;
  /** Used only for local variables.
Refers to document at which level it is accessible. */
  documentId: number | null;
  /** Indicates if variable is tracked. Used for variable with table value.
Fetches updates from document, where it was inserted. */
  isTracked: boolean;
}
export function deserializeCreateVariableDto(json: string): CreateVariableDto {
  const data = JSON.parse(json) as CreateVariableDto;
  initCreateVariableDto(data);
  return data;
}
export function initCreateVariableDto(_data: CreateVariableDto) {
  if (_data) {
    _data.variableType = _data["variableType"];
    _data.urlType = _data["urlType"];
  }
  return _data;
}
export function serializeCreateVariableDto(_data: CreateVariableDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreateVariableDto(_data as CreateVariableDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCreateVariableDto(_data: CreateVariableDto): CreateVariableDto {
  const data: Record<string, any> = { ..._data };
  return data as CreateVariableDto;
}
export interface PatchVariableDto  {
  name?: string;
  actualValue?: string;
  actualUrl?: string | null;
  variableType?: VariableType;
  urlType?: UrlType | null;
  documentId?: number | null;
}
export function deserializePatchVariableDto(json: string): PatchVariableDto {
  const data = JSON.parse(json) as PatchVariableDto;
  initPatchVariableDto(data);
  return data;
}
export function initPatchVariableDto(_data: PatchVariableDto) {
  if (_data) {
    _data.variableType = _data["variableType"];
    _data.urlType = _data["urlType"];
  }
  return _data;
}
export function serializePatchVariableDto(_data: PatchVariableDto | undefined) {
  if (_data) {
    _data = prepareSerializePatchVariableDto(_data as PatchVariableDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePatchVariableDto(_data: PatchVariableDto): PatchVariableDto {
  const data: Record<string, any> = { ..._data };
  return data as PatchVariableDto;
}
export interface PagedResultOfVariableListItemDto  {
  data: VariableListItemDto[];
  totalCount: number;
}
export function deserializePagedResultOfVariableListItemDto(json: string): PagedResultOfVariableListItemDto {
  const data = JSON.parse(json) as PagedResultOfVariableListItemDto;
  initPagedResultOfVariableListItemDto(data);
  return data;
}
export function initPagedResultOfVariableListItemDto(_data: PagedResultOfVariableListItemDto) {
  if (_data) {
    if (Array.isArray(_data["data"])) {
      _data.data = _data["data"].map(item => 
        initVariableListItemDto(item)
      );
    }
  }
  return _data;
}
export function serializePagedResultOfVariableListItemDto(_data: PagedResultOfVariableListItemDto | undefined) {
  if (_data) {
    _data = prepareSerializePagedResultOfVariableListItemDto(_data as PagedResultOfVariableListItemDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePagedResultOfVariableListItemDto(_data: PagedResultOfVariableListItemDto): PagedResultOfVariableListItemDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.data)) {
    data["data"] = _data.data.map(item => 
        prepareSerializeVariableListItemDto(item)
    );
  }
  return data as PagedResultOfVariableListItemDto;
}
export interface VariableListItemDto  {
  id: number;
  name: string;
  actualUrl: string | null;
  actualValue: VariableValueDto;
  /** Used only for System document variables to store version and name.
Refers to initial document id. */
  basedOnDocumentId: number | null;
  /** Used only for local variables.
Refers to document at which level it is accessible. */
  documentId: number | null;
  /** Ids of documents containing current variable. */
  documentsIds: number[];
  isTable: boolean;
}
export function deserializeVariableListItemDto(json: string): VariableListItemDto {
  const data = JSON.parse(json) as VariableListItemDto;
  initVariableListItemDto(data);
  return data;
}
export function initVariableListItemDto(_data: VariableListItemDto) {
  if (_data) {
    _data.actualValue = _data["actualValue"] && initVariableValueDto(_data["actualValue"]);
    _data.documentsIds = _data["documentsIds"];
  }
  return _data;
}
export function serializeVariableListItemDto(_data: VariableListItemDto | undefined) {
  if (_data) {
    _data = prepareSerializeVariableListItemDto(_data as VariableListItemDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeVariableListItemDto(_data: VariableListItemDto): VariableListItemDto {
  const data: Record<string, any> = { ..._data };
  data["actualValue"] = _data.actualValue && prepareSerializeVariableValueDto(_data.actualValue);
  return data as VariableListItemDto;
}
export interface VariableValueDto  {
  value: string;
  variableType: VariableType;
  urlType: UrlType | null;
  /** Indicates if variable has type Auto
and data by its url has differ with its Value */
  hasUpdatedData: boolean;
  /** Date of detecting updated data at external service. */
  updatedDataDetectedDate: Date | null;
}
export function deserializeVariableValueDto(json: string): VariableValueDto {
  const data = JSON.parse(json) as VariableValueDto;
  initVariableValueDto(data);
  return data;
}
export function initVariableValueDto(_data: VariableValueDto) {
  if (_data) {
    _data.variableType = _data["variableType"];
    _data.urlType = _data["urlType"];
    _data.updatedDataDetectedDate = _data["updatedDataDetectedDate"] ? new Date(_data["updatedDataDetectedDate"].toString()) : <any>null;
  }
  return _data;
}
export function serializeVariableValueDto(_data: VariableValueDto | undefined) {
  if (_data) {
    _data = prepareSerializeVariableValueDto(_data as VariableValueDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeVariableValueDto(_data: VariableValueDto): VariableValueDto {
  const data: Record<string, any> = { ..._data };
  data["updatedDataDetectedDate"] = _data.updatedDataDetectedDate && _data.updatedDataDetectedDate.toISOString();
  return data as VariableValueDto;
}
export enum SortOrder {
    Asc = "Asc",
    Desc = "Desc",
}
export interface CurrentUserDto  {
  id: string;
  username: string;
  nickname: string;
  permissions: string[];
}
export function deserializeCurrentUserDto(json: string): CurrentUserDto {
  const data = JSON.parse(json) as CurrentUserDto;
  initCurrentUserDto(data);
  return data;
}
export function initCurrentUserDto(_data: CurrentUserDto) {
  if (_data) {
    _data.permissions = _data["permissions"];
  }
  return _data;
}
export function serializeCurrentUserDto(_data: CurrentUserDto | undefined) {
  if (_data) {
    _data = prepareSerializeCurrentUserDto(_data as CurrentUserDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCurrentUserDto(_data: CurrentUserDto): CurrentUserDto {
  const data: Record<string, any> = { ..._data };
  return data as CurrentUserDto;
}
export interface ResetPasswordDto  {
  username: string;
  token: string;
  newPassword: string;
}
export function deserializeResetPasswordDto(json: string): ResetPasswordDto {
  const data = JSON.parse(json) as ResetPasswordDto;
  initResetPasswordDto(data);
  return data;
}
export function initResetPasswordDto(_data: ResetPasswordDto) {
    return _data;
}
export function serializeResetPasswordDto(_data: ResetPasswordDto | undefined) {
  if (_data) {
    _data = prepareSerializeResetPasswordDto(_data as ResetPasswordDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeResetPasswordDto(_data: ResetPasswordDto): ResetPasswordDto {
  const data: Record<string, any> = { ..._data };
  return data as ResetPasswordDto;
}
export interface ChangePasswordDto  {
  oldPassword: string;
  newPassword: string;
}
export function deserializeChangePasswordDto(json: string): ChangePasswordDto {
  const data = JSON.parse(json) as ChangePasswordDto;
  initChangePasswordDto(data);
  return data;
}
export function initChangePasswordDto(_data: ChangePasswordDto) {
    return _data;
}
export function serializeChangePasswordDto(_data: ChangePasswordDto | undefined) {
  if (_data) {
    _data = prepareSerializeChangePasswordDto(_data as ChangePasswordDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeChangePasswordDto(_data: ChangePasswordDto): ChangePasswordDto {
  const data: Record<string, any> = { ..._data };
  return data as ChangePasswordDto;
}
export interface CreateTestTenantDto  {
  userEmail: string;
  userPassword: string;
}
export function deserializeCreateTestTenantDto(json: string): CreateTestTenantDto {
  const data = JSON.parse(json) as CreateTestTenantDto;
  initCreateTestTenantDto(data);
  return data;
}
export function initCreateTestTenantDto(_data: CreateTestTenantDto) {
    return _data;
}
export function serializeCreateTestTenantDto(_data: CreateTestTenantDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreateTestTenantDto(_data as CreateTestTenantDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCreateTestTenantDto(_data: CreateTestTenantDto): CreateTestTenantDto {
  const data: Record<string, any> = { ..._data };
  return data as CreateTestTenantDto;
}
export interface TemplateDto  {
  id: number;
  name: string;
  description: string;
  structure: TemplateTreeItem[];
}
export function deserializeTemplateDto(json: string): TemplateDto {
  const data = JSON.parse(json) as TemplateDto;
  initTemplateDto(data);
  return data;
}
export function initTemplateDto(_data: TemplateDto) {
  if (_data) {
    if (Array.isArray(_data["structure"])) {
      _data.structure = _data["structure"].map(item => 
        initTemplateTreeItem(item)
      );
    }
  }
  return _data;
}
export function serializeTemplateDto(_data: TemplateDto | undefined) {
  if (_data) {
    _data = prepareSerializeTemplateDto(_data as TemplateDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeTemplateDto(_data: TemplateDto): TemplateDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.structure)) {
    data["structure"] = _data.structure.map(item => 
        prepareSerializeTemplateTreeItem(item)
    );
  }
  return data as TemplateDto;
}
export interface TemplateTreeItem  {
  id: string;
  actionId: number | null;
  promptId: number | null;
  type: TemplateTreeItemType;
  isCustom: boolean;
  name: string | null;
  description: string | null;
  collapsed: boolean | null;
  children: TemplateTreeItem[] | null;
}
export function deserializeTemplateTreeItem(json: string): TemplateTreeItem {
  const data = JSON.parse(json) as TemplateTreeItem;
  initTemplateTreeItem(data);
  return data;
}
export function initTemplateTreeItem(_data: TemplateTreeItem) {
  if (_data) {
    _data.type = _data["type"];
    if (Array.isArray(_data["children"])) {
      _data.children = _data["children"].map(item => 
        initTemplateTreeItem(item)
      );
    }
  }
  return _data;
}
export function serializeTemplateTreeItem(_data: TemplateTreeItem | undefined) {
  if (_data) {
    _data = prepareSerializeTemplateTreeItem(_data as TemplateTreeItem);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeTemplateTreeItem(_data: TemplateTreeItem): TemplateTreeItem {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.children)) {
    data["children"] = _data.children.map(item => 
        prepareSerializeTemplateTreeItem(item)
    );
  }
  return data as TemplateTreeItem;
}
export enum TemplateTreeItemType {
    Heading = "Heading",
    Action = "Action",
    Prompt = "Prompt",
}
export interface CreateTemplateDto  {
  name: string;
  description: string;
}
export function deserializeCreateTemplateDto(json: string): CreateTemplateDto {
  const data = JSON.parse(json) as CreateTemplateDto;
  initCreateTemplateDto(data);
  return data;
}
export function initCreateTemplateDto(_data: CreateTemplateDto) {
    return _data;
}
export function serializeCreateTemplateDto(_data: CreateTemplateDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreateTemplateDto(_data as CreateTemplateDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCreateTemplateDto(_data: CreateTemplateDto): CreateTemplateDto {
  const data: Record<string, any> = { ..._data };
  return data as CreateTemplateDto;
}
export interface PagedResultOfTemplateListItemDto  {
  data: TemplateListItemDto[];
  totalCount: number;
}
export function deserializePagedResultOfTemplateListItemDto(json: string): PagedResultOfTemplateListItemDto {
  const data = JSON.parse(json) as PagedResultOfTemplateListItemDto;
  initPagedResultOfTemplateListItemDto(data);
  return data;
}
export function initPagedResultOfTemplateListItemDto(_data: PagedResultOfTemplateListItemDto) {
  if (_data) {
    if (Array.isArray(_data["data"])) {
      _data.data = _data["data"].map(item => 
        initTemplateListItemDto(item)
      );
    }
  }
  return _data;
}
export function serializePagedResultOfTemplateListItemDto(_data: PagedResultOfTemplateListItemDto | undefined) {
  if (_data) {
    _data = prepareSerializePagedResultOfTemplateListItemDto(_data as PagedResultOfTemplateListItemDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePagedResultOfTemplateListItemDto(_data: PagedResultOfTemplateListItemDto): PagedResultOfTemplateListItemDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.data)) {
    data["data"] = _data.data.map(item => 
        prepareSerializeTemplateListItemDto(item)
    );
  }
  return data as PagedResultOfTemplateListItemDto;
}
export interface TemplateListItemDto  {
  id: number;
  name: string;
  description: string;
}
export function deserializeTemplateListItemDto(json: string): TemplateListItemDto {
  const data = JSON.parse(json) as TemplateListItemDto;
  initTemplateListItemDto(data);
  return data;
}
export function initTemplateListItemDto(_data: TemplateListItemDto) {
    return _data;
}
export function serializeTemplateListItemDto(_data: TemplateListItemDto | undefined) {
  if (_data) {
    _data = prepareSerializeTemplateListItemDto(_data as TemplateListItemDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeTemplateListItemDto(_data: TemplateListItemDto): TemplateListItemDto {
  const data: Record<string, any> = { ..._data };
  return data as TemplateListItemDto;
}
export interface PatchTemplateDto  {
  name?: string | null;
  description?: string | null;
  structure?: TemplateTreeItem[] | null;
}
export function deserializePatchTemplateDto(json: string): PatchTemplateDto {
  const data = JSON.parse(json) as PatchTemplateDto;
  initPatchTemplateDto(data);
  return data;
}
export function initPatchTemplateDto(_data: PatchTemplateDto) {
  if (_data) {
    if (Array.isArray(_data["structure"])) {
      _data.structure = _data["structure"].map(item => 
        initTemplateTreeItem(item)
      );
    }
  }
  return _data;
}
export function serializePatchTemplateDto(_data: PatchTemplateDto | undefined) {
  if (_data) {
    _data = prepareSerializePatchTemplateDto(_data as PatchTemplateDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePatchTemplateDto(_data: PatchTemplateDto): PatchTemplateDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.structure)) {
    data["structure"] = _data.structure.map(item => 
        prepareSerializeTemplateTreeItem(item)
    );
  }
  return data as PatchTemplateDto;
}
export interface TemplateActionDto  {
  id: number;
  name: string;
  templateTreeItemId: string;
  isCollapsed: boolean;
  isCustom: boolean;
}
export function deserializeTemplateActionDto(json: string): TemplateActionDto {
  const data = JSON.parse(json) as TemplateActionDto;
  initTemplateActionDto(data);
  return data;
}
export function initTemplateActionDto(_data: TemplateActionDto) {
    return _data;
}
export function serializeTemplateActionDto(_data: TemplateActionDto | undefined) {
  if (_data) {
    _data = prepareSerializeTemplateActionDto(_data as TemplateActionDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeTemplateActionDto(_data: TemplateActionDto): TemplateActionDto {
  const data: Record<string, any> = { ..._data };
  return data as TemplateActionDto;
}
export interface CreateTemplateActionDto  {
  name: string;
  templateTreeItemId: string;
  templateId: number;
  documentId: number | null;
}
export function deserializeCreateTemplateActionDto(json: string): CreateTemplateActionDto {
  const data = JSON.parse(json) as CreateTemplateActionDto;
  initCreateTemplateActionDto(data);
  return data;
}
export function initCreateTemplateActionDto(_data: CreateTemplateActionDto) {
    return _data;
}
export function serializeCreateTemplateActionDto(_data: CreateTemplateActionDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreateTemplateActionDto(_data as CreateTemplateActionDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCreateTemplateActionDto(_data: CreateTemplateActionDto): CreateTemplateActionDto {
  const data: Record<string, any> = { ..._data };
  return data as CreateTemplateActionDto;
}
export interface PatchTemplateActionDto  {
  name?: string | null;
  templateTreeItemId?: string | null;
  isCollapsed?: boolean | null;
}
export function deserializePatchTemplateActionDto(json: string): PatchTemplateActionDto {
  const data = JSON.parse(json) as PatchTemplateActionDto;
  initPatchTemplateActionDto(data);
  return data;
}
export function initPatchTemplateActionDto(_data: PatchTemplateActionDto) {
    return _data;
}
export function serializePatchTemplateActionDto(_data: PatchTemplateActionDto | undefined) {
  if (_data) {
    _data = prepareSerializePatchTemplateActionDto(_data as PatchTemplateActionDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePatchTemplateActionDto(_data: PatchTemplateActionDto): PatchTemplateActionDto {
  const data: Record<string, any> = { ..._data };
  return data as PatchTemplateActionDto;
}
export interface PromptDto  {
  id: number;
  name: string;
  text: string;
  isCustom: boolean;
  variables: PromptVariablePlaceholder[];
}
export function deserializePromptDto(json: string): PromptDto {
  const data = JSON.parse(json) as PromptDto;
  initPromptDto(data);
  return data;
}
export function initPromptDto(_data: PromptDto) {
  if (_data) {
    if (Array.isArray(_data["variables"])) {
      _data.variables = _data["variables"].map(item => 
        initPromptVariablePlaceholder(item)
      );
    }
  }
  return _data;
}
export function serializePromptDto(_data: PromptDto | undefined) {
  if (_data) {
    _data = prepareSerializePromptDto(_data as PromptDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePromptDto(_data: PromptDto): PromptDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.variables)) {
    data["variables"] = _data.variables.map(item => 
        prepareSerializePromptVariablePlaceholder(item)
    );
  }
  return data as PromptDto;
}
export interface PromptVariablePlaceholder  {
  alias: string;
  description: string;
}
export function deserializePromptVariablePlaceholder(json: string): PromptVariablePlaceholder {
  const data = JSON.parse(json) as PromptVariablePlaceholder;
  initPromptVariablePlaceholder(data);
  return data;
}
export function initPromptVariablePlaceholder(_data: PromptVariablePlaceholder) {
    return _data;
}
export function serializePromptVariablePlaceholder(_data: PromptVariablePlaceholder | undefined) {
  if (_data) {
    _data = prepareSerializePromptVariablePlaceholder(_data as PromptVariablePlaceholder);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePromptVariablePlaceholder(_data: PromptVariablePlaceholder): PromptVariablePlaceholder {
  const data: Record<string, any> = { ..._data };
  return data as PromptVariablePlaceholder;
}
export interface CreatePromptDto  {
  name: string;
  templateActionId: number;
  documentId: number | null;
}
export function deserializeCreatePromptDto(json: string): CreatePromptDto {
  const data = JSON.parse(json) as CreatePromptDto;
  initCreatePromptDto(data);
  return data;
}
export function initCreatePromptDto(_data: CreatePromptDto) {
    return _data;
}
export function serializeCreatePromptDto(_data: CreatePromptDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreatePromptDto(_data as CreatePromptDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCreatePromptDto(_data: CreatePromptDto): CreatePromptDto {
  const data: Record<string, any> = { ..._data };
  return data as CreatePromptDto;
}
export interface PatchPromptDto  {
  name?: string | null;
  text?: string | null;
  templateActionId?: number | null;
  variables?: PromptVariablePlaceholder[];
}
export function deserializePatchPromptDto(json: string): PatchPromptDto {
  const data = JSON.parse(json) as PatchPromptDto;
  initPatchPromptDto(data);
  return data;
}
export function initPatchPromptDto(_data: PatchPromptDto) {
  if (_data) {
    if (Array.isArray(_data["variables"])) {
      _data.variables = _data["variables"].map(item => 
        initPromptVariablePlaceholder(item)
      );
    }
  }
  return _data;
}
export function serializePatchPromptDto(_data: PatchPromptDto | undefined) {
  if (_data) {
    _data = prepareSerializePatchPromptDto(_data as PatchPromptDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePatchPromptDto(_data: PatchPromptDto): PatchPromptDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.variables)) {
    data["variables"] = _data.variables.map(item => 
        prepareSerializePromptVariablePlaceholder(item)
    );
  }
  return data as PatchPromptDto;
}
export interface CreateUpdatePromptVariableConnectionDto  {
  alias: string;
  variableId: number;
  documentId: number;
}
export function deserializeCreateUpdatePromptVariableConnectionDto(json: string): CreateUpdatePromptVariableConnectionDto {
  const data = JSON.parse(json) as CreateUpdatePromptVariableConnectionDto;
  initCreateUpdatePromptVariableConnectionDto(data);
  return data;
}
export function initCreateUpdatePromptVariableConnectionDto(_data: CreateUpdatePromptVariableConnectionDto) {
    return _data;
}
export function serializeCreateUpdatePromptVariableConnectionDto(_data: CreateUpdatePromptVariableConnectionDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreateUpdatePromptVariableConnectionDto(_data as CreateUpdatePromptVariableConnectionDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCreateUpdatePromptVariableConnectionDto(_data: CreateUpdatePromptVariableConnectionDto): CreateUpdatePromptVariableConnectionDto {
  const data: Record<string, any> = { ..._data };
  return data as CreateUpdatePromptVariableConnectionDto;
}
export interface PromptVariableConnectionDto  {
  alias: string;
  variableId: number;
  variableName: string;
}
export function deserializePromptVariableConnectionDto(json: string): PromptVariableConnectionDto {
  const data = JSON.parse(json) as PromptVariableConnectionDto;
  initPromptVariableConnectionDto(data);
  return data;
}
export function initPromptVariableConnectionDto(_data: PromptVariableConnectionDto) {
    return _data;
}
export function serializePromptVariableConnectionDto(_data: PromptVariableConnectionDto | undefined) {
  if (_data) {
    _data = prepareSerializePromptVariableConnectionDto(_data as PromptVariableConnectionDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePromptVariableConnectionDto(_data: PromptVariableConnectionDto): PromptVariableConnectionDto {
  const data: Record<string, any> = { ..._data };
  return data as PromptVariableConnectionDto;
}
export interface SignerDto  {
  id: number;
  canBeModified: boolean;
  firstName: string;
  lastName: string;
  email: string;
}
export function deserializeSignerDto(json: string): SignerDto {
  const data = JSON.parse(json) as SignerDto;
  initSignerDto(data);
  return data;
}
export function initSignerDto(_data: SignerDto) {
    return _data;
}
export function serializeSignerDto(_data: SignerDto | undefined) {
  if (_data) {
    _data = prepareSerializeSignerDto(_data as SignerDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeSignerDto(_data: SignerDto): SignerDto {
  const data: Record<string, any> = { ..._data };
  return data as SignerDto;
}
export interface SignerCreateDto  {
  firstName: string;
  lastName: string;
  email: string;
}
export function deserializeSignerCreateDto(json: string): SignerCreateDto {
  const data = JSON.parse(json) as SignerCreateDto;
  initSignerCreateDto(data);
  return data;
}
export function initSignerCreateDto(_data: SignerCreateDto) {
    return _data;
}
export function serializeSignerCreateDto(_data: SignerCreateDto | undefined) {
  if (_data) {
    _data = prepareSerializeSignerCreateDto(_data as SignerCreateDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeSignerCreateDto(_data: SignerCreateDto): SignerCreateDto {
  const data: Record<string, any> = { ..._data };
  return data as SignerCreateDto;
}
export interface PatchSignerDto  {
  firstName?: string;
  lastName?: string;
  email?: string;
}
export function deserializePatchSignerDto(json: string): PatchSignerDto {
  const data = JSON.parse(json) as PatchSignerDto;
  initPatchSignerDto(data);
  return data;
}
export function initPatchSignerDto(_data: PatchSignerDto) {
    return _data;
}
export function serializePatchSignerDto(_data: PatchSignerDto | undefined) {
  if (_data) {
    _data = prepareSerializePatchSignerDto(_data as PatchSignerDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePatchSignerDto(_data: PatchSignerDto): PatchSignerDto {
  const data: Record<string, any> = { ..._data };
  return data as PatchSignerDto;
}
export interface PagedResultOfSignerDto  {
  data: SignerDto[];
  totalCount: number;
}
export function deserializePagedResultOfSignerDto(json: string): PagedResultOfSignerDto {
  const data = JSON.parse(json) as PagedResultOfSignerDto;
  initPagedResultOfSignerDto(data);
  return data;
}
export function initPagedResultOfSignerDto(_data: PagedResultOfSignerDto) {
  if (_data) {
    if (Array.isArray(_data["data"])) {
      _data.data = _data["data"].map(item => 
        initSignerDto(item)
      );
    }
  }
  return _data;
}
export function serializePagedResultOfSignerDto(_data: PagedResultOfSignerDto | undefined) {
  if (_data) {
    _data = prepareSerializePagedResultOfSignerDto(_data as PagedResultOfSignerDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePagedResultOfSignerDto(_data: PagedResultOfSignerDto): PagedResultOfSignerDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.data)) {
    data["data"] = _data.data.map(item => 
        prepareSerializeSignerDto(item)
    );
  }
  return data as PagedResultOfSignerDto;
}
/** Data of response json with multiple objects. */
export interface ResponseDataOfNotificationData  {
  value: NotificationData[];
}
export function deserializeResponseDataOfNotificationData(json: string): ResponseDataOfNotificationData {
  const data = JSON.parse(json) as ResponseDataOfNotificationData;
  initResponseDataOfNotificationData(data);
  return data;
}
export function initResponseDataOfNotificationData(_data: ResponseDataOfNotificationData) {
  if (_data) {
    if (Array.isArray(_data["value"])) {
      _data.value = _data["value"].map(item => 
        initNotificationData(item)
      );
    }
  }
  return _data;
}
export function serializeResponseDataOfNotificationData(_data: ResponseDataOfNotificationData | undefined) {
  if (_data) {
    _data = prepareSerializeResponseDataOfNotificationData(_data as ResponseDataOfNotificationData);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeResponseDataOfNotificationData(_data: ResponseDataOfNotificationData): ResponseDataOfNotificationData {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.value)) {
    data["value"] = _data.value.map(item => 
        prepareSerializeNotificationData(item)
    );
  }
  return data as ResponseDataOfNotificationData;
}
/** Web hook notification data: this message is received when SharePoint "fires" a web hook. */
export interface NotificationData  {
  subscriptionId: string;
  clientState: string;
  expirationDateTime: Date;
  resource: string;
  tenantId: string;
  siteUrl: string;
  webId: string;
}
export function deserializeNotificationData(json: string): NotificationData {
  const data = JSON.parse(json) as NotificationData;
  initNotificationData(data);
  return data;
}
export function initNotificationData(_data: NotificationData) {
  if (_data) {
    _data.expirationDateTime = _data["expirationDateTime"] ? new Date(_data["expirationDateTime"].toString()) : <any>null;
  }
  return _data;
}
export function serializeNotificationData(_data: NotificationData | undefined) {
  if (_data) {
    _data = prepareSerializeNotificationData(_data as NotificationData);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeNotificationData(_data: NotificationData): NotificationData {
  const data: Record<string, any> = { ..._data };
  data["expirationDateTime"] = _data.expirationDateTime && _data.expirationDateTime.toISOString();
  return data as NotificationData;
}
/** Actual applcation settings. */
export interface SettingsDto  {
  /** Provides actual SharePoint url for documents exporting. */
  sharePointUrl: string;
}
export function deserializeSettingsDto(json: string): SettingsDto {
  const data = JSON.parse(json) as SettingsDto;
  initSettingsDto(data);
  return data;
}
export function initSettingsDto(_data: SettingsDto) {
    return _data;
}
export function serializeSettingsDto(_data: SettingsDto | undefined) {
  if (_data) {
    _data = prepareSerializeSettingsDto(_data as SettingsDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeSettingsDto(_data: SettingsDto): SettingsDto {
  const data: Record<string, any> = { ..._data };
  return data as SettingsDto;
}
export interface ReleaseDto  {
  id: number;
  version: string;
  folders: ProjectElement[];
  projectId: number;
  isCurrent: boolean;
  isExported: boolean;
  isSigning: boolean;
  sharePointImportStatus: ImportStatus;
  sharePointExportStatus: ExportStatus;
}
export function deserializeReleaseDto(json: string): ReleaseDto {
  const data = JSON.parse(json) as ReleaseDto;
  initReleaseDto(data);
  return data;
}
export function initReleaseDto(_data: ReleaseDto) {
  if (_data) {
    if (Array.isArray(_data["folders"])) {
      _data.folders = _data["folders"].map(item => 
        initProjectElement(item)
      );
    }
    _data.sharePointImportStatus = _data["sharePointImportStatus"];
    _data.sharePointExportStatus = _data["sharePointExportStatus"];
  }
  return _data;
}
export function serializeReleaseDto(_data: ReleaseDto | undefined) {
  if (_data) {
    _data = prepareSerializeReleaseDto(_data as ReleaseDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeReleaseDto(_data: ReleaseDto): ReleaseDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.folders)) {
    data["folders"] = _data.folders.map(item => 
        prepareSerializeProjectElement(item)
    );
  }
  return data as ReleaseDto;
}
export interface ProjectElement  {
  id: string;
  name: string;
  type: string;
}
export function deserializeProjectElement(json: string): ProjectElement {
  const data = JSON.parse(json) as ProjectElement;
  if (data["type"] === "Folder") {
    return initProjectFolder(data as ProjectFolder);
  }
  if (data["type"] === "Document") {
    return initProjectDocument(data as ProjectDocument);
  }
  initProjectElement(data);
  return data;
}
export function initProjectElement(_data: ProjectElement) {
    return _data;
}
export function serializeProjectElement(_data: ProjectElement | undefined) {
  if (_data) {
    _data = prepareSerializeProjectElement(_data as ProjectElement);
      _data["type"] = "ProjectElement";
  }
  return JSON.stringify(_data);
}
export function prepareSerializeProjectElement(_data: ProjectElement): ProjectElement {
  const data: Record<string, any> = { ..._data };
  return data as ProjectElement;
}
export interface ProjectFolder extends ProjectElement  {
  children: ProjectElement[];
  collapsed: boolean;
}
export function deserializeProjectFolder(json: string): ProjectFolder {
  const data = JSON.parse(json) as ProjectFolder;
  initProjectFolder(data);
  return data;
}
export function initProjectFolder(_data: ProjectFolder) {
  initProjectElement(_data);
  if (_data) {
    if (Array.isArray(_data["children"])) {
      _data.children = _data["children"].map(item => 
        initProjectElement(item)
      );
    }
  }
  return _data;
}
export function serializeProjectFolder(_data: ProjectFolder | undefined) {
  if (_data) {
    _data = prepareSerializeProjectFolder(_data as ProjectFolder);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeProjectFolder(_data: ProjectFolder): ProjectFolder {
  const data = prepareSerializeProjectElement(_data as ProjectFolder) as Record<string, any>;
  if (Array.isArray(_data.children)) {
    data["children"] = _data.children.map(item => 
        prepareSerializeProjectElement(item)
    );
  }
  return data as ProjectFolder;
}
export interface ProjectDocument extends ProjectElement  {
  documentId: number;
}
export function deserializeProjectDocument(json: string): ProjectDocument {
  const data = JSON.parse(json) as ProjectDocument;
  initProjectDocument(data);
  return data;
}
export function initProjectDocument(_data: ProjectDocument) {
  initProjectElement(_data);
    return _data;
}
export function serializeProjectDocument(_data: ProjectDocument | undefined) {
  if (_data) {
    _data = prepareSerializeProjectDocument(_data as ProjectDocument);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeProjectDocument(_data: ProjectDocument): ProjectDocument {
  const data = prepareSerializeProjectElement(_data as ProjectDocument) as Record<string, any>;
  return data as ProjectDocument;
}
export enum ImportStatus {
    NotStarted = "NotStarted",
    InProgress = "InProgress",
    Imported = "Imported",
}
export enum ExportStatus {
    NotStarted = "NotStarted",
    InProgress = "InProgress",
}
export interface CreateReleaseDto  {
  version: string;
  projectId: number;
}
export function deserializeCreateReleaseDto(json: string): CreateReleaseDto {
  const data = JSON.parse(json) as CreateReleaseDto;
  initCreateReleaseDto(data);
  return data;
}
export function initCreateReleaseDto(_data: CreateReleaseDto) {
    return _data;
}
export function serializeCreateReleaseDto(_data: CreateReleaseDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreateReleaseDto(_data as CreateReleaseDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCreateReleaseDto(_data: CreateReleaseDto): CreateReleaseDto {
  const data: Record<string, any> = { ..._data };
  return data as CreateReleaseDto;
}
export interface PatchReleaseDto  {
  version?: string;
  folders?: ProjectElement[];
}
export function deserializePatchReleaseDto(json: string): PatchReleaseDto {
  const data = JSON.parse(json) as PatchReleaseDto;
  initPatchReleaseDto(data);
  return data;
}
export function initPatchReleaseDto(_data: PatchReleaseDto) {
  if (_data) {
    if (Array.isArray(_data["folders"])) {
      _data.folders = _data["folders"].map(item => 
        initProjectElement(item)
      );
    }
  }
  return _data;
}
export function serializePatchReleaseDto(_data: PatchReleaseDto | undefined) {
  if (_data) {
    _data = prepareSerializePatchReleaseDto(_data as PatchReleaseDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePatchReleaseDto(_data: PatchReleaseDto): PatchReleaseDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.folders)) {
    data["folders"] = _data.folders.map(item => 
        prepareSerializeProjectElement(item)
    );
  }
  return data as PatchReleaseDto;
}
export interface PagedResultOfReleaseListItemDto  {
  data: ReleaseListItemDto[];
  totalCount: number;
}
export function deserializePagedResultOfReleaseListItemDto(json: string): PagedResultOfReleaseListItemDto {
  const data = JSON.parse(json) as PagedResultOfReleaseListItemDto;
  initPagedResultOfReleaseListItemDto(data);
  return data;
}
export function initPagedResultOfReleaseListItemDto(_data: PagedResultOfReleaseListItemDto) {
  if (_data) {
    if (Array.isArray(_data["data"])) {
      _data.data = _data["data"].map(item => 
        initReleaseListItemDto(item)
      );
    }
  }
  return _data;
}
export function serializePagedResultOfReleaseListItemDto(_data: PagedResultOfReleaseListItemDto | undefined) {
  if (_data) {
    _data = prepareSerializePagedResultOfReleaseListItemDto(_data as PagedResultOfReleaseListItemDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePagedResultOfReleaseListItemDto(_data: PagedResultOfReleaseListItemDto): PagedResultOfReleaseListItemDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.data)) {
    data["data"] = _data.data.map(item => 
        prepareSerializeReleaseListItemDto(item)
    );
  }
  return data as PagedResultOfReleaseListItemDto;
}
export interface ReleaseListItemDto  {
  id: number;
  version: string;
  folders: ProjectElement[];
}
export function deserializeReleaseListItemDto(json: string): ReleaseListItemDto {
  const data = JSON.parse(json) as ReleaseListItemDto;
  initReleaseListItemDto(data);
  return data;
}
export function initReleaseListItemDto(_data: ReleaseListItemDto) {
  if (_data) {
    if (Array.isArray(_data["folders"])) {
      _data.folders = _data["folders"].map(item => 
        initProjectElement(item)
      );
    }
  }
  return _data;
}
export function serializeReleaseListItemDto(_data: ReleaseListItemDto | undefined) {
  if (_data) {
    _data = prepareSerializeReleaseListItemDto(_data as ReleaseListItemDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeReleaseListItemDto(_data: ReleaseListItemDto): ReleaseListItemDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.folders)) {
    data["folders"] = _data.folders.map(item => 
        prepareSerializeProjectElement(item)
    );
  }
  return data as ReleaseListItemDto;
}
export interface ProjectDto  {
  id: number;
  name: string;
  description: string;
  iconCode: string;
  isExported: boolean;
}
export function deserializeProjectDto(json: string): ProjectDto {
  const data = JSON.parse(json) as ProjectDto;
  initProjectDto(data);
  return data;
}
export function initProjectDto(_data: ProjectDto) {
    return _data;
}
export function serializeProjectDto(_data: ProjectDto | undefined) {
  if (_data) {
    _data = prepareSerializeProjectDto(_data as ProjectDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeProjectDto(_data: ProjectDto): ProjectDto {
  const data: Record<string, any> = { ..._data };
  return data as ProjectDto;
}
export interface CreateProjectDto  {
  name: string;
  description: string | null;
  iconCode: string;
}
export function deserializeCreateProjectDto(json: string): CreateProjectDto {
  const data = JSON.parse(json) as CreateProjectDto;
  initCreateProjectDto(data);
  return data;
}
export function initCreateProjectDto(_data: CreateProjectDto) {
    return _data;
}
export function serializeCreateProjectDto(_data: CreateProjectDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreateProjectDto(_data as CreateProjectDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCreateProjectDto(_data: CreateProjectDto): CreateProjectDto {
  const data: Record<string, any> = { ..._data };
  return data as CreateProjectDto;
}
export interface PatchProjectDto  {
  name?: string;
  description?: string;
  iconCode?: string;
}
export function deserializePatchProjectDto(json: string): PatchProjectDto {
  const data = JSON.parse(json) as PatchProjectDto;
  initPatchProjectDto(data);
  return data;
}
export function initPatchProjectDto(_data: PatchProjectDto) {
    return _data;
}
export function serializePatchProjectDto(_data: PatchProjectDto | undefined) {
  if (_data) {
    _data = prepareSerializePatchProjectDto(_data as PatchProjectDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePatchProjectDto(_data: PatchProjectDto): PatchProjectDto {
  const data: Record<string, any> = { ..._data };
  return data as PatchProjectDto;
}
export interface PagedResultOfProjectListItemDto  {
  data: ProjectListItemDto[];
  totalCount: number;
}
export function deserializePagedResultOfProjectListItemDto(json: string): PagedResultOfProjectListItemDto {
  const data = JSON.parse(json) as PagedResultOfProjectListItemDto;
  initPagedResultOfProjectListItemDto(data);
  return data;
}
export function initPagedResultOfProjectListItemDto(_data: PagedResultOfProjectListItemDto) {
  if (_data) {
    if (Array.isArray(_data["data"])) {
      _data.data = _data["data"].map(item => 
        initProjectListItemDto(item)
      );
    }
  }
  return _data;
}
export function serializePagedResultOfProjectListItemDto(_data: PagedResultOfProjectListItemDto | undefined) {
  if (_data) {
    _data = prepareSerializePagedResultOfProjectListItemDto(_data as PagedResultOfProjectListItemDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePagedResultOfProjectListItemDto(_data: PagedResultOfProjectListItemDto): PagedResultOfProjectListItemDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.data)) {
    data["data"] = _data.data.map(item => 
        prepareSerializeProjectListItemDto(item)
    );
  }
  return data as PagedResultOfProjectListItemDto;
}
export interface ProjectListItemDto  {
  id: number;
  name: string;
  currentRelease: string;
  iconCode: string;
}
export function deserializeProjectListItemDto(json: string): ProjectListItemDto {
  const data = JSON.parse(json) as ProjectListItemDto;
  initProjectListItemDto(data);
  return data;
}
export function initProjectListItemDto(_data: ProjectListItemDto) {
    return _data;
}
export function serializeProjectListItemDto(_data: ProjectListItemDto | undefined) {
  if (_data) {
    _data = prepareSerializeProjectListItemDto(_data as ProjectListItemDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeProjectListItemDto(_data: ProjectListItemDto): ProjectListItemDto {
  const data: Record<string, any> = { ..._data };
  return data as ProjectListItemDto;
}
export interface ProjectSignerDto  {
  id: number;
  roleId: number;
  priority: number;
  signer: SignerDto;
}
export function deserializeProjectSignerDto(json: string): ProjectSignerDto {
  const data = JSON.parse(json) as ProjectSignerDto;
  initProjectSignerDto(data);
  return data;
}
export function initProjectSignerDto(_data: ProjectSignerDto) {
  if (_data) {
    _data.signer = _data["signer"] && initSignerDto(_data["signer"]);
  }
  return _data;
}
export function serializeProjectSignerDto(_data: ProjectSignerDto | undefined) {
  if (_data) {
    _data = prepareSerializeProjectSignerDto(_data as ProjectSignerDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeProjectSignerDto(_data: ProjectSignerDto): ProjectSignerDto {
  const data: Record<string, any> = { ..._data };
  data["signer"] = _data.signer && prepareSerializeSignerDto(_data.signer);
  return data as ProjectSignerDto;
}
export interface ProjectSignerCreateDto  {
  signerId: number;
  projectRoleId: number;
}
export function deserializeProjectSignerCreateDto(json: string): ProjectSignerCreateDto {
  const data = JSON.parse(json) as ProjectSignerCreateDto;
  initProjectSignerCreateDto(data);
  return data;
}
export function initProjectSignerCreateDto(_data: ProjectSignerCreateDto) {
    return _data;
}
export function serializeProjectSignerCreateDto(_data: ProjectSignerCreateDto | undefined) {
  if (_data) {
    _data = prepareSerializeProjectSignerCreateDto(_data as ProjectSignerCreateDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeProjectSignerCreateDto(_data: ProjectSignerCreateDto): ProjectSignerCreateDto {
  const data: Record<string, any> = { ..._data };
  return data as ProjectSignerCreateDto;
}
export interface PagedResultOfProjectSignerDto  {
  data: ProjectSignerDto[];
  totalCount: number;
}
export function deserializePagedResultOfProjectSignerDto(json: string): PagedResultOfProjectSignerDto {
  const data = JSON.parse(json) as PagedResultOfProjectSignerDto;
  initPagedResultOfProjectSignerDto(data);
  return data;
}
export function initPagedResultOfProjectSignerDto(_data: PagedResultOfProjectSignerDto) {
  if (_data) {
    if (Array.isArray(_data["data"])) {
      _data.data = _data["data"].map(item => 
        initProjectSignerDto(item)
      );
    }
  }
  return _data;
}
export function serializePagedResultOfProjectSignerDto(_data: PagedResultOfProjectSignerDto | undefined) {
  if (_data) {
    _data = prepareSerializePagedResultOfProjectSignerDto(_data as PagedResultOfProjectSignerDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePagedResultOfProjectSignerDto(_data: PagedResultOfProjectSignerDto): PagedResultOfProjectSignerDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.data)) {
    data["data"] = _data.data.map(item => 
        prepareSerializeProjectSignerDto(item)
    );
  }
  return data as PagedResultOfProjectSignerDto;
}
export interface UpdateProjectSignersDto  {
  projectRoleId: number;
  signerIds: number[];
}
export function deserializeUpdateProjectSignersDto(json: string): UpdateProjectSignersDto {
  const data = JSON.parse(json) as UpdateProjectSignersDto;
  initUpdateProjectSignersDto(data);
  return data;
}
export function initUpdateProjectSignersDto(_data: UpdateProjectSignersDto) {
  if (_data) {
    _data.signerIds = _data["signerIds"];
  }
  return _data;
}
export function serializeUpdateProjectSignersDto(_data: UpdateProjectSignersDto | undefined) {
  if (_data) {
    _data = prepareSerializeUpdateProjectSignersDto(_data as UpdateProjectSignersDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeUpdateProjectSignersDto(_data: UpdateProjectSignersDto): UpdateProjectSignersDto {
  const data: Record<string, any> = { ..._data };
  return data as UpdateProjectSignersDto;
}
export interface ProjectRoleDto  {
  id: number;
  projectId: number;
  name: string;
  signers: ProjectSignerDto[] | null;
}
export function deserializeProjectRoleDto(json: string): ProjectRoleDto {
  const data = JSON.parse(json) as ProjectRoleDto;
  initProjectRoleDto(data);
  return data;
}
export function initProjectRoleDto(_data: ProjectRoleDto) {
  if (_data) {
    if (Array.isArray(_data["signers"])) {
      _data.signers = _data["signers"].map(item => 
        initProjectSignerDto(item)
      );
    }
  }
  return _data;
}
export function serializeProjectRoleDto(_data: ProjectRoleDto | undefined) {
  if (_data) {
    _data = prepareSerializeProjectRoleDto(_data as ProjectRoleDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeProjectRoleDto(_data: ProjectRoleDto): ProjectRoleDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.signers)) {
    data["signers"] = _data.signers.map(item => 
        prepareSerializeProjectSignerDto(item)
    );
  }
  return data as ProjectRoleDto;
}
export interface CreateProjectRoleDto  {
  projectId: number;
  name: string;
}
export function deserializeCreateProjectRoleDto(json: string): CreateProjectRoleDto {
  const data = JSON.parse(json) as CreateProjectRoleDto;
  initCreateProjectRoleDto(data);
  return data;
}
export function initCreateProjectRoleDto(_data: CreateProjectRoleDto) {
    return _data;
}
export function serializeCreateProjectRoleDto(_data: CreateProjectRoleDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreateProjectRoleDto(_data as CreateProjectRoleDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCreateProjectRoleDto(_data: CreateProjectRoleDto): CreateProjectRoleDto {
  const data: Record<string, any> = { ..._data };
  return data as CreateProjectRoleDto;
}
export interface PatchProjectRoleDto  {
  name?: string;
}
export function deserializePatchProjectRoleDto(json: string): PatchProjectRoleDto {
  const data = JSON.parse(json) as PatchProjectRoleDto;
  initPatchProjectRoleDto(data);
  return data;
}
export function initPatchProjectRoleDto(_data: PatchProjectRoleDto) {
    return _data;
}
export function serializePatchProjectRoleDto(_data: PatchProjectRoleDto | undefined) {
  if (_data) {
    _data = prepareSerializePatchProjectRoleDto(_data as PatchProjectRoleDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePatchProjectRoleDto(_data: PatchProjectRoleDto): PatchProjectRoleDto {
  const data: Record<string, any> = { ..._data };
  return data as PatchProjectRoleDto;
}
export interface PagedResultOfProjectRoleDto  {
  data: ProjectRoleDto[];
  totalCount: number;
}
export function deserializePagedResultOfProjectRoleDto(json: string): PagedResultOfProjectRoleDto {
  const data = JSON.parse(json) as PagedResultOfProjectRoleDto;
  initPagedResultOfProjectRoleDto(data);
  return data;
}
export function initPagedResultOfProjectRoleDto(_data: PagedResultOfProjectRoleDto) {
  if (_data) {
    if (Array.isArray(_data["data"])) {
      _data.data = _data["data"].map(item => 
        initProjectRoleDto(item)
      );
    }
  }
  return _data;
}
export function serializePagedResultOfProjectRoleDto(_data: PagedResultOfProjectRoleDto | undefined) {
  if (_data) {
    _data = prepareSerializePagedResultOfProjectRoleDto(_data as PagedResultOfProjectRoleDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePagedResultOfProjectRoleDto(_data: PagedResultOfProjectRoleDto): PagedResultOfProjectRoleDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.data)) {
    data["data"] = _data.data.map(item => 
        prepareSerializeProjectRoleDto(item)
    );
  }
  return data as PagedResultOfProjectRoleDto;
}
export enum ExternalEditingType {
    SharepointWordBrowser = "SharepointWordBrowser",
    SharepointWordApp = "SharepointWordApp",
}
export interface DocumentDto  {
  id: number;
  name: string;
  status: Status;
  content: string;
  initialDocumentId: number | null;
  isReadOnly: boolean;
  versionUpdaterUser: DocumentVersionUpdaterUserDto | null;
  /** True if current version of document is exported to SharePoint.
False if document is not exported or was changed after exporting. */
  isExported: boolean;
  /** Indicates if document should be reopened after update */
  isNeedToBeReopened: boolean;
  variables: RefDocumentVariableDtoWithId[];
}
export function deserializeDocumentDto(json: string): DocumentDto {
  const data = JSON.parse(json) as DocumentDto;
  initDocumentDto(data);
  return data;
}
export function initDocumentDto(_data: DocumentDto) {
  if (_data) {
    _data.status = _data["status"];
    _data.versionUpdaterUser = _data["versionUpdaterUser"] && initDocumentVersionUpdaterUserDto(_data["versionUpdaterUser"]);
    if (Array.isArray(_data["variables"])) {
      _data.variables = _data["variables"].map(item => 
        initRefDocumentVariableDtoWithId(item)
      );
    }
  }
  return _data;
}
export function serializeDocumentDto(_data: DocumentDto | undefined) {
  if (_data) {
    _data = prepareSerializeDocumentDto(_data as DocumentDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeDocumentDto(_data: DocumentDto): DocumentDto {
  const data: Record<string, any> = { ..._data };
  data["versionUpdaterUser"] = _data.versionUpdaterUser && prepareSerializeDocumentVersionUpdaterUserDto(_data.versionUpdaterUser);
  if (Array.isArray(_data.variables)) {
    data["variables"] = _data.variables.map(item => 
        prepareSerializeRefDocumentVariableDtoWithId(item)
    );
  }
  return data as DocumentDto;
}
export enum Status {
    Draft = "Draft",
    ReadyForReview = "ReadyForReview",
    CanBeSigned = "CanBeSigned",
    Signing = "Signing",
    Signed = "Signed",
    NotApplicable = "NotApplicable",
}
export interface DocumentVersionUpdaterUserDto  {
  name: string;
  updatedAt: Date;
}
export function deserializeDocumentVersionUpdaterUserDto(json: string): DocumentVersionUpdaterUserDto {
  const data = JSON.parse(json) as DocumentVersionUpdaterUserDto;
  initDocumentVersionUpdaterUserDto(data);
  return data;
}
export function initDocumentVersionUpdaterUserDto(_data: DocumentVersionUpdaterUserDto) {
  if (_data) {
    _data.updatedAt = _data["updatedAt"] ? new Date(_data["updatedAt"].toString()) : <any>null;
  }
  return _data;
}
export function serializeDocumentVersionUpdaterUserDto(_data: DocumentVersionUpdaterUserDto | undefined) {
  if (_data) {
    _data = prepareSerializeDocumentVersionUpdaterUserDto(_data as DocumentVersionUpdaterUserDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeDocumentVersionUpdaterUserDto(_data: DocumentVersionUpdaterUserDto): DocumentVersionUpdaterUserDto {
  const data: Record<string, any> = { ..._data };
  data["updatedAt"] = _data.updatedAt && _data.updatedAt.toISOString();
  return data as DocumentVersionUpdaterUserDto;
}
export interface RefDocumentVariableDtoWithId  {
  id: number;
  variable: RefDocumentVariableDto;
}
export function deserializeRefDocumentVariableDtoWithId(json: string): RefDocumentVariableDtoWithId {
  const data = JSON.parse(json) as RefDocumentVariableDtoWithId;
  initRefDocumentVariableDtoWithId(data);
  return data;
}
export function initRefDocumentVariableDtoWithId(_data: RefDocumentVariableDtoWithId) {
  if (_data) {
    _data.variable = _data["variable"] && initRefDocumentVariableDto(_data["variable"]);
  }
  return _data;
}
export function serializeRefDocumentVariableDtoWithId(_data: RefDocumentVariableDtoWithId | undefined) {
  if (_data) {
    _data = prepareSerializeRefDocumentVariableDtoWithId(_data as RefDocumentVariableDtoWithId);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeRefDocumentVariableDtoWithId(_data: RefDocumentVariableDtoWithId): RefDocumentVariableDtoWithId {
  const data: Record<string, any> = { ..._data };
  data["variable"] = _data.variable && prepareSerializeRefDocumentVariableDto(_data.variable);
  return data as RefDocumentVariableDtoWithId;
}
export interface RefDocumentVariableDto  {
  id: number;
  value: string;
  rows: number | null;
  columns: number | null;
}
export function deserializeRefDocumentVariableDto(json: string): RefDocumentVariableDto {
  const data = JSON.parse(json) as RefDocumentVariableDto;
  initRefDocumentVariableDto(data);
  return data;
}
export function initRefDocumentVariableDto(_data: RefDocumentVariableDto) {
    return _data;
}
export function serializeRefDocumentVariableDto(_data: RefDocumentVariableDto | undefined) {
  if (_data) {
    _data = prepareSerializeRefDocumentVariableDto(_data as RefDocumentVariableDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeRefDocumentVariableDto(_data: RefDocumentVariableDto): RefDocumentVariableDto {
  const data: Record<string, any> = { ..._data };
  return data as RefDocumentVariableDto;
}
export interface RefDocumentEditingUserDto  {
  isLocked: boolean;
  id: number | null;
  editingType: DocumentEditingType | null;
  sessionIdentifier: string | null;
  userName: string | null;
  lockoutEnd: Date | null;
}
export function deserializeRefDocumentEditingUserDto(json: string): RefDocumentEditingUserDto {
  const data = JSON.parse(json) as RefDocumentEditingUserDto;
  initRefDocumentEditingUserDto(data);
  return data;
}
export function initRefDocumentEditingUserDto(_data: RefDocumentEditingUserDto) {
  if (_data) {
    _data.editingType = _data["editingType"];
    _data.lockoutEnd = _data["lockoutEnd"] ? new Date(_data["lockoutEnd"].toString()) : <any>null;
  }
  return _data;
}
export function serializeRefDocumentEditingUserDto(_data: RefDocumentEditingUserDto | undefined) {
  if (_data) {
    _data = prepareSerializeRefDocumentEditingUserDto(_data as RefDocumentEditingUserDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeRefDocumentEditingUserDto(_data: RefDocumentEditingUserDto): RefDocumentEditingUserDto {
  const data: Record<string, any> = { ..._data };
  data["lockoutEnd"] = _data.lockoutEnd && _data.lockoutEnd.toISOString();
  return data as RefDocumentEditingUserDto;
}
export enum DocumentEditingType {
    Magadan = "Magadan",
    Office365 = "Office365",
}
export interface CreateDocumentDto  {
  name: string;
  releaseId: number;
  content: string;
  status: Status;
  isReadOnly: boolean;
  isImported: boolean;
  folderId: string | null;
}
export function deserializeCreateDocumentDto(json: string): CreateDocumentDto {
  const data = JSON.parse(json) as CreateDocumentDto;
  initCreateDocumentDto(data);
  return data;
}
export function initCreateDocumentDto(_data: CreateDocumentDto) {
  if (_data) {
    _data.status = _data["status"];
  }
  return _data;
}
export function serializeCreateDocumentDto(_data: CreateDocumentDto | undefined) {
  if (_data) {
    _data = prepareSerializeCreateDocumentDto(_data as CreateDocumentDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeCreateDocumentDto(_data: CreateDocumentDto): CreateDocumentDto {
  const data: Record<string, any> = { ..._data };
  return data as CreateDocumentDto;
}
export interface PatchDocumentDto  {
  name?: string;
  content?: string;
  status?: Status;
  isExported?: boolean;
  isImported?: boolean;
}
export function deserializePatchDocumentDto(json: string): PatchDocumentDto {
  const data = JSON.parse(json) as PatchDocumentDto;
  initPatchDocumentDto(data);
  return data;
}
export function initPatchDocumentDto(_data: PatchDocumentDto) {
  if (_data) {
    _data.status = _data["status"];
  }
  return _data;
}
export function serializePatchDocumentDto(_data: PatchDocumentDto | undefined) {
  if (_data) {
    _data = prepareSerializePatchDocumentDto(_data as PatchDocumentDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePatchDocumentDto(_data: PatchDocumentDto): PatchDocumentDto {
  const data: Record<string, any> = { ..._data };
  return data as PatchDocumentDto;
}
export interface PagedResultOfDocumentListItemDto  {
  data: DocumentListItemDto[];
  totalCount: number;
}
export function deserializePagedResultOfDocumentListItemDto(json: string): PagedResultOfDocumentListItemDto {
  const data = JSON.parse(json) as PagedResultOfDocumentListItemDto;
  initPagedResultOfDocumentListItemDto(data);
  return data;
}
export function initPagedResultOfDocumentListItemDto(_data: PagedResultOfDocumentListItemDto) {
  if (_data) {
    if (Array.isArray(_data["data"])) {
      _data.data = _data["data"].map(item => 
        initDocumentListItemDto(item)
      );
    }
  }
  return _data;
}
export function serializePagedResultOfDocumentListItemDto(_data: PagedResultOfDocumentListItemDto | undefined) {
  if (_data) {
    _data = prepareSerializePagedResultOfDocumentListItemDto(_data as PagedResultOfDocumentListItemDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializePagedResultOfDocumentListItemDto(_data: PagedResultOfDocumentListItemDto): PagedResultOfDocumentListItemDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.data)) {
    data["data"] = _data.data.map(item => 
        prepareSerializeDocumentListItemDto(item)
    );
  }
  return data as PagedResultOfDocumentListItemDto;
}
export interface DocumentListItemDto  {
  id: number;
  name: string;
  status: Status;
  initialDocumentId: number | null;
  isReadOnly: boolean;
  version: string;
  isExported: boolean;
  versionUpdaterUser: DocumentVersionUpdaterUserDto | null;
  expiredVariables: ExpiredVariableDto[];
}
export function deserializeDocumentListItemDto(json: string): DocumentListItemDto {
  const data = JSON.parse(json) as DocumentListItemDto;
  initDocumentListItemDto(data);
  return data;
}
export function initDocumentListItemDto(_data: DocumentListItemDto) {
  if (_data) {
    _data.status = _data["status"];
    _data.versionUpdaterUser = _data["versionUpdaterUser"] && initDocumentVersionUpdaterUserDto(_data["versionUpdaterUser"]);
    if (Array.isArray(_data["expiredVariables"])) {
      _data.expiredVariables = _data["expiredVariables"].map(item => 
        initExpiredVariableDto(item)
      );
    }
  }
  return _data;
}
export function serializeDocumentListItemDto(_data: DocumentListItemDto | undefined) {
  if (_data) {
    _data = prepareSerializeDocumentListItemDto(_data as DocumentListItemDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeDocumentListItemDto(_data: DocumentListItemDto): DocumentListItemDto {
  const data: Record<string, any> = { ..._data };
  data["versionUpdaterUser"] = _data.versionUpdaterUser && prepareSerializeDocumentVersionUpdaterUserDto(_data.versionUpdaterUser);
  if (Array.isArray(_data.expiredVariables)) {
    data["expiredVariables"] = _data.expiredVariables.map(item => 
        prepareSerializeExpiredVariableDto(item)
    );
  }
  return data as DocumentListItemDto;
}
export interface ExpiredVariableDto  {
  variableId: number;
  variableName: string;
  variableUpdateDate: Date;
}
export function deserializeExpiredVariableDto(json: string): ExpiredVariableDto {
  const data = JSON.parse(json) as ExpiredVariableDto;
  initExpiredVariableDto(data);
  return data;
}
export function initExpiredVariableDto(_data: ExpiredVariableDto) {
  if (_data) {
    _data.variableUpdateDate = _data["variableUpdateDate"] ? new Date(_data["variableUpdateDate"].toString()) : <any>null;
  }
  return _data;
}
export function serializeExpiredVariableDto(_data: ExpiredVariableDto | undefined) {
  if (_data) {
    _data = prepareSerializeExpiredVariableDto(_data as ExpiredVariableDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeExpiredVariableDto(_data: ExpiredVariableDto): ExpiredVariableDto {
  const data: Record<string, any> = { ..._data };
  data["variableUpdateDate"] = _data.variableUpdateDate && _data.variableUpdateDate.toISOString();
  return data as ExpiredVariableDto;
}
export interface MergeTableRequestBody  {
  fileData: string;
  variableId: number;
  tableRangeStart: number;
  tableRangeEnd: number;
  rowStartIndex: number;
  columnStartIndex: number;
}
export function deserializeMergeTableRequestBody(json: string): MergeTableRequestBody {
  const data = JSON.parse(json) as MergeTableRequestBody;
  initMergeTableRequestBody(data);
  return data;
}
export function initMergeTableRequestBody(_data: MergeTableRequestBody) {
    return _data;
}
export function serializeMergeTableRequestBody(_data: MergeTableRequestBody | undefined) {
  if (_data) {
    _data = prepareSerializeMergeTableRequestBody(_data as MergeTableRequestBody);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeMergeTableRequestBody(_data: MergeTableRequestBody): MergeTableRequestBody {
  const data: Record<string, any> = { ..._data };
  return data as MergeTableRequestBody;
}
export interface InsertTableRequestBody  {
  fileData: string;
  insertionPosition: number;
  variableId: number;
  tablePropertiesJson: string | null;
}
export function deserializeInsertTableRequestBody(json: string): InsertTableRequestBody {
  const data = JSON.parse(json) as InsertTableRequestBody;
  initInsertTableRequestBody(data);
  return data;
}
export function initInsertTableRequestBody(_data: InsertTableRequestBody) {
    return _data;
}
export function serializeInsertTableRequestBody(_data: InsertTableRequestBody | undefined) {
  if (_data) {
    _data = prepareSerializeInsertTableRequestBody(_data as InsertTableRequestBody);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeInsertTableRequestBody(_data: InsertTableRequestBody): InsertTableRequestBody {
  const data: Record<string, any> = { ..._data };
  return data as InsertTableRequestBody;
}
export interface SetTablePropertiesInfo  {
  json: string;
  index: number;
}
export function deserializeSetTablePropertiesInfo(json: string): SetTablePropertiesInfo {
  const data = JSON.parse(json) as SetTablePropertiesInfo;
  initSetTablePropertiesInfo(data);
  return data;
}
export function initSetTablePropertiesInfo(_data: SetTablePropertiesInfo) {
    return _data;
}
export function serializeSetTablePropertiesInfo(_data: SetTablePropertiesInfo | undefined) {
  if (_data) {
    _data = prepareSerializeSetTablePropertiesInfo(_data as SetTablePropertiesInfo);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeSetTablePropertiesInfo(_data: SetTablePropertiesInfo): SetTablePropertiesInfo {
  const data: Record<string, any> = { ..._data };
  return data as SetTablePropertiesInfo;
}
export interface GetTableRequestBody  {
  tablesInfos: GetTablePropertiesInfo[];
  fileData: string;
}
export function deserializeGetTableRequestBody(json: string): GetTableRequestBody {
  const data = JSON.parse(json) as GetTableRequestBody;
  initGetTableRequestBody(data);
  return data;
}
export function initGetTableRequestBody(_data: GetTableRequestBody) {
  if (_data) {
    if (Array.isArray(_data["tablesInfos"])) {
      _data.tablesInfos = _data["tablesInfos"].map(item => 
        initGetTablePropertiesInfo(item)
      );
    }
  }
  return _data;
}
export function serializeGetTableRequestBody(_data: GetTableRequestBody | undefined) {
  if (_data) {
    _data = prepareSerializeGetTableRequestBody(_data as GetTableRequestBody);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeGetTableRequestBody(_data: GetTableRequestBody): GetTableRequestBody {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.tablesInfos)) {
    data["tablesInfos"] = _data.tablesInfos.map(item => 
        prepareSerializeGetTablePropertiesInfo(item)
    );
  }
  return data as GetTableRequestBody;
}
export interface GetTablePropertiesInfo  {
  index: number;
  isEnormous: boolean;
}
export function deserializeGetTablePropertiesInfo(json: string): GetTablePropertiesInfo {
  const data = JSON.parse(json) as GetTablePropertiesInfo;
  initGetTablePropertiesInfo(data);
  return data;
}
export function initGetTablePropertiesInfo(_data: GetTablePropertiesInfo) {
    return _data;
}
export function serializeGetTablePropertiesInfo(_data: GetTablePropertiesInfo | undefined) {
  if (_data) {
    _data = prepareSerializeGetTablePropertiesInfo(_data as GetTablePropertiesInfo);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeGetTablePropertiesInfo(_data: GetTablePropertiesInfo): GetTablePropertiesInfo {
  const data: Record<string, any> = { ..._data };
  return data as GetTablePropertiesInfo;
}
export interface UpdateDocumentVariablesRequestBody  {
  fileData: string;
  variableIds: number[];
  releaseId: number;
}
export function deserializeUpdateDocumentVariablesRequestBody(json: string): UpdateDocumentVariablesRequestBody {
  const data = JSON.parse(json) as UpdateDocumentVariablesRequestBody;
  initUpdateDocumentVariablesRequestBody(data);
  return data;
}
export function initUpdateDocumentVariablesRequestBody(_data: UpdateDocumentVariablesRequestBody) {
  if (_data) {
    _data.variableIds = _data["variableIds"];
  }
  return _data;
}
export function serializeUpdateDocumentVariablesRequestBody(_data: UpdateDocumentVariablesRequestBody | undefined) {
  if (_data) {
    _data = prepareSerializeUpdateDocumentVariablesRequestBody(_data as UpdateDocumentVariablesRequestBody);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeUpdateDocumentVariablesRequestBody(_data: UpdateDocumentVariablesRequestBody): UpdateDocumentVariablesRequestBody {
  const data: Record<string, any> = { ..._data };
  return data as UpdateDocumentVariablesRequestBody;
}
export interface AvailableRolesDto  {
  documentId: number;
  roles: ProjectRoleDto[];
}
export function deserializeAvailableRolesDto(json: string): AvailableRolesDto {
  const data = JSON.parse(json) as AvailableRolesDto;
  initAvailableRolesDto(data);
  return data;
}
export function initAvailableRolesDto(_data: AvailableRolesDto) {
  if (_data) {
    if (Array.isArray(_data["roles"])) {
      _data.roles = _data["roles"].map(item => 
        initProjectRoleDto(item)
      );
    }
  }
  return _data;
}
export function serializeAvailableRolesDto(_data: AvailableRolesDto | undefined) {
  if (_data) {
    _data = prepareSerializeAvailableRolesDto(_data as AvailableRolesDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeAvailableRolesDto(_data: AvailableRolesDto): AvailableRolesDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.roles)) {
    data["roles"] = _data.roles.map(item => 
        prepareSerializeProjectRoleDto(item)
    );
  }
  return data as AvailableRolesDto;
}
export interface DocumentSigningStatusDto  {
  documentId: number;
  isSigning: boolean;
  roles: RoleSigningStatusDto[];
}
export function deserializeDocumentSigningStatusDto(json: string): DocumentSigningStatusDto {
  const data = JSON.parse(json) as DocumentSigningStatusDto;
  initDocumentSigningStatusDto(data);
  return data;
}
export function initDocumentSigningStatusDto(_data: DocumentSigningStatusDto) {
  if (_data) {
    if (Array.isArray(_data["roles"])) {
      _data.roles = _data["roles"].map(item => 
        initRoleSigningStatusDto(item)
      );
    }
  }
  return _data;
}
export function serializeDocumentSigningStatusDto(_data: DocumentSigningStatusDto | undefined) {
  if (_data) {
    _data = prepareSerializeDocumentSigningStatusDto(_data as DocumentSigningStatusDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeDocumentSigningStatusDto(_data: DocumentSigningStatusDto): DocumentSigningStatusDto {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.roles)) {
    data["roles"] = _data.roles.map(item => 
        prepareSerializeRoleSigningStatusDto(item)
    );
  }
  return data as DocumentSigningStatusDto;
}
export interface RoleSigningStatusDto  {
  role: ProjectRoleDto;
  status: RoleSigningStatus;
  /** Required to inform user, that role can not be deleted. */
  isDeletable: boolean;
}
export function deserializeRoleSigningStatusDto(json: string): RoleSigningStatusDto {
  const data = JSON.parse(json) as RoleSigningStatusDto;
  initRoleSigningStatusDto(data);
  return data;
}
export function initRoleSigningStatusDto(_data: RoleSigningStatusDto) {
  if (_data) {
    _data.role = _data["role"] && initProjectRoleDto(_data["role"]);
    _data.status = _data["status"];
  }
  return _data;
}
export function serializeRoleSigningStatusDto(_data: RoleSigningStatusDto | undefined) {
  if (_data) {
    _data = prepareSerializeRoleSigningStatusDto(_data as RoleSigningStatusDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeRoleSigningStatusDto(_data: RoleSigningStatusDto): RoleSigningStatusDto {
  const data: Record<string, any> = { ..._data };
  data["role"] = _data.role && prepareSerializeProjectRoleDto(_data.role);
  return data as RoleSigningStatusDto;
}
export enum RoleSigningStatus {
    NotStarted = "NotStarted",
    WaitingForItsTurn = "WaitingForItsTurn",
    WaitingForSignature = "WaitingForSignature",
    SignedByAnotherRole = "SignedByAnotherRole",
    Signed = "Signed",
    InvalidSignature = "InvalidSignature",
    InvalidSigner = "InvalidSigner",
}
export interface SignerToResendNotificationDto  {
  documentId: number;
  roleName: string;
  signer: SignerDto;
}
export function deserializeSignerToResendNotificationDto(json: string): SignerToResendNotificationDto {
  const data = JSON.parse(json) as SignerToResendNotificationDto;
  initSignerToResendNotificationDto(data);
  return data;
}
export function initSignerToResendNotificationDto(_data: SignerToResendNotificationDto) {
  if (_data) {
    _data.signer = _data["signer"] && initSignerDto(_data["signer"]);
  }
  return _data;
}
export function serializeSignerToResendNotificationDto(_data: SignerToResendNotificationDto | undefined) {
  if (_data) {
    _data = prepareSerializeSignerToResendNotificationDto(_data as SignerToResendNotificationDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeSignerToResendNotificationDto(_data: SignerToResendNotificationDto): SignerToResendNotificationDto {
  const data: Record<string, any> = { ..._data };
  data["signer"] = _data.signer && prepareSerializeSignerDto(_data.signer);
  return data as SignerToResendNotificationDto;
}
export interface TestPatchDto  {
  value?: string;
}
export function deserializeTestPatchDto(json: string): TestPatchDto {
  const data = JSON.parse(json) as TestPatchDto;
  initTestPatchDto(data);
  return data;
}
export function initTestPatchDto(_data: TestPatchDto) {
    return _data;
}
export function serializeTestPatchDto(_data: TestPatchDto | undefined) {
  if (_data) {
    _data = prepareSerializeTestPatchDto(_data as TestPatchDto);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeTestPatchDto(_data: TestPatchDto): TestPatchDto {
  const data: Record<string, any> = { ..._data };
  return data as TestPatchDto;
}
export interface TableData  {
  columns: string[];
  fields: { [key: string]: any; }[];
  /** Optional. Contains merged cells information.
Format: {rowIndex: {startCellIndex: endCellIndex}} */
  merged_cells?: { [key: string]: { [key: string]: number; }; } | null;
  /** Optional. Contains predefined table cells properties. */
  cells_properties?: TableDataCellProperties[] | null;
}
export function deserializeTableData(json: string): TableData {
  const data = JSON.parse(json) as TableData;
  initTableData(data);
  return data;
}
export function initTableData(_data: TableData) {
  if (_data) {
    _data.columns = _data["columns"];
    _data.fields = _data["fields"];
    if (Array.isArray(_data["cells_properties"])) {
      _data.cells_properties = _data["cells_properties"].map(item => 
        initTableDataCellProperties(item)
      );
    }
  }
  return _data;
}
export function serializeTableData(_data: TableData | undefined) {
  if (_data) {
    _data = prepareSerializeTableData(_data as TableData);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeTableData(_data: TableData): TableData {
  const data: Record<string, any> = { ..._data };
  if (Array.isArray(_data.cells_properties)) {
    data["cells_properties"] = _data.cells_properties.map(item => 
        prepareSerializeTableDataCellProperties(item)
    );
  }
  return data as TableData;
}
export interface TableDataCellProperties  {
  position: TableCellPosition;
  style: TableDataCellStyle;
}
export function deserializeTableDataCellProperties(json: string): TableDataCellProperties {
  const data = JSON.parse(json) as TableDataCellProperties;
  initTableDataCellProperties(data);
  return data;
}
export function initTableDataCellProperties(_data: TableDataCellProperties) {
  if (_data) {
    _data.position = _data["position"] && initTableCellPosition(_data["position"]);
    _data.style = _data["style"] && initTableDataCellStyle(_data["style"]);
  }
  return _data;
}
export function serializeTableDataCellProperties(_data: TableDataCellProperties | undefined) {
  if (_data) {
    _data = prepareSerializeTableDataCellProperties(_data as TableDataCellProperties);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeTableDataCellProperties(_data: TableDataCellProperties): TableDataCellProperties {
  const data: Record<string, any> = { ..._data };
  data["position"] = _data.position && prepareSerializeTableCellPosition(_data.position);
  data["style"] = _data.style && prepareSerializeTableDataCellStyle(_data.style);
  return data as TableDataCellProperties;
}
/** Determines cell position in table */
export interface TableCellPosition  {
  row: number;
  cell: number;
}
export function deserializeTableCellPosition(json: string): TableCellPosition {
  const data = JSON.parse(json) as TableCellPosition;
  initTableCellPosition(data);
  return data;
}
export function initTableCellPosition(_data: TableCellPosition) {
    return _data;
}
export function serializeTableCellPosition(_data: TableCellPosition | undefined) {
  if (_data) {
    _data = prepareSerializeTableCellPosition(_data as TableCellPosition);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeTableCellPosition(_data: TableCellPosition): TableCellPosition {
  const data: Record<string, any> = { ..._data };
  return data as TableCellPosition;
}
/** Properties that will be applied to the table after insertion to the document. To apply them well, JSON properties names must be same as TableCell properties names. https://docs.devexpress.com/AspNetCore/js-DevExpress.RichEdit.TableCell */
export interface TableDataCellStyle  {
  bold: boolean;
  backgroundColor: string;
}
export function deserializeTableDataCellStyle(json: string): TableDataCellStyle {
  const data = JSON.parse(json) as TableDataCellStyle;
  initTableDataCellStyle(data);
  return data;
}
export function initTableDataCellStyle(_data: TableDataCellStyle) {
    return _data;
}
export function serializeTableDataCellStyle(_data: TableDataCellStyle | undefined) {
  if (_data) {
    _data = prepareSerializeTableDataCellStyle(_data as TableDataCellStyle);
  }
  return JSON.stringify(_data);
}
export function prepareSerializeTableDataCellStyle(_data: TableDataCellStyle): TableDataCellStyle {
  const data: Record<string, any> = { ..._data };
  return data as TableDataCellStyle;
}
import type { AxiosError } from 'axios'
export interface FileParameter {
    data: any;
    fileName: string;
}
export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}
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