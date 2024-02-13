const overlay = document.getElementById('overlay');
const video = document.getElementById("background-video");
const videoSources = [
    'https://me.notfishvr.dev/assets/media/video.mp4',
];

function getRandomVideoSource() {
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    return videoSources[randomIndex];
}
overlay.addEventListener('click', function() {
  this.classList.add('fade-out');
  overlay.remove();
  video.muted = false;
  video.style.opacity = 1;
  video.src = getRandomVideoSource();
  video.play();
});