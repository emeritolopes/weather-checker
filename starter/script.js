// weather API from https://openweathermap.org/
$(document).ready(function() {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london";
    var apiKey = "4930782434657daf748cc931d47eb007";

// testing if api works 
    async function checkWeather() {
        var response = await fetch(apiURL + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
    }
checkWeather();
    

})
