<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <div class="flex flex-col items-center gap-3 mt-6">
    <p class="text-sm text-gray-500 dark:text-gray-400">This is an interactive Vue island</p>
    <button
      @click="count++"
      class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
    >
      count is {{ count }}
    </button>
  </div>
</template>
