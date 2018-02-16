import React from "react";
export default class Rain extends React.Component {
  render() {
    return (
      <div className="weather-container">
        <div className="clouds">
          <div className="cloud-one" />
          <div className="cloud-two" />
          <div className="cloud-three" />
        </div>
        <div className="rains">
          <div className="rain1" />
          <div className="rain2" />
          <div className="rain3" />
        </div>
      </div>
    );
  }
}
