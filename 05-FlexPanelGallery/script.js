// Calling panel elements
const panels = document.querySelectorAll('.panel');

// Creatig a function to toggle the open class on click
function toggleOpen() {
    console.log('its working');
    this.classList.toggle('open');
}

// creating a function toggle the open-active class on transition end
function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

// Adding event listeners to each panel for click and transitionend events
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));