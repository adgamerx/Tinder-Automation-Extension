// Old Code 

// let likeit = () => {
//   var likeBtn = document.querySelector('[aria-label="Like"]'); likeBtn.click()
// }

// let nopeit = () => {
//   var dislikeBtn = document.querySelector('[aria-label="Nope"]'); dislikeBtn.click()
// }

let arr = document.getElementsByTagName('button');

let likeit = () => {
  var likeBtn = arr[arr.length-3]; 
  likeBtn.click()
}

let nopeit = () => {
  var dislikeBtn = arr[arr.length-5];
  dislikeBtn.click();
}

var auto;

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message == "like") {
      function startLike() {
        console.log("started liking");
        auto = setInterval(likeit, 100);
      }
      startLike();
    }
    if (request.message == "nope") {
      function startDisLike() {
        console.log("started disliking");
        auto = setInterval(nopeit, 100);
      }
      startDisLike();
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



