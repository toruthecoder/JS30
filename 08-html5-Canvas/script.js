// Calling elements from the document
const canvas = document.getElementById('draw');

// Setting up the canvas 
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 70;

// setting up variables 
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = 0;

// Function to get the position of the mouse or touch event
function getPosition(e){
    if(e.type.includes('touch')){
        const touch = e.touches[0] || e.changedTouches[0];
        const rect = canvas.getBoundingClientRect();
        return {
            offsetX: touch.clientX - rect.left,
            offsetY: touch.clientY - rect.top
        }
    }
    return {
        offsetX: e.offsetX,
        offsetY: e.offsetY
    }
}

// Creating draw function 
function draw (e){
    if(!isDrawing){
        return;
    }
    else{
        console.log(e);
        const pos = getPosition(e);

        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(pos.offsetX, pos.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
        hue++;
        if(hue >= 360){
            hue = 0;
        }
        if(ctx.line.Width >= 100 || ctx.lineWidth <= 1){
            direction = !direction;
        }

        if(direction){
            ctx.lineWidth++;
        }else{
            ctx.lineWidth--;
            
        }

        // Preventing default behavior of touch events of mobile devices
        if(e.type.includes('touch')){
            e.preventDefault();
        }
    }
}

// Function for start Drwaing 
function startDrawing (e){
    isDrawing = true;
    const pos = getPosition(e);
    [lastX, lastY] = [pos.offsetX, pos.offsetY];
    // Preventing default behavior of touch events of mobile devices
    e.preventDefault();
}

// Adding event listeners to the canvas for mobile devices
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', ()=> isDrawing = false);
    

// Adding event listeners to canvas for desktop devices
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);