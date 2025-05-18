async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'bf2d29b548d1d26fd0860d36b8bbe589'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);  // makes a network request to openWeather
        const data = await response.json(); // converts response to json format
        if (data.cod === 200) {             // data.cod is status code, if it is 200 then request is successfull
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temperature').textContent = `${data.main.temp}°C`;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('humidity').textContent = data.main.humidity;
            document.getElementById('wind-speed').textContent = data.wind.speed;
        } else {
            document.getElementById('weather-info').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather-info').innerHTML = '<p>Error fetching data</p>';
    }
}