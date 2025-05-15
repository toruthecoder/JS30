// Calling all the checkboxes
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

// declaring variables
let lastchecked;

// fucntion to handle the checkboxes
function handleCheck(e){
    // Check if shift is held down
    let inBtw = false;
    if(e.ShiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastchecked){
                inBtw = !inBtw;
            }

            // if the shift key(inBtw) is helddown then chheckbox is checked
            if(inBtw){
                checkbox.checked = true;
            }
        })
    }
    lastchecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
})