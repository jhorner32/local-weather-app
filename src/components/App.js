import React, { Component } from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

import '../styles/App.css';

const API_KEY = '8ddec521d125e33190069c4c5e381104';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      city: '',
      country: '',
      temperature: '',
      humidity: '',
      description: '',
      error: undefined
    }
  }

  // 
  getWeather = async (e) => {
    // prevent the default button action
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // template literals used on the fetch call. 
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    // waiting to form the json until we fetch the api
    const data = await apiCall.json();
    // now that the data is fetched, we form the json before we run the if/else statement below

    // if the city and the country have been defined by the user's input, set the state to the object's data.
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        description: data.weather[0].main,
        error: ''
      })
      // If the city and country aren't defined by the user, the error state will be the only property defined and an error message will be dispalyed.
    } else {
      this.setState({
        city: '',
        country: '',
        temperature: '',
        humidity: '',
        description: '',
        error: 'Please enter the values above to receive your local weather.'
      })
    }
  }

  // apart of the components being rendered below includes passing the weather api data that is sent to the RightContainer child component
  render() {
    return (
      <div className="App">
        <LeftContainer  />
        <RightContainer 
          getWeather = {this.getWeather}
          city = {this.state.city}
          country = {this.state.country}
          temperature = {this.state.temperature}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
