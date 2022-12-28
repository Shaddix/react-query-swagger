import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { AxiosQuery } from './api';
import { Pet } from './api/axios-client';

export const Infinite = () => {
  const infiniteQuery = useInfiniteQuery<Pet[]>({
    queryKey: [...AxiosQuery.Query.findPetsByStatusQueryKey([]), 'infinite'],
    queryFn: async (params) => {
      const pageParam = params.pageParam ?? (0 as number);
      return [
        new Pet({ name: (pageParam * 3 + 1).toString(), photoUrls: [] }),
        new Pet({ name: (pageParam * 3 + 2).toString(), photoUrls: [] }),
        new Pet({ name: (pageParam * 3 + 3).toString(), photoUrls: [] }),
      ];
    },
    getNextPageParam: (lastPage, pages) => {
      return pages.length;
    },
  });

  return (
    <div>
      data:{' '}
      {infiniteQuery.data?.pages
        .map((x) => x.map((z) => z.name).join(', '))
        .join(', ')}
      <button onClick={() => infiniteQuery.fetchNextPage()}>More</button>
    </div>
  );
};
