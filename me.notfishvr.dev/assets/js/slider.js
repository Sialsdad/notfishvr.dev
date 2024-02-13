const video = document.getElementById('video');
const volumeControl = document.getElementById('vol-control');

const setVolume = function () {
	video.volume = this.value / 100;
};

volumeControl.addEventListener('change', setVolume);
volumeControl.addEventListener('input', setVolume);
