<script lang="ts">
  let count = $state(0);
</script>

<div class="flex flex-col items-center gap-3 mt-6">
  <p class="text-sm text-gray-500 dark:text-gray-400">This is an interactive Svelte island</p>
  <button
    onclick={() => count++}
    class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
  >
    count is {count}
  </button>
</div>
