// Getting our api
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// creating an array
const cities = [];

// fetching data
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

// creating find match func. to cities and states into right format through regular expreation
function findMatch(wordMatch, cities){
    return cities.filter(place => {
        const reg = new RegExp(wordMatch, 'gi');
        return place.city.match(reg) || place.state.match(reg);
    })
}

// Creating this func. to put comma into right place
function numbersWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Creating a display match func. to display data
function displayMatch(){
    const match = findMatch(this.value, cities);
    const html = match.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numbersWithCommas(place.population)}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}   

// Callig elements
const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// Adding event listener
input.addEventListener('change', displayMatch);
suggestions.addEventListener('keyup', displayMatch);