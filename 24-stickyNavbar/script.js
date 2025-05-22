// Calling elements from the dom
const navbar = document.querySelector('#main');
// setting the top of the navbar
let topOfNav = navbar.offsetTop;

// Function for fixnavbar
function fixNavbar() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingtop = navbar.offsetTop + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingtop = 0;
    }
}

// Event listener for scroll
window.addEventListener('scroll', fixNavbar);