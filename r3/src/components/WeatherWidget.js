import PropTypes from 'prop-types';
import React from 'react';

function WeatherWidget(props) {
  return (
    <div className={`weather_widget ${props.typeWeather}`}>
      <div className="city">{props.city}</div>
      <div className="deg">{`${props.deg}°`}</div>
      <div className="wind">{`Скорость ветра:  ${props.wind}м/c`}</div>
      <div className="humidity">{`Давление: ${props.humidity}мм рт. ст.`}</div>
      <div className={`weather_type ${props.typeWeather}`} />
    </div>
  );
}
WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
  deg: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  typeWeather: PropTypes.oneOf(['sun', 'rain', 'clouds']),
};
export default WeatherWidget;
