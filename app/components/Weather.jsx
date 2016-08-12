let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let ErrorModal = require('ErrorModal');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(location) {
    var self = this;

    this.setState({
      isLoading: true,
      errMsg: undefined
    });

    openWeatherMap.getTemp(location)
    .then(function(temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    })
    .catch(function(err) {
      self.setState({
        isLoading:false,
        errMsg: err.message
      });
    })

  },
  render: function() {
    let {isLoading, temp, location, errMsg} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>
      }
    }

    function renderError() {
      if (typeof errMsg === 'string') {
        return (
          <ErrorModal message={errMsg}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
