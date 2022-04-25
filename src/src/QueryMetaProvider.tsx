import React, { PropsWithChildren, useMemo } from 'react';
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
}>;

export const QueryMetaContext = React.createContext<{
  metaFn?: () => QueryMeta;
}>({});

/*
 * Provides Meta information for queries (i.e. `useQuery({ meta: META })`).
 * All queries within children of this scope will have Meta set to either `meta` prop or the result of `metaFn()`.
 */
export const QueryMetaProvider: React.FC<QueryScopeProps> = (props) => {
  const value = useMemo(() => {
    const metaFn = props.metaFn ?? (props.meta ? () => props.meta! : undefined);
    return { metaFn };
  }, [props.metaFn, props.meta]);

  return (
    <QueryMetaContext.Provider value={value}>
      {props.children}
    </QueryMetaContext.Provider>
  );
};
