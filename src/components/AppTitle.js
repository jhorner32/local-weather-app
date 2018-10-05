import React, { Component } from 'react';
import '../styles/AppTitle.css';

class AppTitle extends Component {
  
  static defaultProps = {
    title: 'Local Weather',
    subTitle: 'To recieve your local weather information, please enter your city and country to the right...'
  }

  render() {

    const {title, subTitle} = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <hr />
        <h5>{subTitle}</h5>
      </div>
    );
  }
}

export default AppTitle;