// Calling the element 
const triggers = document.querySelectorAll('a');
// Create span 
const highlight = document.createElement('span');
// Add class to span
highlight.classList.add('highlight'); 
// Append span to body
document.body.appendChild(highlight);

// Create function to highlight the link

function highlightLink() {
    // Get the position of the link
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    // Get size and direction of the link
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };
    // Set the style of width and height
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    // Use transform to move the highlight
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// Loop through triggers
triggers.forEach(trigger => {
    // Add EventListener to each trigger
    trigger.addEventListener('mouseenter', highlightLink);
})