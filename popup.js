
// function nope() {
//     chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
//     chrome.tabs.sendMessage(tabs[0].id, {message: "nope"});
//    });
// }


document.getElementById("like").addEventListener('click', function() {
   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "like"});
      console.log("Like Button Clicked In Popup.js");
   });
});
document.getElementById("nope").addEventListener('click', function() {
   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "nope"});
      console.log("Nope Button Clicked In Popup.js");
   });
});
document.getElementById("pause").addEventListener('click', function(){
   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "pause"});
      console.log("Stop Button Clicked In Popup.js");
   });
});

// document.addEventListener("DOMContentLoaded", function() {
// document.getElementById("nope").addEventListener('click' , nope());
// chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//    chrome.tabs.sendMessage(tabs[0].id, { message: "loaded" });
// });
// });