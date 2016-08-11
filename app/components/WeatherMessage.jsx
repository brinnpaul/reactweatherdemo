let React = require('react');

let WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">Its {temp} degrees Fahrenheit in {location}</h3>
  );
}

module.exports = WeatherMessage;
