import React, { Component } from "react";
import "../styles/WeatherForm.css";

class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        city: "",
        country: ""
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.resetWeatherAndState = this.resetWeatherAndState.bind(this);
    }

    onInputChange (event) {
        // Set the state of the input value to whatever the target.value is
        this.setState({
        [event.target.name]: event.target.value
        });
    }

    resetWeatherAndState () {
        // First off, let's reset the state of the city and country input
        this.setState({
            city: '',
            country: '',
        });

        // Secondly, we're going to reset all of the weather data
        this.props.resetWeather();
    }

    render() {
        return (
            <form>
                <input
                className="input"
                value={this.state.city}
                onChange={this.onInputChange}
                type="text"
                placeholder="city..."
                name="city"
                />
                <input
                className="input"
                value={this.state.country}
                onChange={this.onInputChange}
                type="text"
                placeholder="country..."
                name="country"
                />
                <button
                    className="get-weather"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.fetchedData
                            ? this.resetWeatherAndState()
                            : this.props.getWeather(this.state.city, this.state.country);
                    }}
                >
                {this.props.fetchedData ? "Reset" : "Get Weather"}
                </button>
            </form>
        );
    }
}

export default WeatherForm;
