import 'zone.js';
import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { TodosService, getToDos } from './todos.service';
import { CommonModule } from '@angular/common';
import { AxiosQuery } from './api';
import { Pet, Status } from './api/axios-client.types';
import { setBaseUrl } from './api/axios-client';
AxiosQuery.setBaseUrl('https://petstore.swagger.io/v2');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>ngneat/query</h1>

    <h3>Signal Result</h3>

    @if (todosSignal().isLoading) { Loading... } @if (todosSignal().data; as
    data) {
    <p>{{ data[0].name }}</p>
    } @if (todosSignal().isError) {
    <p>Error</p>
    }

    <h3>Observable Result</h3>

    @if (todos.result$ | async; as result) { @if (result.isLoading) { Loading...
    } @if (result.isSuccess) {
    <p>{{ result.data[0].name }}</p>
    } @if (result.isError) {
    <p>Error</p>
    } }
  `,
})
export class App {
  todos = AxiosQuery.Query.useFindPetsByStatusQuery({
    status: [Status.Pending, Status.Sold],
  });
  todosSignal = this.todos.result;
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
