var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  handleSearch: function (location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      // needed to clear out data
      location: undefined,
      temp: undefined
    });
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
    }, function(err) {
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },
  componentDidMount: function() {
    // to extract the query parameter
    var location = this.props.location.query.city;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.city;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function() {
    // syntactic sugar!
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
