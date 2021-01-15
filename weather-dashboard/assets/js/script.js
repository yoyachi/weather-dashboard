function myFunction() {
    fetch(
        'https://openweathermap.org/api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c4877f378c771bee504d8a30118ddeb4'  
    )
    .then(function(openWeatherResponse) {
        return openWeatherResponse.json();
    })
    .then(function(openWeatherResponse) {
        console.log(openWeatherResponse)
    })
    
}
