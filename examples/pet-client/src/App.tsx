import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import './App.css';
import { AxiosQuery } from './api';
import { IPet, Pet, Status } from './api/axios-client';
import { PetsList } from './components/PetsList';
import { QueryMetaProvider } from 'react-query-swagger';
import {
  QueryObserver,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { Infinite } from './Infinite';

function App() {
  const queryClient = useQueryClient();
  const addPetMutation = AxiosQuery.Query.useAddPetMutation({
    onSuccess: () => {
      setAddPetName('');
    },
  });

  const pets1Query = AxiosQuery.Query.useFindPetsByStatusQuery({
    status: [Status.Pending, Status.Sold],
  });
  const pets2Query = AxiosQuery.Query.useFindPetsByStatusQuery({
    status: [Status.Pending, Status.Sold, Status.Available],
  });
  const pets3Query = AxiosQuery.Query.useFindPetsByStatusQuery(
    { status: [Status.Pending, Status.Available] },
    { enabled: false },
    { baseURL: 'qwe' },
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

  const [petList1Show, setPetList1Show] = useState(true);
  const [addPetName, setAddPetName] = useState('');

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPetMutation.mutate(new Pet({ name: addPetName, photoUrls: [] }));
        }}
      >
        <input
          name="name"
          value={addPetName}
          onChange={(e) => setAddPetName(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      <Infinite />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'stretch',
          width: '100%',
        }}
      >
        <div style={{ flex: 1 }}>
          <h1>Pets1</h1>
          {pets1Query.isLoading && 'Loading...'}
          {pets1Query.isError && (pets1Query.error as any)}
          <ol>
            {pets1Query.data?.map((pet, index) => (
              <li key={index}>{pet.name}</li>
            ))}
          </ol>
        </div>
        <div style={{ flex: 1 }}>
          <h1>Pets22</h1>
          {pets2Query.isLoading && 'Loading...'}
          {pets2Query.isError && (pets2Query.error as any)}
          <ol>
            {pets2Query.data?.map((pet, index) => (
              <li key={index}>{pet.name}</li>
            ))}
          </ol>
        </div>
        <div style={{ flex: 1 }}>
          <h1>Pets3</h1>
          {pets3Query.isLoading && 'Loading...'}
          {pets3Query.isError && (pets3Query.error as any)}
          <ol>
            {pets3Query.data?.map((pet, index) => (
              <li key={index}>{pet.name}</li>
            ))}
          </ol>
        </div>
      </div>
      <div>
        {petList1Show && (
          <QueryMetaProvider metaFn={() => ({ qwe: 'bbb' })}>
            <PetsList />
          </QueryMetaProvider>
        )}
        <button
          onClick={() => {
            setPetList1Show((prevState) => !prevState);
          }}
        >
          Toggle PetsList1
        </button>
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
