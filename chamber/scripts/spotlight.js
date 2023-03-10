// Fetch the JSON data
fetch('json/directory.json')
  .then(response => response.json())
  .then(data => {
    // Filter the businesses with gold status
    const filteredBusinesses = data.businesses.filter(business => business.membership === 'Gold');


    // Shuffle the array of filtered businesses
    const shuffledBusinesses = shuffleArray(filteredBusinesses);

    // Take a random subset of 2 to 3 businesses from the shuffled array
    const selectedBusinesses = shuffledBusinesses.slice(0, Math.floor(Math.random() * 2) + 2);


    // Display the selected businesses in the spotlight section
    const spotlightElement = document.querySelector('.spotlight');
    selectedBusinesses.forEach(business => {
      const businessElement = document.createElement('div');
      businessElement.classList.add('business');
      businessElement.innerHTML = `
      <img src="${business.image}" alt="${business.name} logo">
        <h2>${business.name}</h2>
        <p>${business.phone}</p>
        <a href="${business.website}">${business.website}</a>
      `;
      spotlightElement.appendChild(businessElement);
    });
  });

// Shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}