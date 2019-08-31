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
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
                    ? this.props.resetWeather()
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
