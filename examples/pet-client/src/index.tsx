import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosQuery } from './api';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { initPersister, persisterDeserialize } from './api/axios-client';

const queryClient = new QueryClient();
initPersister();
const storagePersister = createSyncStoragePersister({
  storage: window.localStorage,
  deserialize: persisterDeserialize,
});
persistQueryClient({
  queryClient,
  persister: storagePersister,
});
AxiosQuery.setBaseUrl('https://petstore.swagger.io/v2');
AxiosQuery.Query.setFindPetsByStatusDefaultOptions({
  cacheTime: 10000,
});
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
