import React from "react";
import { connect } from "react-redux";

import _ from "lodash";
import WeatherDisplay from "../components/WeatherDisplay.js";
import GeoErrors from "../components/GeoErrors.js";
import FetchErrors from "../components/FetchErrors.js";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geoDisplay: "block",
      fetchDisplay: "block"
    };
  }

  displayWeather = () => {
    let icon;
    return _.map(this.props.weather, data => {
      icon = data.weather;
      icon = icon.main;
      return (
        <WeatherDisplay key={data.id || data.name} weather={data} icon={icon} />
      );
    });
  };

  showGeoErrors = () => {
    if (this.props.geoError.gError === "geoError") {
      return <GeoErrors />;
    }
    setTimeout(() => {
      this.setState({ geoDisplay: "none" });
    }, 3000);
  };

  showFetchErrors = () => {
    if (this.props.fetchError.fError === "fetchingError") {
      return <FetchErrors />;
    }
    setTimeout(() => {
      this.setState({ fetchDisplay: "none" });
    }, 3000);
  };

  render() {
    return (
      <div className="weather">
        <div style={{ display: this.state.geoDisplay }}>
          {this.showGeoErrors()}
        </div>
        <div style={{ display: this.state.fetchDisplay }}>
          {this.showFetchErrors()}
        </div>
        <div>{this.displayWeather()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather,
    geoError: state.geoError,
    fetchError: state.fetchError
  };
}
export default connect(mapStateToProps, null)(Weather);
