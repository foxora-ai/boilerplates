import "./style.css";

const app = document.getElementById("app")!;

app.innerHTML = `
  <main class="flex min-h-screen flex-col items-center justify-center gap-4">
    <h1 class="text-4xl font-bold">Vite + TypeScript</h1>
    <button
      id="counter"
      class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
    >
      count is 0
    </button>
    <p class="text-sm text-gray-400">
      Edit <code class="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">src/main.ts</code>
    </p>
  </main>
`;

let count = 0;
const btn = document.getElementById("counter")!;
btn.addEventListener("click", () => {
  count++;
  btn.textContent = `count is ${count}`;
});
