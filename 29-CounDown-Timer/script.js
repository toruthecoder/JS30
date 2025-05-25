// Calling all the elements from the html
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

// declaring variable
let countdown;

// Function for time management
function timer(seconds){
  // Clear any existing countdown
  clearInterval(countdown);
  
  // get a date 
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  // Call the timer every second
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/ 1000);
    // Check if the time is over
    if(secondsLeft < 0){
      clearInterval(countdown);
      return;
    }
    // Display the time left
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// Function for endtime display
function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes}: ${remainingSeconds < 10 ? '0' : ''} ${remainingSeconds}`;
  document.title = display;
  timeLeft.textContent = display;
}

// Function for remaining time display
function displayEndTime (timestamp){
  // craete a new end time object
  const end = new Date();
  console.log(end);
  const hour = end.getHours();
  console.log(hour);
  const adjustedTime = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedTime} : ${minutes < 10 ? '0' : ''} ${minutes} `  
} 

// Function for start time 
function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

// Event listeners for all the buttons
buttons.forEach((button) => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins*60);
  this.reset();
})