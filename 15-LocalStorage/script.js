// Calling all the elements from the dom 
const addItems = document.querySelector('.add-items');
const plates = document.querySelector('.plates');

// Parsing our items from local storge into an array
let items;
try{
    items = JSON.parse(localStorage.getItem('items')) || [];
}catch(e){
    items = [];
    console.error(`Error parsing localStorage itemns: ${e}`);
}

// Function to add items to my local storage
function addItem (e){
    e.preventDefault();

    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done : false
    };
    items.push(item);

    // Setting items to the local storage
    try{
        localStorage.setItem('items',JSON.stringify(items));
    }catch(e){
        items = [];
        console.error(`Error setting items to localStorage: ${e}`);
    }

    // Populating This list here so adds quickly without refreshing 
    populateList(items, plates);

    // resetting the input field for text
    this.reset();
}

// Function to populate the list in the dom
function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plates, i) => {
        return `
        <li>
            <input type = 'checkbox' data-index = ${i} ${plates.done ? 'checked' : ''}/>
            <label for='item'>${plates.text}</label>
        </li>
        `
    }).join(''); 
}

// Function to check any errors and populate the list in dom
function Done(e){
    if (!e.target.matches('input')){
        return;
    }

    let el = e.target;
    let index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, plates)
}

// Event listeners
addItems.addEventListener('submit', addItem);
plates.addEventListener('click', Done);

// Populating the list in the dom
populateList(items, plates);