
// This gets the date and tell you when its last updated
const date =  new Date().getFullYear();
const dayOfWeek = new Date().getDay();


const lastMod = new Date(document.lastModified);
const removeTZ = lastMod.toLocaleString();
document.querySelector("#last-update").innerHTML = `Last Updated: ${removeTZ}`;


//This tells you how many drinks have been created
const drinkCount = localStorage.getItem('formSubmissions');

const drinkAmount = document.querySelector('.drinkAmount');
let drinksH3 = document.createElement('h4');
drinksH3.textContent = drinkCount;

drinkAmount.appendChild(drinksH3);