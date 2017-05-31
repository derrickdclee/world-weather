var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=f2ea0b2dbc6055cbd7c8a388f2a395d6';
// f2ea0b2dbc6055cbd7c8a388f2a395d6

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // "then" returns a Promise
    return axios.get(requestUrl).then(function(res) {
      // weird edge case that leads to an error
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
