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

// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.create({ url: "https://tinder.com/app/recs", selected: true });
//     console.log("IconClicked")
//   })

// manifest

// "background": {
//     "scripts": ["background.js"],
//     "persistent": false
// },