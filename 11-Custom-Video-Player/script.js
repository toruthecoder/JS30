/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const range = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

/* Build out functions */

// Function for playing and pausing
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Function for updating the play/pause icon
function updateButton() {
  const icon = this.paused ? '►' : '❚❚';
  toggle.textContent = icon;
}

// Function for skipping forward or backward in the video
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Function for updating the volume and playback speed
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Function for updating the progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Function for scrubbing the progress bar
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}


/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
// Event listeners for the toggle button and skip buttons and range sliders
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
range.forEach(range => range.addEventListener('change', handleRangeUpdate));
range.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// Event listeners for the progress bar
let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);