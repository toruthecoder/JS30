// Create a new speech utterance instance
const msg = new SpeechSynthesisUtterance();

// Create a voices array
const voices = [];

// Calling all the elements from dom
const voiceSelect = document.querySelector('[name = "voice"]');
const options = document.querySelector('[name = "range"], [name = "text"]');
const stop = document.querySelector('#stop');
const speak = document.querySelector('#speak');

// Get the text input field value
msg.text = document.querySelector('[name = "text"]').value;

// Function for populating the voices dropdown
function populateVoices(){
    voices = this.getVoices();
    voiceSelect.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => {
        `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`;
    }).join('');
}

// Function for setting the voice
function setVoice(){
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

// Function for toggling the speech synthesis
function toggle(startOver = true){
    speechSynthesis.cancel();
    if(startOver){
        speechSynthesis.speak(msg);
    }
}

// Function for setting the options
function setOptions(){
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

// Event listeners
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voiceSelect.addEventListener('change', setVoice);
options.forEach(option => {
    option.addEventListener('change', setOptions);
});
stop.addEventListener('click', () => toggle(false));
speak.addEventListener('click', () => toggle());

