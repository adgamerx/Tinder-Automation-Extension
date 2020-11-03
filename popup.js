function like() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message: "like"});
   });
}
function nope() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message: "nope"});
   });
}
function stop() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message: "pause"});
   });
}

// document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("like").addEventListener('click' , like());
  document.getElementById("nope").addEventListener('click' , nope());
  document.getElementById("pause").addEventListener('click' , stop());
// });