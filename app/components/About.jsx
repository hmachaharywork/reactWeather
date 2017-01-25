var React = require('react');

var About = (props) => {
  return(
    <div>
        <h1 className="text-center">About</h1>
        <p>
          This is a weather application built on React. I have build this
          application while learning ReactJS for the first time.
        </p>
        <p>
          Here are some of the tools I used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework I used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather
              Map to search for weather data using city name.
          </li>
          <li>
            <a href="http://foundation.zurb.com/">Foundation</a> - Used Foundation framework to style the app.
          </li>
          <li>
            <a href="https://github.com/hmachaharywork/reactWeather">Github</a> - Here is the Github repository.
          </li>
          <li>
            <a href="https://nodejs.org/en/">NodeJs & Express</a> - Used NodeJs and ExpressJs for server.
          </li>
          <li>
            <a href="https://www.heroku.com/">Heroku</a> - Deployed the app in heroku.
          </li>
        </ul>
    </div>
  );
};


module.exports = About;
