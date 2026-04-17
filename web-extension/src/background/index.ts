chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "ping") {
    console.log("Ping from popup, tab:", sender.tab?.id);
    sendResponse({ status: "ok" });
  }
  return true;
});
