const apiKey = "928e06f68d37b8539f004edaa60545a8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".searchbox input");
const searchBtn = document.querySelector(".searchbox button");
const weatherPng = document.querySelector(".weather-png");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".errortext").style.display = "block";
        document.querySelector(".weatherinfo").style.display = "none";
    }else{
        var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        //document.querySelector(".weatherword").innerHTML = data.weather[0].main;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".mintemperature").innerHTML = Math.round(data.main.temp_min) + "°C";
        document.querySelector(".maxtemperature").innerHTML = Math.round(data.main.temp_max) + "°C"; 

        if(data.weather[0].main == "Mist"){
            weatherPng.src="images/mist.png";
            
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherPng.src="images/drizzle.png";
            document.querySelector(".weatherword").innerHTML = "Drizzle rain";
        }
        else if(data.weather[0].main == "Rain"){
            weatherPng.src="images/rain.png";
            document.querySelector(".weatherword").innerHTML = "Heavy rain";
        }
        else if(data.weather[0].main == "Clear"){
            weatherPng.src="images/clear.png";
            document.querySelector(".weatherword").innerHTML = "Clear clouds";
        }
        else if(data.weather[0].main == "Clouds"){
            weatherPng.src="images/clouds.png";
            document.querySelector(".weatherword").innerHTML = "Scattered clouds";
        }
        else if(data.weather[0].main == "Snow"){
            weatherPng.src="images/snow.png";
            document.querySelector(".weatherword").innerHTML = "Heavy snow";
        }

        document.querySelector(".weatherinfo").style.display="block";
        document.querySelector(".errortext").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});


const form = document.querySelector('#opinion-form');
const nameInput = document.querySelector('#name');
const opinionInput = document.querySelector('#opinion');
const commentsList = document.querySelector('#comments-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const opinion = opinionInput.value;
  const comment = document.createElement('li');
  comment.textContent = `${name}: ${opinion}`;
  commentsList.appendChild(comment);
  nameInput.value = '';
  opinionInput.value = '';
});


