import { createSignal } from "solid-js";

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main class="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950 gap-4">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">SolidJS Boilerplate</h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm">Fine-grained reactivity · No virtual DOM</p>
      <button
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        onClick={() => setCount(count() + 1)}
      >
        count is {count()}
      </button>
      <p class="text-sm text-gray-400">
        Edit <code class="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">src/App.tsx</code>
      </p>
    </main>
  );
}
