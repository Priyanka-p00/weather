console.log(weather);

if (weather.main == undefined) {
    res.render('index', { weather: null, error: 'Error, please try again' });
} else {
    // we shall use the data got to set up your output
    let place = `${weather.name}, ${weather.sys.country}`,
      /* you shall calculate the current timezone using the data fetched*/
      weatherTimezone = `${new Date(
        weather.dt * 1000 - weather.timezone * 1000
      )}`;
    let weatherTemp = `${weather.main.temp}`,
      weatherPressure = `${weather.main.pressure}`,
      /* you will fetch the weather icon and its size using the icon data*/
      weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
      weatherDescription = `${weather.weather[0].description}`,
      humidity = `${weather.main.humidity}`,
      clouds = `${weather.clouds.all}`,
      visibility = `${weather.visibility}`,
      main = `${weather.weather[0].main}`,
      weatherFahrenheit;
    weatherFahrenheit = (weatherTemp * 9) / 5 + 32;

    function roundToTwo(num) {
      return +(Math.round(num + "e+2") + "e-2");
    }
    weatherFahrenheit = roundToTwo(weatherFahrenheit);
    res.render("index", {
      weather: weather,
      place: place,
      temp: weatherTemp,
      pressure: weatherPressure,
      icon: weatherIcon,
      description: weatherDescription,
      timezone: weatherTimezone,
      humidity: humidity,
      fahrenheit: weatherFahrenheit,
      clouds: clouds,
      visibility: visibility,
      main: main,
      error: null,
    });
  }

  res.render("index", {
    weather: weather,
    place: place,
    temp: weatherTemp,
    pressure: weatherPressure,
    icon: weatherIcon,
    description: weatherDescription,
    timezone: weatherTimezone,
    humidity: humidity,
    fahrenheit: weatherFahrenheit,
    clouds: clouds,
    visibility: visibility,
    main: main,
    error: null,
  });
// you will set up your port configurations. You will also start the server and add a message to display when running.
app.listen(5000, function () {
console.log("Weather app listening on port 5000!");
});