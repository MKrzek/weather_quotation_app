import React from "react";
export default class Rain extends React.Component {
  render() {
    return <div className="rainy">
        <div className="back-cloud" />
        <div className="rains">
          <div className="rain1" />
          <div className="rain2" />
          <div className="rain3" />
        </div>
      </div>;
  }
}
