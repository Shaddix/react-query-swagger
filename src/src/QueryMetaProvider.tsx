import React, { PropsWithChildren, useContext, useMemo } from 'react';
import { QueryMeta } from 'react-query';

type QueryScopeProps = PropsWithChildren<{
  /*
   * Every query within a QueryMetaProvider will have `meta` provided by this prop
   */
  meta?: QueryMeta;
  /*
   * metaFn has priority over meta prop (i.e. if both are defined, metaFn is used)
   */
  metaFn?: () => QueryMeta;

  /*
   * If true Metas from parent's QueryMetaContexts will be erased.
   * By default new Metas are appended to the parent's one.
   */
  resetParentMeta?: boolean;
}>;

export const QueryMetaContext = React.createContext<{
  metaFn?: () => QueryMeta;
}>({});

/*
 * Provides Meta information for queries (i.e. `useQuery({ meta: META })`).
 * All queries within children of this scope will have Meta set to either `meta` prop or the result of `metaFn()`.
 */
export const QueryMetaProvider: React.FC<QueryScopeProps> = (props) => {
  const parentMeta = useContext(QueryMetaContext);
  const value = useMemo(() => {
    const metaFn = () => {
      const meta = props.metaFn ? props.metaFn() : props.meta;
      return {
        ...(props.resetParentMeta || !parentMeta.metaFn
          ? {}
          : parentMeta.metaFn()),
        ...meta,
      };
    };
    return {
      metaFn,
    };
  }, [parentMeta.metaFn, props.metaFn, props.meta, props.resetParentMeta]);

  return (
    <QueryMetaContext.Provider value={value}>
      {props.children}
    </QueryMetaContext.Provider>
  );
};
