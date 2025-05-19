// Array of strings
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled'
    , 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


// Make a function for catching input and storing it in bands array
let input = document.querySelector('#bandName').addEventListener('keypress', function (e) {
    if(e.key === 'Enter'){
        e.preventDefault();
        const name = this.value.trim();
        if(name){
            bands.push(name);
            renderBrands();
            this.value = '';
        }
    }
});


function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Function for renderings the brands
function renderBrands(){
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
document.querySelector('#bands').innerHTML =
    sortedBands.map(band => `<li>${band}</li>`).join('');
    console.log(sortedBands);
}

renderBrands();


