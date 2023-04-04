//This tells you how many drinks have been created
const drinkCount = localStorage.getItem('formSubmissions');

const drinkAmount = document.querySelector('.drinkAmount');
let drinksH3 = document.createElement('h4');
drinksH3.textContent = drinkCount;

drinkAmount.appendChild(drinksH3);