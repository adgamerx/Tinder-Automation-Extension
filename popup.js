
   
// var a = document.getElementById("like");
// var b = document.getElementById("nope");
// var c = document.getElementById("stop");

// function startLike(){
//     console.log("started liking")
//     setInterval( function likeit(){
//         var likeBtn = document.querySelector('[aria-label="Like"]'); likeBtn.click() }, 1000)
// }

// function startNope(){
//     console.log("started nope")
//     setInterval( function nopeit(){
//         var likeBtn = document.querySelector('[aria-label="Nope"]'); likeBtn.click() }, 1000)
// }

// function stop(){

// }

// a.addEventListener('click', startLike);
// b.addEventListener('click', startNope);
// c.addEventListener('click', stop);

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