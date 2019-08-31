import React from 'react'
import WeatherForm from './WeatherForm';
import WeatherData from './WeatherData';

import '../styles/RightContainer.css';
import '../styles/WeatherForm.css'

const RightContainer = props => {
    return (
        <div className="right-container">
            <div className="weather-data-container">
            <WeatherForm
                getWeather={props.getWeather}
                resetWeather={props.resetWeather}
                fetchedData={props.fetchedData}
            />
            <WeatherData
                resetWeather={props.resetWeather}
                city={props.city}
                country={props.country}
                temperature={props.temperature}
                humidity={props.humidity}
                description={props.description}
                error={props.error}
            />
            </div>
        </div>
    );
}

export default RightContainer;