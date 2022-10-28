const search = document.getElementById("search");
const weather = document.getElementById("weather");
const form = document.querySelector("form");

const getWeather = async (city) => {
  weather.innerHTML = `<p>Loading...</p>`;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf42d8e33e0da5224524114a7a5cb42d&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == 404) {
    weather.innerHTML = `<p>${data.message}</p>`;
  }
  weather.innerHTML = ` <div>
    <img src="http://openweathermap.org/img/wn/${
      data.weather[0].icon
    }@4x.png" alt="weather icon">
   </div>
   
  <div class="tempData">
  <p class="cityName">${data.name}, ${data.sys.country}</p>
    <p class="mainText">${data.weather[0].main}</p>
    <p class="tempText">${Math.round(data.main.temp)} ℃</p>
    <div class="wind_humidity">
    <p><i class="fa-solid fa-wind"></i>&nbsp;${data.wind.speed}</p>
    <p> 
     <i class="fa-solid fa-droplet"></i>
     ° ${data.main.humidity}%</p>
    </div>
    </div>`;
};

form.addEventListener("submit", (e) => {
  getWeather(search.value);
  e.preventDefault();
});
window.onload = getWeather("pune");
