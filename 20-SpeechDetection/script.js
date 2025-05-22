// Calling elements from the dom
const words = document.querySelector('.words');

// Set speech recognition to window
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new instance of speech recognition
const recognition = new SpeechRecognition();

// Set interimresult to true
recognition.interimResults = true;

// Set language of speech recognition
recognition.lang = 'en-US';

// Create a p element to display the result and append it to words 
let p = document.createElement('p');
words.appendChild(p);

// Put event listener on recognition
recognition.addEventListener('result', (e) => {
    // Get the transcript of speech into an array
    const transcript = Array.from(e.results)
        // map the result
        .map(result => result[0])
        // map the transcript to get the text
        .map(result => result.transcript)
        // Join the transcript so it becomes a string
        .join('');

    // Set the text content of p to the transcript
    p.textContent = transcript;

    // create a new p element for next result
    if (e.results[0].isFinal) {
        // Create a new p element
        p = document.createElement('p');
        words.appendChild(p);
    }
});

// event lisentener for when speech end it start again

recognition.addEventListener('end', recognition.start);

recognition.start();
