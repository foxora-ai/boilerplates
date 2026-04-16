import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center gap-3 mt-6">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        This is an interactive React island
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        count is {count}
      </button>
    </div>
  );
}
