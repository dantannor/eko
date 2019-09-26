var ppButton = document.getElementById('playPause');
ppButton.addEventListener('click', playPause);
var myVideo = document.getElementById('myvid');
var timeString = document.getElementById('timeString');

myVideo.addEventListener('timeupdate', updateTime);

function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        ppButton.innerHTML = 'Pause';
    } else {
        myVideo.pause();
        ppButton.innerHTML = 'Play';
    }
}

function updateTime() {
    timeString.innerHTML = myVideo.currentTime;
}
