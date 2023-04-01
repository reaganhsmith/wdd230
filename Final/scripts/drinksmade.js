// Check if the form has been submitted before
if (localStorage.getItem('formSubmissions') === null) {
  localStorage.setItem('formSubmissions', 0);
}

// Add event listener to the form 
document.querySelector('.freshForm').addEventListener('submit', function() {
localStorage.setItem('formSubmissions', parseInt(localStorage.getItem('formSubmissions')) + 1);

});