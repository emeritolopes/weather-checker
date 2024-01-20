var apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
var api5days = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
var apiForecast = "https://api.openweathermap.org/data/2.5/forecast?&appid="
var apiKey = "805e77120e748a27c412fd3be8eba82a";
var today = dayjs().format('DD/MM/YYYY');
var foreCast = $("#forescast");
var fiveDaysList;
var mostRecent;
// weather API from https://openweathermap.org/

$(document).ready(function() {
    var cityForm = $("#search-form")
    var cityInput = $("#search-input")
    var todayContainer = $("#today")

    cityForm.on("submit", function(event){
        event.preventDefault()
        var city = cityInput.val()  
        // currentWeather(city); 
        fetchcoord(city)
    })
    function fetchcoord(city) {
        var geoapi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
        fetch(geoapi)
        .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data) 
      fetchweather(data[0])
      })}

    function fetchweather(location) {
        console.log(location);
        var city = location.name
        var {lat,lon} = location
        console.log(lat, lon);
        var api5days = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
        fetch(api5days)
        .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data, city) 
      currentWeather(data.list[0],city)
      })}
    
// display current weather
    function currentWeather(current, city) {
        var date = dayjs().format('D/M/YYYY');
  // Store response data from our request in variables
        var tempC = current.main.temp;
        var windKph = current.wind.speed;
        var humidity = current.main.humidity;
        var iconUrl =
            'https://openweathermap.org/img/w/' + current.weather[0].icon + '.png';
        var iconDescription = current.weather[0].description || weather[0].main;
        var card = $('<div>');
        var cardBody = $('<div>');
        var heading = $('<h2>');
        var weatherIcon = $('<img>');
        var tempEl = $('<p>');
        var windEl = $('<p>');
        var humidityEl = $('<p>');

  card.attr('class', 'card');
  cardBody.attr('class', 'card-body');
  card.append(cardBody);

  heading.attr('class', 'h3 card-title');
  tempEl.attr('class', 'card-text');
  windEl.attr('class', 'card-text');
humidityEl.attr('class', 'card-text');

  heading.text(city + ' (' + date + ')');
  weatherIcon.attr('src', iconUrl);
  weatherIcon.attr('alt', iconDescription);
  weatherIcon.attr('class', 'weather-img');
  heading.append(weatherIcon);
  tempEl.text('Temp: ' + tempC + ' °C');
  windEl.text('Wind: ' + windKph + ' KPH');
  humidityEl.text('Humidity: ' + humidity + '%');
  cardBody.append(heading, tempEl, windEl, humidityEl);

  todayContainer.html('');
  todayContainer.append(card);
  card.append(cardBody);

  
    forecast.append(card);

       
        
        

      
    }
});
var weatherData = (city) => {
    var apiForecast = "api.openweathermap.org/data/2.5/forecast?&appid= + apiKey"

    fetch(apiForecast).then(res => res.json()).then(data => {
        console.log(data)
    })
}

function currentWeather(forecast,container) {
    // var h2 = $("<h2>")
    // h2.text(data.name)
   console.log(forecast);
    // var container = document.querySelector(".weatherCard")
   for (let i = 1; i < forecast.length; i++) {
    const data = forecast[i];
    var img = $("<img>")
    img.attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
    cardsForecast();
    fiveDaysList =[];
    // var h2 = $("<p>")
    // h2.text(data.name)
    // container.append(h2)

    // var temp = $("<p>")
    // temp.text("Temp: " + current.main.temp + " °C")
    // container.append(temp)

    // var wind = $("<p>")
    // wind.text("Wind: " + data.wind.speed + " KPH")
    // container.append(wind)

    // var humidity = $("<p>")
    // humidity.text("Humidity: " + data.main.humidity + " %")
    // container.append(humidity)
   }
    
    function cardsForecast(el) {
        var card = $('<div class="card mx-auto"></div>');
        var cardBody = $("<div>").addClass('card-body');
        var date = $('<h4>').text(dayjs().add(el, "day").format("DD/MM/YYYY"));
        var temperature = $("<p>").text("Temperature: " + (fiveDaysList[el].main.temp - 273.15).toFixed(1) + "°C");
        var icon =$("<img>").attr("src", "https://openweathermap.org/img/wn/" + fiveDaysList[el].weather[0].icon + "@2x.png")
        var humidity = $("<p>").text("Humidity: " + fiveDaysList[el].main.humidity + "%");
        var wind = $("<p>").text("Wind speed: " + fiveDaysList[el].wind.speed + "m/s");
        cardBody.append(date, icon, temperature, humidity, wind);
        card.append(cardBody);
        forecast.append(card);
    }
    
  
}
