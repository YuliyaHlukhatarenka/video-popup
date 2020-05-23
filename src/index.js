import Popup from './popup.js';
const VIDEO_URL = 'https://www.youtube.com/embed/PAAUqBghiVo';

document.addEventListener("DOMContentLoaded", function() {
  const lazyBackground = document.querySelector(".main-container__background-image");

  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgroundObserver.observe(lazyBackground);
  }
});

let openVideoButton = document.getElementById('button-play');
openVideoButton.focus();

openVideoButton.onclick = function() {
  const popup = new Popup(VIDEO_URL);
  popup.init();
  console.log(popup);
}
