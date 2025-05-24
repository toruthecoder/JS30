// Call the items element from the dom
const slider = document.querySelector('.items');

// set state 
isDown = false;
// Declare variables
let startX;
let scrollLeft;

// Add Event Listeners 
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', ()=> {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});