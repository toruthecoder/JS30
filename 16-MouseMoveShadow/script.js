const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 500px

// Function for moving the text shadow
function shadow(e) {
    // Get the width and height of the hero element & the mouse position
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    
    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    // Calculate the x and y position of the mouse
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // For moving the text shadow
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

}

// Add event listener to the hero element
hero.addEventListener('mousemove', shadow);
