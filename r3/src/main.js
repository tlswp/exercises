import './img/sun.png';
import './img/sky.jpg';
import './img/clouds.jpg';
import './img/rain.jpg';
import './img/cloudy.png';
import './img/watering.png';
import './css/styles.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function WeatherWidget(props) {
  return (
    <div className={'weather_widget ' + props.weatherType}>
      <div className="city">{props.city}</div>
      <div className="deg">{props.deg + '°'}</div>
      <div className="wind">{'Скорость ветра: ' + props.wind + 'м/c'}</div>
      <div className="humidity">
        {'Давление: ' + props.humidity + 'мм рт. ст.'}
      </div>
      <div className={'weather_type ' + props.weatherType}></div>
    </div>
  );
}
WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
  deg: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  weatherType: PropTypes.oneOf(['sun', 'rain', 'clouds']),
};
const domContainer = document.querySelector('#form');
ReactDOM.render(
  <React.StrictMode>
    <WeatherWidget
      city={'Москва'}
      deg={15}
      wind={1}
      humidity={85}
      weatherType={'clouds'}
    />
  </React.StrictMode>,
  domContainer
);
