/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/



/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key
  const options = {
	method: 'GET',
	    headers: {
		'X-RapidAPI-Key': '8d60be1604msh9583fb2e650f848p15c2d2jsn7151adf60246',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	    }
    };

  //CODE GOES HERE
 return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.error(err));
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async() => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data)
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData,'🍪')
  console.log(weatherData.main.temp)
  document.getElementById('temp').innerHTML= weatherData.main.temp;
  document.getElementById('city-name').innerHTML= weatherData.name;
  document.getElementById('weather-type').innerHTML= weatherData.weather[0].main;
  document.getElementById('min-temp').innerHTML= weatherData.main.temp_min;
  document.getElementById('max-temp').innerHTML= weatherData.main.temp_max;
}
