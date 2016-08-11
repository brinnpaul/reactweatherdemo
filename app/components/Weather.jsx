let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(location) {
    var self = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location)
    .then(function(temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    })
    // .catch(function(errMsg) {
    //   alert(errMsg);
    //   self.setState({isLoading:false});
    // })

  },
  render: function() {
    let {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}></WeatherMessage>
      }
    }

    return (
      <div>
        <h3>Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
