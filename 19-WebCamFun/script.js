// Createing and Getting all our elements from the html document
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');  

// P : Get access to camera
function getVideo(){
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error('Ohh no!!!', err);
      })
}

// P : Put image on the canavs
function ImageToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = rgbSplit(pixels);
    ctx.putImageData(pixels, 0 ,0);
  }, 16);
}

// P : Put taken photo on the canvas and also download it when clicked
function takePhoto(){
  // set current play sound to 0 play sound
  snap.currentTime = 0;
  snap.play();
  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  // Create a link attribute and link it to data
  const link = document.createElement('a');
  link.href = data;
  // Set the download attribute to the link
  link.setAttribute('download', 'handsome');
  // Set link info to image
  link.innerHTML = `<img src='${data}' alt='handsome'/>`;
  // Append the link to the strip 
  strip.insertBefore(link, strip.firstChild);
}

// P : rgb split effect for the maintaining the color
function rgbSplit(pixels){
  for(let i = 0; i < pixels.data.length; i+=4){
    pixels.data[i - 10] = pixels.data[i + 0]; // Red
    pixels.data[i - 10] = pixels.data[i + 1]; // Green
    pixels.data[i - 10] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

// Initializing the camera
getVideo();

// Event Listeners
video.addEventListener('canplay', ImageToCanvas);