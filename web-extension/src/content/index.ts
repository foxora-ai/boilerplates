chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === "ping") {
    console.log("[Content Script] Received ping");
    sendResponse({ status: "pong" });
  }
  return true;
});
