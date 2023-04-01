// API endpoint URL for Carlsbad weather forecast
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&units=imperial&appid=c0299471663639e3035fb06977385833';

// Get the unordered list element to display the forecast data
const forecastList = document.createElement('ul');
const weather = document.querySelector('.weather');



// Make a GET request to the OpenWeatherMap API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {

   

    let header2 = document.createElement('h2');
    let temp = document.createElement('h3');
    let description = document.createElement('p');
    let dateDisplay = document.createElement('p');
    let humidity = document.createElement('p');
    let forecastHeader = document.createElement('h4');

    let currentTemp = data.list[0].main.temp.toFixed(0);
    temp.textContent = `${currentTemp}ºF`;

    forecastHeader.textContent = '3 Day Forecast';


    header2.textContent = 'Todays Weather';
    

    //Todays date 
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const currentDate = `${month} ${(date.getDate()+1)},${date.getFullYear()}`;
    dateDisplay.textContent = `${currentDate}`;

    

    //gets the description of weather and date
    const desc = data.list[0].weather[0].description;
    description.textContent = `${desc}`;

    
    
    // //humidity
    const humid = data.list[0].main.humidity;
    humidity.textContent = `Humidity ${humid}%`;

    //for icon
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;  
    const image = document.createElement("img");
    image.src = `${iconsrc}`; // Replace with your image source URL
    image.alt = `${desc}`; // Replace with your alternate text
    image.loading = "lazy"; // Add lazy-loading


    const leftWeather = document.createElement('div');
    leftWeather.setAttribute('class', 'leftWeather');
    leftWeather.appendChild(header2);
    leftWeather.appendChild(temp);
    leftWeather.appendChild(image);
    leftWeather.appendChild(description);
    
    leftWeather.appendChild(dateDisplay);

    const weatherRight = document.createElement('div');
    weatherRight.setAttribute('class', 'rightWeather');


    weatherRight.appendChild(humidity);
    weatherRight.appendChild(forecastHeader);
    

  
        
        


        function forecastDisplay(index, indexLow){

        const forecastDate = new Date(data.list[index].dt_txt);
        const dateStr = `${forecastDate.toLocaleDateString('en-US', { weekday: 'short' })}, ${forecastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;

        const highTemp = data.list[index].main.temp_max.toFixed(0);
        const lowTemp = data.list[indexLow].main.temp_min.toFixed(0);


        
        const forecastItem = document.createElement('li');
        forecastItem.textContent = `${dateStr} ${highTemp}ºF / ${lowTemp}ºF`;

          
        weatherRight.appendChild(forecastItem);
        }

        forecastDisplay(0, 0);
        forecastDisplay(1, 8);
        forecastDisplay(9, 16);

        weather.appendChild(leftWeather);
        weather.appendChild(weatherRight);
    
  }) 
