import Popup from './popup.js';

const VIDEO_URL = 'PAAUqBghiVo';

if (!('loading' in HTMLImageElement.prototype)) {
  console.log('Browser does not support lazyloaing');
}

let openVideoButton = document.getElementById('button-play');
openVideoButton.focus();

openVideoButton.onclick = function() {
  const popup = new Popup(VIDEO_URL);
  popup.init();
}
