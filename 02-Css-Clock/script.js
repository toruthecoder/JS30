// calling all the elements 
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const container = document.querySelector('.container');

// function to set and calculate time
function setDate() {
    // Using the date object to get the current date and time
    const now = new Date();

    // getting the current time in seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // getting the current time in minutes
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // getting the current time in hours
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // Showing time in container
    if(container){
        const hour12 = hour % 12 || 12;
        const ampm = hour >= 12 ? 'PM' : 'AM';
        container.textContent = `${hour12}:${mins}:${seconds}__ ${ampm}`;
    }

}

// Calling the function every seconds to update the time
setInterval(setDate, 1000);

// Initialize the clock to show the current time immediately on page-load
setDate();
