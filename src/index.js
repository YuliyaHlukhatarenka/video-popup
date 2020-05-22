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

let openVideoButton = document.getElementById('button-img');

openVideoButton.onclick = function() {
  const popup = new Popup;
  popup.init();
}

class Popup {
  init() {
    const popupEl = document.getElementById('video-popup');
    popupEl.style.display = "block";

    document.addEventListener('keyup', this.checkKey);

    const closeButton = document.getElementById('close');
    closeButton.onclick = this.closePopup;
  }
  
  checkKey(e) {
    if (e.keyCode == '27') {
      const popup = document.getElementById('video-popup');
      popup.style.display = "none";
    }
  }
  
  closePopup() {
    const popup = document.getElementById('video-popup');
    popup.style.display = "none";
  }
   


  destroy() {

  }
  
}