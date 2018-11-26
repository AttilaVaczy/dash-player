
class VideoPlayer {

    constructor(elementId) {
        this.isVideoStarted = false;
        this.elementId = elementId;
        this.player = document.getElementById(elementId);
    }

    src(mediaUrl) {
        this.player.src = mediaUrl;
    }


    play() {
        this.player.play();
        this.isVideoStarted = true;
    }

    pause() {
        this.player.pause();
    }
}