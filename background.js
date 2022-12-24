chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.captureVisibleTab(null, {format: "jpeg"}, (screenshotUrl) => {
        chrome.tabs.create({
            url: 'screenshot.html#' + screenshotUrl,
            active: false
        }, (tab) => {
            chrome.tabs.executeScript(tab.id, {
                file: 'content.js'
            });
        });
});
});



