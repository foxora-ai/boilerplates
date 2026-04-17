import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const count = useSignal(0);

  return (
    <main class="flex min-h-screen flex-col items-center justify-center gap-6 bg-white dark:bg-gray-950">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Qwik Boilerplate</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Resumability · Zero hydration · Instant load
      </p>
      <button
        class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        onClick$={() => count.value++}
      >
        count is {count.value}
      </button>
      <p class="text-sm text-gray-400">
        Edit <code class="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">src/routes/index.tsx</code>
      </p>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Qwik Boilerplate",
  meta: [{ name: "description", content: "Built with Qwik" }],
};
