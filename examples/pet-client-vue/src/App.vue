<script setup lang="ts">
import { ref } from 'vue';
import { AxiosQuery } from './api';
import { Status } from './api/axios-client';
import { useMutation, useQuery } from '@tanstack/vue-query';
import type { MaybeRefDeep } from '@tanstack/vue-query/build/lib/types';
let status = ref<Status>(Status.Sold);
const { isLoading, isError, data, error } =
  AxiosQuery.Query.useFindPetsByStatusQuery({
    status: [status] as any,
  });
</script>

<template>
  <div style="display: block">
    <div>Status: {{ status }}</div>
    <div>
      <input
        type="radio"
        name="status"
        id="Sold"
        v-bind:value="Status.Sold"
        v-model="status"
      /><label for="Sold">Sold</label>
      <input
        type="radio"
        name="status"
        id="Available"
        v-bind:value="Status.Available"
        v-model="status"
      /><label for="Available">Available</label>
      <input
        type="radio"
        name="status"
        id="Pending"
        v-model="status"
        v-bind:value="Status.Pending"
      /><label for="Pending">Pending</label>
    </div>
  </div>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ (error as any).message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <ul v-else>
    <li v-for="pet in data ?? []">{{ pet.name }}</li>
  </ul>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
