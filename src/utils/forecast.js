const request = require("postman-request");

const forecast = (long, lat, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=1ecbb2dea2be68c504169dd44c6e548d&query=" +
    lat +
    "," +
    long;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degress out. It feels like " +
          body.current.feelslike +
          " degress out."
      );
    }
  });
};

module.exports = forecast;
