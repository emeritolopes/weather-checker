var apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
var apiKey = "4930782434657daf748cc931d47eb007";
var today = dayjs().format('DD/MM/YYYY');
var foreCast = $("#forescast");
var fiveDays;
var mostRecent;
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
// display current weather
    function displayWeather(data, container) {
        var h2 = $("<h2>")
        h2.text(data.name)
       
        var img = $("<img>")
        img.attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
        h2.append(img)
        container.append(h2)
        var temp = $("<p>")
        temp.text("Temp: " + data.main.temp + " °C")
        container.append(temp)
        var wind = $("<p>")
        wind.text("Wind: " + data.wind.speed + " KPH")
        container.append(wind)
        var humidity = $("<p>")
        humidity.text("Humidity: " + data.main.humidity + " %")
        container.append(humidity)
        
        cardContent(data);
      
    }
});
function cardContent(data) {
    var temp = $("<p>")
        temp.text("Temp: " + data.main.temp + " °C")
        container.append(temp)
}