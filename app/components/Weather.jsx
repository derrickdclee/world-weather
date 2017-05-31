var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  handleSearch: function (location) {
    this.setState({isLoading: true});
    // to point to the current Weather component
    // inside then()
    var that = this;
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        // set isLoading back to false once the data are fetched
        isLoading: false
      });
    }, function(errorMessage) {
      alert(errorMessage);
      that.setState({
        isLoading: false,
        location: null,
        temp: null
      });
    });
  },

  render: function() {
    // syntactic sugar!
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h1>Weather Component</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
