const apiKey = "76fabc0d6e5efee191e0903537152b24";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weather_icon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".tempareture").innerHTML = Math.round(data.main.temp) + "&deg;C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

        if(data.weather[0].main == 'Clouds'){
            weather_icon.src = "image/clouds.png";
        }
        else if(data.weather[0].main == 'Rain'){
            weather_icon.src = "image/rain.png";
        }
        else if(data.weather[0].main == 'Drizzle'){
            weather_icon.src = "image/drizzle.png";
        }
        else if(data.weather[0].main == 'Thunderstorm'){
            weather_icon.src = "image/thunder.png";
        }
        else if(data.weather[0].main == 'Clear'){
            weather_icon.src = "image/clear.png";
        }
        else if(data.weather[0].main == 'Mist'){
            weather_icon.src = "image/mist.png";
        }
        else if(data.weather[0].main == 'Thunderstorm'){
            weather_icon.src = "image/thunder.png";
        }
        else if(data.weather[0].main == 'Snow'){
            weather_icon.src = "image/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})