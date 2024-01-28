import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  injectMutation,
  injectQuery,
  injectQueryClient,
  QueryClient,
} from '@ngneat/query';

interface Todo {
  id: number;
  title: string;
}

export function getToDos() {
  const m = injectMutation()({
    mutationFn: async (d) => {},
  });
  const client2: QueryClient = injectQueryClient();

  const r = injectQuery()<{ q: string }>({
    queryKey: ['a'],
    queryFn: (x) => {
      return {
        q: 'qwe',
      };
    },
  });

  return injectQuery()({
    queryKey: ['todos'] as const,
    queryFn: () => {
      return inject(HttpClient).get<Todo[]>(
        'https://jsonplaceholder.typicode.com/todos',
      );
    },
  });
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  #query = injectQuery();
  #http = inject(HttpClient);

  getTodos() {
    return this.#query({
      queryKey: ['todos'] as const,
      queryFn: () => {
        return this.#http.get<Todo[]>(
          'https://jsonplaceholder.typicode.com/todos',
        );
      },
    });
  }
}
