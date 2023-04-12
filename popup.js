const startScrollButton = document.getElementById('start-btn');
const stopScrollButton = document.getElementById('stop-btn');
const scrollSpeedInput = document.getElementById('speed-slider');

var intervalId = null;

function startScrolling() {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        scroll('down');
    }, 20);
}

function stopScrolling() {
    clearInterval(intervalId);
}

startScrollButton.addEventListener('click', () => startScrolling());
stopScrollButton.addEventListener('click', () => stopScrolling());


function scroll(direction) {
    chrome.runtime.sendMessage({ type: 'scroll', direction: direction, speed: scrollSpeedInput.value }, () => { });
}

