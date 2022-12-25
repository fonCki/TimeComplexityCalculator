chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: 'window.getSelection().toString().toUpperCase()'
    }, function (selection) {
        console.log(selection);
        alert(selection);
    });
});



