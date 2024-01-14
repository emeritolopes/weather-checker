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
}