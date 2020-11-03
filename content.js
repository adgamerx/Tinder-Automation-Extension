// chrome.runtime.sendMessage({do: "extensionActive"});


   
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

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.message === "start" ) {
       start();
       console.log("ext loaded");
           }
    }
  );

  function start(){
      alert("you just clicked me");
  }