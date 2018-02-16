import React from "react";
export default class Snow extends React.Component {
  render() {
    return (
      <div className="weather-container">
        <div className="clouds">
          <div className="cloud-one" />
          <div className="cloud-two" />
          <div className="cloud-three" />
        </div>
        <div className="snows">
          <div className="snow1" />
          <div className="snow2" />
          <div className="snow3" />
          <div className="snow4" />
          <div className="snow5" />
          <div className="snow6" />
        </div>
      </div>
    );
  }
}
