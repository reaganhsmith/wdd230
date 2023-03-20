// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const imageContainer = document.querySelector('#weathericon');

const weatherDescription = document.querySelector('#weathertype');

const windSpeed1 = document.querySelector('#windspeed');

const windChill = document.querySelector("#windchill");


const url = 'https://api.openweathermap.org/data/2.5/weather?q=star&units=imperial&appid=c0299471663639e3035fb06977385833' ;


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
  const image = document.createElement("img");
  image.src = `${iconsrc}`; // Replace with your image source URL
  image.alt = `${desc}`; // Replace with your alternate text
  image.loading = "lazy"; // Add lazy-loading

  imageContainer.appendChild(image);

    weather = weatherData.weather[0].description;
    weatherDescription.innerHTML = `<p>${weather}</p>`;


    windSpeed1.textContent = `${weatherData.wind.speed.toFixed(0)}`;


    const windSpeed = parseFloat(weatherData.wind.speed.toFixed(0));
    const temp = parseFloat(weatherData.main.temp.toFixed(0));
    let windChillAmount = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) +(0.4275 * temp * (windSpeed ** 0.16));


    //if statement to set boundaries on the windchill. the temp needs to be 50 or less and the windspeed needs to be mroe than 3mph
    if(temp<=50 && windSpeed > 3.0){
        windChill.innerText = `${windChillAmount.toFixed(0)} ºF`;
    }else{
        windChill.innerText = "N/A";
    }



  };

  
 
