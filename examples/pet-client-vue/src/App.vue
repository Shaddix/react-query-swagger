<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { AxiosQuery } from './api';

// Access QueryClient instance
const queryClient = useQueryClient();

// Query
const query = AxiosQuery.Query.useFindPetsByStatusQuery({ status: [] });
console.log('qweqweqwe', query);
</script>

<template>
  <span v-if="query.isLoading">Loading...</span>
  <span v-else-if="query.isError">Error: {{ query.error.message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <ul v-else>
    <li v-for="pet in query.data" :key="pet.id">{{ pet.name }}</li>
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
