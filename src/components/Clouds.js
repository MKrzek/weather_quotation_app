import React from "react";
export default class Clouds extends React.Component {
  render() {
    return (
      <div className="weather-container">
        <div className="back-cloud">
          <div className="cloud-one" />
          <div className="cloud-two" />
          <div className="cloud-three" />
        </div>
        <div className="cloud-shadow">
          <div className="cloud-one-shadow" />
          <div className="cloud-two-shadow" />
          <div className="cloud-three-shadow" />
        </div>

        <div className="front-cloud">
          <div className="cloud-one" />
          <div className="cloud-two" />
          <div className="cloud-three" />
        </div>
      </div>
    );
  }
}
