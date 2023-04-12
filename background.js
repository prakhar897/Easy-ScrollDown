chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'scroll') {
        chrome.tabs.query({ active: true }, (tabs) => {
            var currentTab = tabs[0];
            chrome.tabs.sendMessage(currentTab.id, request)
            .catch((e) => {console.log(e);   });
        });
    }
    return true;
});