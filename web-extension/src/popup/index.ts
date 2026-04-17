import "./style.css";

const root = document.getElementById("root")!;

async function render() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  root.innerHTML = `
    <div class="p-4 flex flex-col gap-3">
      <h1 class="text-base font-semibold text-gray-900 dark:text-white">My Extension</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
        ${tab?.url ?? "No active tab"}
      </p>
      <button id="action-btn"
        class="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
        Run Action
      </button>
      <p id="result" class="text-sm text-green-600 hidden"></p>
    </div>
  `;

  document.getElementById("action-btn")!.addEventListener("click", async () => {
    await chrome.tabs.sendMessage(tab!.id!, { action: "ping" });
    const result = document.getElementById("result")!;
    result.textContent = "Action sent to page!";
    result.classList.remove("hidden");
  });
}

render();
