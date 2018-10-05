import React from 'react';

import '../styles/WeatherData.css'

const WeatherData = props => (
  <div className='weather-data'>
    { props.city && props.country && <span><p><span className='weather-title'>Location:</span> { props.city }, { props.country }</p><hr/></span> }
    { props.temperature && <span><p><span className = 'weather-title'> Temperature:</span> { props.temperature }&#8457;</p><hr/></span> }
    { props.humidity && <span><p><span className='weather-title'>Humidity:</span> { props.humidity }%</p><hr/></span> }
    { props.description && <span><p><span className='weather-title'>Conditions:</span> { props.description }</p><hr/></span> }
    { props.error && <p className='weather-title error'>{ props.error }</p> }
  </div>
);

export default WeatherData;