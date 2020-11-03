
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