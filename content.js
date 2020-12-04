// Old Code 

// let likeit = () => {
//   var likeBtn = document.querySelector('[aria-label="Like"]'); likeBtn.click()
// }

// let nopeit = () => {
//   var dislikeBtn = document.querySelector('[aria-label="Nope"]'); dislikeBtn.click()
// }

let likeit = () => {
  var likeBtn = document.querySelector("#content > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.recsCardboard.W\\(100\\%\\).Mt\\(a\\).H\\(100\\%\\)--s.Px\\(4px\\)--s.Pos\\(r\\) > div > div.Pos\\(r\\).Py\\(16px\\).Py\\(12px\\)--s.Px\\(4px\\).Px\\(8px\\)--ml.D\\(f\\).Jc\\(sb\\).Ai\\(c\\).Maw\\(375px\\)--m.Mx\\(a\\).Pe\\(n\\).Mt\\(-1px\\) > div:nth-child(4) > button"); likeBtn.click()
}

let nopeit = () => {
  var dislikeBtn = document.querySelector("#content > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.recsCardboard.W\\(100\\%\\).Mt\\(a\\).H\\(100\\%\\)--s.Px\\(4px\\)--s.Pos\\(r\\) > div > div.Pos\\(r\\).Py\\(16px\\).Py\\(12px\\)--s.Px\\(4px\\).Px\\(8px\\)--ml.D\\(f\\).Jc\\(sb\\).Ai\\(c\\).Maw\\(375px\\)--m.Mx\\(a\\).Pe\\(n\\).Mt\\(-1px\\) > div:nth-child(2) > button"); dislikeBtn.click()
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
    if (request.message == "nope") {
      function startDisLike() {
        console.log("started disliking");
        auto = setInterval(nopeit, 2000);
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



