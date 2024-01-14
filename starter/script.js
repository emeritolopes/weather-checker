var apiURL = "https://api.openweathermap.org/data/2.5/weather?&appid="
var apiKey = "4930782434657daf748cc931d47eb007";

// weather API from https://openweathermap.org/

$(document).ready(function() {
    var cityForm = $("#search-form")
    var cityInput = $("#search-input")
    var todayContainer = $("#today")

    cityForm.on("submit", function(event){
        event.preventDefault()
        var city = cityInput.val()  
        currentWeather(city); 
    })
    // current weather
    function currentWeather(city) {
        fetch(apiURL + city + "&appid=" + apiKey)
        .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        displayWeather(data, todayContainer)
      })
    }
