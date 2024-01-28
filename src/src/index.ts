import {
  QueryMetaProvider,
  QueryMetaContext,
  QueryMetaContextValue,
} from './QueryMetaProvider';

export { QueryMetaProvider, QueryMetaContext };
export type { QueryMetaContextValue };
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
