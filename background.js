chrome.runtime.onMessage.addListener(function (request) {
    if (request.do == "extensionActive") {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        },
            function (tabs) {
                chrome.pageAction.show(tabs[0].id);
            })
    }
})

// manifest

// "background": {
//     "scripts": ["background.js"],
//     "persistent": false
// },