import './img/sun.png';
import './img/sky.jpg';
import './img/clouds.jpg';
import './img/rain.jpg';
import './img/cloudy.png';
import './img/watering.png';
import './css/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import WeatherWidget from './components/WeatherWidget';
function App() {
  return (
    <WeatherWidget
      city="Москва"
      deg={15}
      wind={1}
      humidity={85}
      typeWeather="clouds"
    />
  );
}
const domContainer = document.querySelector('#app');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  domContainer
);
