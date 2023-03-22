const weather = document.querySelector('.weather');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=imperial&appid=c0299471663639e3035fb06977385833' ;


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {


    let temp = document.createElement('h3');
    let description = document.createElement('p');
    let dateDisplay = document.createElement('p');
    let humidity = document.createElement('p');

    //to get the temperature
    let currentTemp = weatherData.main.temp.toFixed(0);
    temp.textContent = `${currentTemp}ºF`;

    //Todays date 
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
	const currentDate = `${month} ${(date.getDate()+1)},${date.getFullYear()}`;
    dateDisplay.textContent = `${currentDate}`;

    //gets the description of weather and date
    const desc = weatherData.weather[0].description;
    description.textContent = `${desc}`;
    
    //humidity
    const humid = weatherData.main.humidity;
    humidity.textContent = `${humid}%`;

    //for icon
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;  
    const image = document.createElement("img");
    image.src = `${iconsrc}`; // Replace with your image source URL
    image.alt = `${desc}`; // Replace with your alternate text
    image.loading = "lazy"; // Add lazy-loading


    //for 3 day forcast 



    weather.appendChild(temp);
    weather.appendChild(image);
    weather.appendChild(description);
    weather.appendChild(dateDisplay);
    
    weather.appendChild(humidity);





  };
