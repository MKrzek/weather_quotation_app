import React from "react";
export default class Clouds extends React.Component {
  render() {
    return <div className="cloudy">
        <div className="back-cloud" />
        <div className="cloud-shadow" />
        <div className="front-cloud" />
      </div>
  }
}
