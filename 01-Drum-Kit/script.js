// Function for playing sounds
function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`key[data-key="${e.keyCode}"]`);

    if(!audio){
        console.error(`audio is missing ${e.keyCode}`);
        return;
    }else{
        audio.currentTime = 0;
        audio.play();
        if(key){
            key.classList.add('playing');
        }else{
            console.warn(`No key found ${e.keyCode}`)
        }
    }
}

// Function to stop transition
function stopTransition(e) {
    if(e.propertyName !== 'transform'){
        console.debug(`property name is != transform`);
        return;
    }else{
        e.target.classList.remove('playing');
    }
}

// creating an array for key of keys and adding event lisenter for each keys 
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
    key.addEventListener('transitionend', stopTransition);
});
// Event listener for keydown event to play sound when key is down.
window.addEventListener('keydown', playsound);