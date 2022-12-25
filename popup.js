document.addEventListener('DOMContentLoaded', function() {
    let getSelectedText = () => (typeof window.getSelection != "undefined") ? window.getSelection().toString() : "";

    var responseText = document.getElementById('response-text');
    var convertButton = document.getElementById('convert-button');
    var inputText = document.getElementById('input-text');

    // block the possiblity to edit the text inside the button convertButton


    // responseText.style.display = "none";
    inputText.focus();

    chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
        chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: getSelectedText
            }, (results) => {
                try {
                    inputText.value = results[0].result;
                } catch (e) {
                    inputText.value = "";
                }
            }
        );


        // convertButton.addEventListener('click', () => {
        //     responseText.style.display = "block";
        //     responseText.innerHTML = inputText.value.toUpperCase();
        // });


        convertButton.addEventListener('click', function () {
            functionInput = inputText.value;
            responseText.innerHTML = "Loading...";
                readConfigFile().then((data) => {
                    openai_test(data.OPENAI_API_KEY, functionInput).then((response) => {
                        responseText.innerHTML = response["choices"][0]["text"];
                    }).catch((error) => {
                        responseText.innerHTML = "Error: api error" + error;
                    });
                }).catch((error) => {
                    //must include config.json file with OPENAI_API_KEY
                    responseText.innerHTML = "Error: must include config.json file with OPENAI_API_KEY " + error;
                }
            );
        });
    });
});




function openai_test(token, functionInput) {
    console.log(functionInput);
    return fetch(' https://api.openai.com/v1/completions ', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            "model": "text-davinci-003",
            "prompt": functionInput + "\n\"\"\"\nThe time complexity of this function is",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        })
    })
        .then(response => response.json())
        .then(data => {
            // process the response data here
            console.log(data);
            return data
        })
        .catch(error => {
            console.log(error);
        });
}


function readConfigFile() {
    return fetch('config.json')
        .then(response => response.json())
        .then(data => {
            // process the response data here
            console.log(data);
            return data
        })
        .catch(error => {
            console.log(error);
        });
}

