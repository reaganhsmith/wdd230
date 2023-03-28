// Retrieve the form count from localStorage, or default to 0
const formCount = localStorage.getItem('formCount') || 0;
console.log(formCount);


// Update and create a header, then add text content 
const drinksMade = document.querySelector('.drinkAmount');
let header = document.createElement('h4');
header.textContent = `${formCount}`;
drinksMade.appendChild(header);

function submitForm() {
  const newFormCount = parseInt(formCount) + 1;
  localStorage.setItem('formCount', newFormCount);
}
