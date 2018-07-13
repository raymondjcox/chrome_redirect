(() => {
  "use strict";
  let manifestData = chrome.runtime.getManifest();
  chrome.tabs.onCreated.addListener((tab) => {
    if (tab.url === "chrome://newtab/") {
      chrome.tabs.update(tab.id, { url: manifestData.new_tab_url });
    }
  });
})();
