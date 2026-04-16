<script lang="ts">
  let count = $state(0);
</script>

<main class="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950 gap-4">
  <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Vite + Svelte</h1>
  <button
    class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
    onclick={() => count++}
  >
    count is {count}
  </button>
  <p class="text-gray-500 dark:text-gray-400 text-sm">
    Edit <code class="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">src/App.svelte</code> to get started.
  </p>
</main>
