// Creating a debounce function to set things up
const debounce = (func, wait = 20, immediate = true) => {
    let timeout;
    //Creating a return function
    return function () {
        const context = this, args = arguments;

        //Creating a later function 
        let later = () => {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        }
        let callnow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callnow) {
            func.apply(context, args);
        }
    }
}

//Creating a function to check if the element is in the viewport
let sliderImages = document.querySelectorAll('.slide-in');

const slideIn = () => {
    sliderImages.forEach(slideImage => {

        const slideinAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        const bottomImage = slideImage.offsetTop + slideImage.height;
        const shownHalf = slideinAt > slideImage.offsetTop;
        const notScrolledPast = window.scrollY < bottomImage;

        if (shownHalf && notScrolledPast) {
            slideImage.classList.add('active');
        } 
        else {
            slideImage.classList.remove('active');
        }
    });
}

// Event Lisenter
window.addEventListener('scroll', debounce(slideIn));