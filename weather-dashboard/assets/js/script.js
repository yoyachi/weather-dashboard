/*fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&APPID=c4877f378c771bee504d8a30118ddeb4'  
)
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response);
})
*/
 

var searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", function () {
    var cityName = document.querySelector("#city-input").value

    displayWeather(cityName)
})
 

function displayWeather(cityName) {
    var inputEl = document.querySelector("#city-input");
    var searchEl = document.querySelector("#search-button");
    var clearEl = document.querySelector("#clear-history")
    var nameEl = document.querySelector("#city-name");
    var currentPicEl = document.querySelector("#current-pic");
    var currentTemperatureEl = document.querySelector("#temperature");
    var currentHumidityEl = document.querySelector("#humidity");
    var currentWindSpeedEl = document.querySelector("#wind-speed");
    var currentUvIndexEl = document.querySelector("#UV-index");
    var currentDateEl = document.querySelector("#current-date");
    var historyEl = document.querySelector
    // get value from input element

    var apiKey = 'c4877f378c771bee504d8a30118ddeb4';


    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey)
        .then(function (response) {
            return response.json()
        })


        .then(function (response) {
            console.log(response)
            nameEl.textContent = response.name
            var currentDate = moment(response.dt, "X").format("MM/DD/YYYY")
            currentDateEl.textContent = currentDate
            var iconcode = response.weather[0].icon
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

            currentPicEl.setAttribute("src", iconurl)
           
            currentTemperatureEl.innerHTML = "Temperature:  " + response.main.temp + "&#8457;"
            currentHumidityEl.textContent = "Humidity: " + response.main.humidity  +   "%"
             currentWindSpeedEl.textContent = "Wind Speed: " + response.wind.speed + " MPH"

             fetch("http://api.openweathermap.org/data/2.5/uvi?lat="+response.coord.lat+"&lon="+response.coord.lon+"&appid="+  apiKey )
             .then(function(response) {
                   return response.json()
             })
             .then(function(uvresponse) {
                 console.log(uvresponse)
                 currentUvIndexEl.textContent = "UV Index: " + uvresponse.value
             })
        })
    

    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+cityName+ '&units=imperial&appid=' + apiKey)    
    .then(function(response) {
        return response.json()
    })


    .then(function(fivedayresponse) {
      console.log(fivedayresponse)
      

    })
     



}
/*'https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&APPID=c4877f378c771bee504d8a30118ddeb4'  */