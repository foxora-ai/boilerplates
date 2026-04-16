<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Vite + Vue 3</h1>
    <button
      class="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      @click="count++"
    >
      count is {{ count }}
    </button>
    <p class="mt-4 text-sm text-gray-400">
      Edit <code class="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">src/App.vue</code>
    </p>
  </main>
</template>
