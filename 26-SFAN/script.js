// Calling elements from the dom
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

// Function for handling mouse enter
function handleEnter() {
    console.log('Mouse Enters')
    // add the trigger-enter class to the current trigger
    this.classList.add('trigger-enter');

    // add the setTime out to remove class after delay
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

    // Add the background class to the background element 
    background.classList.add('open');

    //get the dropdown inside the background
    const dropdown = this.querySelector('.dropdown');
    // get the dropdown coords and the nav coords
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    // get the width and height of the background
    const coords = {
        width : dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top -navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    // set the width and height of the background
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}
// Function for handling mouse leave
function handleLeave() {
    console.log('Mouse Leaves')
    // remove trigger-enter & trigger-active classes from the current trigger
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    // remove the open class from the background element
    background.classList.remove('open');
}

// Attach event listeners for when mouse enters
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));

// Attach event listeners for when mouse leaves
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));