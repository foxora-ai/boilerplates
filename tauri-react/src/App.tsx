import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";

export default function App() {
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreeting(await invoke<string>("greet", { name }));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white dark:bg-gray-950 p-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Tauri + React</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm">Rust-powered desktop app</p>
      <div className="flex gap-2">
        <input
          className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          onClick={greet}
        >
          Greet
        </button>
      </div>
      {greeting && (
        <p className="text-green-600 dark:text-green-400 font-medium">{greeting}</p>
      )}
    </main>
  );
}
