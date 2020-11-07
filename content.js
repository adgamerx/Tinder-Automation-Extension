let likeit = () => {
  var likeBtn = document.querySelector('[aria-label="Like"]'); likeBtn.click()
}

var test;

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message == "like") {
      function startLike() {
        console.log("started liking");
        test = setInterval(likeit, 2000);
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
        clearInterval(test);
        // clearInterval(nopeit);
        console.log("Automation Stopped");
      }
      pause();
    }
  }
);



