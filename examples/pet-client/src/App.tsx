import React from 'react';
import './App.css';
import { AxiosQuery } from './api';
import { Status } from './api/axios-client';

function App() {
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
    </div>
  );
}

export default App;
