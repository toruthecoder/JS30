const inputs = document.querySelectorAll(".control input");

function handleTheUpdates(){
    const change = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + change);
    console.log(this.value + change);
}

inputs.forEach(input => input.addEventListener('change', handleTheUpdates));
inputs.forEach(input => input.addEventListener('mousemove', handleTheUpdates));