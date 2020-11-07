let likeit = () => {
  var likeBtn = document.querySelector('[aria-label="Like"]'); likeBtn.click()
}

var auto;

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message == "like") {
      function startLike() {
        console.log("started liking");
        auto = setInterval(likeit, 2000);
      }
      startLike();
    }
    // if (request.message == "loaded") {
    //   function extloaded() {
    //     console.log("TA Extension Loaded");
    //   }
    //   extloaded();
    // }
    // if (request.message === "nope") {
    //   function startNope() {
    //     console.log("started nope")
    //     setInterval(nopeit(), 1000)
    //     function nopeit() {
    //       var nopeBtn = document.querySelector('[aria-label="Nope"]'); nopeBtn.click()
    //     }
    //   }
    //   startNope();
    // }
    if (request.message == "pause") {
      function pause() {
        clearInterval(auto);
        // clearInterval(nopeit);
        console.log("Automation Stopped");
      }
      pause();
    }
  }
);



