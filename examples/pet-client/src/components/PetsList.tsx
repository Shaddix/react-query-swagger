import { AxiosQuery } from '../api';
import { Status } from '../api/axios-client';
import React from 'react';

export const PetsList = () => {
  const pets1Query = AxiosQuery.Query.useFindPetsByStatusQuery({
    status: [Status.Pending, Status.Sold],
  });
  return (
    <div>
      <h1>List:</h1>
      <ol>
        {pets1Query.data?.map((pet, index) => (
          <li key={index}>{pet.name}</li>
        ))}
      </ol>
    </div>
  );
};
