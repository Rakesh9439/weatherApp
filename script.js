const apiKey = "2ee8fc9e47538fa0ad47c3869b715a47";


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 newurl=`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apiKey}&units=metric`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

console.log("Input:--",searchBox)
async function checkWeather(city){
    //  const response = await fetch(newurl);
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed  + "km/h";
    if(data.weather[0].main == "Clouds" ){
        weatherIcon.src = "images/clouds.png";
          
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = images/drezzle.png;
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }



}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);


});

