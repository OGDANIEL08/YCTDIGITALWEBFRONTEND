const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = '26434dd0a81194aaedd4f755673daee5';

//get Weather Data
//display weather data
// get weather emoji
// display error message

weatherForm.addEventListener('submit' , async event => {
  event.preventDefault(); //to prevent the page from refreshing when we click submit;

  const city = cityInput.value; 
  // to ensure that the input text is valid
  //for readability and good structure
  if (city) {
    try {
     const weatherData = await getWeatherData(city); // here
     displayWeatherInfo(weatherData);
    } 
    catch(error) {
      console.error(error);
      displayError(error); 
    }
  } else {
    displayError("Please enter a city")
  }
})


async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  
  if (!response.ok) {
  throw new Error("could not fetch weather data")
  }

  return await response.json()
}
async function ok() {
  console.log(await getWeatherData('Lagos'))
}
ok();

function displayWeatherInfo(data) {
  const {name: city,
      main: {temp, humidity},
      weather: [{description, id}]} = data;

  //clear previous content
  card.textContent = "";
  card.style.display = 'flex';

  const cityDisplay = document.createElement('h1');
  const tempDisplay = document.createElement('p');
  const humidityDisplay = document.createElement('p');
  const weatherEmoji = document.createElement('p');
  const descDisplay = document.createElement('span');


  cityDisplay.textContent = city;
  tempDisplay.textContent = `${((temp -273.15) * (9/5) + 32).toFixed(1)}°F`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
   weatherEmoji.textContent = getWeatherEmoji(id);
  descDisplay.textContent = description;
 

  cityDisplay.classList.add('cityDisplay');
  tempDisplay.classList.add('tempDisplay')
  weatherEmoji.classList.add('weatherEmoji');
  descDisplay.classList.add('descDisplay');
  humidityDisplay.classList.add('humidityDisplay');

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(weatherEmoji);
  weatherEmoji.appendChild(descDisplay);
  card.appendChild(humidityDisplay);

  
}

function getWeatherEmoji(weatherId) {
  switch(true) {
  case (weatherId >= 200 && weatherId < 300):
    return "⚡"
    break; 
  case (weatherId >= 300 && weatherId < 400):
    return "🌧"
    break; 
  case (weatherId >= 500 && weatherId < 600):
    return "🌧"
    break; 
  case (weatherId >= 600 && weatherId < 700):
    return "❄"
    break; 
  case (weatherId >= 700 && weatherId < 800):
    return "⛅"
    break; 
  case (weatherId === 800):
    return "🌞"
    break; 
  case (weatherId >= 801 && weatherId < 810):
    return "☁"
    break; 
    default:
    return "❔" 
    break;
}
}


function displayError(message) {
  const errorDisplay = document.createElement('p');
  errorDisplay.textContent = message;
  errorDisplay.classList.add('errorDisplay');
  
  card.textContent = "";
  card.style.display = 'flex'
  card.appendChild(errorDisplay)
  
}