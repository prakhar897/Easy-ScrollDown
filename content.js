chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'scroll') {
      let speed = request.speed || 1;
      window.scrollBy(0, speed * 3 * (request.direction === 'up' ? -1 : 1));
    }
});