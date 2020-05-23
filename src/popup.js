export default class Popup {
    constructor(videoId) {
        this.videoId = videoId;
        this.videoInstance = null;

        const popupContainer = document.createElement('div');
        popupContainer.className = 'popup';
        popupContainer.id = 'video-popup';

        const closeButton = document.createElement('span');
        closeButton.className = 'popup__close-button';
        closeButton.id = 'close';
        closeButton.innerHTML = '&times;';

        const player = document.createElement('div');
        player.className = 'player-container';
        player.id = 'player';

        popupContainer.appendChild(closeButton);
        popupContainer.appendChild(player);

        document.body.appendChild(popupContainer);
        
    }

    init = () => {
        const popup = document.getElementById('video-popup');
        popup.style.display = 'flex';
        popup.setAttribute('aria-hidden', 'false');
        popup.setAttribute('aria-describedby', 'Popup shows video with music');
        popup.focus();

        const mainContainer = document.getElementsByClassName('main-container')[0];
        mainContainer.setAttribute('aria-hidden', 'true');
    
        this.onYouTubeIframeAPIReady();
        
        document.addEventListener('keyup', this.checkKey );

        const closeButton = document.getElementById('close');
        closeButton.onclick = this.closeVideo;
    }

    onYouTubeIframeAPIReady = () => {
        this.videoInstance = new YT.Player('player', {
            videoId: 'PAAUqBghiVo',
            playerVars: { 
                'controls': 1, 
                'disablekb': 0,
            }
        });
    }
    
    checkKey = (e) => {
        if (e.keyCode == '27') {
            this.closeVideo();
        }
    }

    closeVideo = () => {
        this.videoInstance.stopVideo();
        const popup = document.getElementById('video-popup');
        popup.style.display = 'none';
        popup.setAttribute('aria-hidden', 'true');

        const mainContainer = document.getElementsByClassName('main-container')[0];
        mainContainer.setAttribute('aria-hidden', 'false');

        this.destroy();
    }
        
    destroy = () => { 
        document.removeEventListener('keyup', this.checkKey);
        this.videoInstance.destroy();
        this.videoInstance = null;
    }
        
}
