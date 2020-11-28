import React from 'react';
import './App.css';
import { AxiosQuery } from './api/factory';
import { Status } from './api/axios-client';

function App() {
  const petsQuery = AxiosQuery.ClientQuery.useFindPetsByStatusQuery([
    Status.Available,
    Status.Pending,
    Status.Sold,
  ]);
  return (
    <div className="App">
      <h1>Pets</h1>
      {petsQuery.isLoading && 'Loading...'}
      {petsQuery.isError && petsQuery.error}
      <ol>
        {petsQuery.data?.map((pet, index) => (
          <li key={index}>{pet.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
