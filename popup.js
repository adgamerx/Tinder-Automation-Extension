
   
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

function popup() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message: "start"});
   });
}

// document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button1").addEventListener('click' , popup);
// });