// chrome.runtime.sendMessage({do: "extensionActive"});



// var a = document.getElementById("like");
// var b = document.getElementById("nope");
// var c = document.getElementById("stop");


// a.addEventListener('click', startLike);
// b.addEventListener('click', startNope);
// c.addEventListener('click', stop);

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "like") {
      startLike();
    }
    if (request.message === "nope") {
      startNope();
    }
    if (request.message === "pause") {
      pause();
    }
  }
);

function startLike(){
    console.log("started liking");
    setInterval( likeit(), 1000);
    function likeit(){
    var likeBtn = document.querySelector('[aria-label="Like"]'); likeBtn.click() }
}

function startNope(){
    console.log("started nope")
    setInterval(nopeit(), 1000)
    function nopeit(){
    var nopeBtn = document.querySelector('[aria-label="Nope"]'); nopeBtn.click() }
}

function pause(){
  clearInterval(likeit);
  clearInterval(nopeit);  
  console.log("Automation Stopped");
}
// function start() {
  //   alert("you just clicked me");
// }