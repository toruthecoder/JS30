// Calling Elements form the dom
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// Getting the current position of the user
navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    // Rotating the arrow based on the heading
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    // Checking for error
}, (err) => {
    console.error(err);
});