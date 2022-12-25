document.addEventListener('DOMContentLoaded', function() {

    var selectedText = window.getSelection().toString();
    var convertButton = document.getElementById('convert-button');
    var inputText = document.getElementById('input-text');
    // alert(selectedText);

    chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
        chrome.tabs.executeScript(tabs[0].id, {code: `document.getSelection().toString()`}, (result) => {
            inputText.value = result[0];
        });

    convertButton.addEventListener('click', function () {
             inputText.value = inputText.value.toUpperCase();
        });
    });
});


var textarea = document.querySelector('textarea');
