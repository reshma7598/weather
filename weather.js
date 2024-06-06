
function getWeather() {
    var apiKey = '2ea88cf796f17e99ae634f77c3e95439'; 
    var city = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}
function displayWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');
    if (data.cod === '404') {
        weatherInfo.textContent = 'City not found';
    } else {
        var description = data.weather[0].description;
        var temperature = data.main.temp;
        weatherInfo.innerHTML = `Weather: ${description}<br>Temperature: ${temperature}°C`;
    }
}
