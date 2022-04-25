import React, { PropsWithChildren, useEffect, useMemo } from 'react';
import './App.css';
import { AxiosQuery } from './api';
import { Status } from './api/axios-client';
import { PetsList } from './components/PetsList';
import { QueryMetaProvider, QueryMetaContext } from 'react-query-swagger';
import { QueryMeta, QueryObserver, useQueryClient } from 'react-query';

function App() {
  const queryClient = useQueryClient();
  const pets1Query = AxiosQuery.Query.useFindPetsByStatusQuery({
    status: [Status.Pending, Status.Sold],
  });
  const pets2Query = AxiosQuery.Query.useFindPetsByStatusQuery({
    status: [Status.Pending, Status.Sold, Status.Available],
  });
  const pets3Query = AxiosQuery.Query.useFindPetsByStatusQuery(
    [Status.Pending, Status.Available],
    { enabled: false },
  );
  useEffect(() => {
    console.log(
      AxiosQuery.Query.findPetsByStatusQueryKey([
        Status.Pending,
        Status.Available,
      ]),
    );
    console.log(
      'loginQueryKey1',
      AxiosQuery.Query.loginUserQueryKey({ username: 'zxc', password: 'qwe' }),
    );
    console.log(
      'loginQueryKey2',
      AxiosQuery.Query.loginUserQueryKey('zxc', 'qwe'),
    );
    console.log(
      'findPetsByTagsQueryKey',
      AxiosQuery.Query.findPetsByTagsQueryKey(['zxc', 'qwe']),
    );
  }, []);

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'stretch',
          width: '100%',
        }}
      >
        <div style={{ flex: 1 }}>
          <h1>Pets</h1>
          {pets1Query.isLoading && 'Loading...'}
          {pets1Query.isError && pets1Query.error}
          <ol>
            {pets1Query.data?.map((pet, index) => (
              <li key={index}>{pet.name}</li>
            ))}
          </ol>
        </div>
        <div style={{ flex: 1 }}>
          <h1>Pets</h1>
          {pets2Query.isLoading && 'Loading...'}
          {pets2Query.isError && pets2Query.error}
          <ol>
            {pets2Query.data?.map((pet, index) => (
              <li key={index}>{pet.name}</li>
            ))}
          </ol>
        </div>
        <div style={{ flex: 1 }}>
          <h1>Pets</h1>
          {pets3Query.isLoading && 'Loading...'}
          {pets3Query.isError && pets2Query.error}
          {pets3Query.isIdle && 'idle'}
          <ol>
            {pets3Query.data?.map((pet, index) => (
              <li key={index}>{pet.name}</li>
            ))}
          </ol>
        </div>
      </div>
      <div>
        <QueryMetaProvider metaFn={() => ({ qwe: 'bbb' })}>
          <PetsList />
        </QueryMetaProvider>
        <QueryMetaProvider meta={{ asd: 'zxc' }}>
          <PetsList />
        </QueryMetaProvider>
      </div>
      <div>
        <button
          onClick={() => {
            console.log(queryClient.getQueryCache());
          }}
        >
          Print queries
        </button>
        <button
          onClick={() => {
            queryClient.refetchQueries({
              active: true,
              predicate: (query) => {
                const observers = (query as any).observers as QueryObserver[];
                console.log(
                  'queryKey',
                  query.queryKey,
                  'observers meta',
                  observers.map((x) => x.options.meta),
                );
                return !!observers.find((x) => x.options.meta?.asd === 'zxc');
              },
            });
          }}
        >
          Refetch
        </button>
      </div>
    </div>
  );
}

const meta1 = { tag: 'zxc' };
const meta2 = { metaFn: () => ({ zxc: 'qwe' }) };
const meta3 = { metaFn: () => ({ qwe: 'asd' }) };

export default App;
