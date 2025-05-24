// Calling all the elements from the html
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

// Function to handle the mouse down event
function handleMove(e) {
    // To calculate the height based on mouse position
    const y = e.pageY - speed.offsetTop;
    // To set the height of the bar
    const percent = y / speed.offsetHeight;
    // To limit the height to a maximum of 100%
    const height = Math.round(percent * 100) + '%';
    // to set min and max speed
    const min = 0.4;
    const max = 4;
    // To set the speed of the video based on the height
    const playbackRate = percent * (max - min) + min;
    // To set the height of the bar
    bar.style.height = height;
    // To set the text of the bar
    bar.textContent = playbackRate.toFixed(2) + '×';
    // to set the playback rate of the video
    video.playbackRate = playbackRate
}

// Event listener 
speed.addEventListener('mousemove', handleMove);