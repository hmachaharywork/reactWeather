var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h4>It's {temp} in {location}.</h4>
    </div>
  );
}

module.exports = WeatherMessage;
