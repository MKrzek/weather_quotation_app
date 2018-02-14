import React from "react";
export default class WeatherDisplay extends React.Component {
  render() {
    const { name, temp } = this.props.weather;
    return <div className="mb-5 col mx-auto">
        <h2 className="mb-5">{name}</h2>
        <h3 className="mb-5">{Math.round(temp)}&#8451;</h3>
      </div>;
  }
}
