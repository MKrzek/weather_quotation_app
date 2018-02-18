import React from "react";
import Sun from "../components/Sun.js";
import Clouds from "../components/Clouds.js";
import Rain from "../components/Rain.js";
import Snow from "../components/Snow.js";
import Mist from "../components/Mist.js";

export default class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderCelcius: true,
      renderFarenheit: false,
      tempFarenheit: 0,
      buttonInfo: "Farenheit"
    };
  }
  showFarenheitTemp = () => {
    if (this.state.renderCelcius) {
      let tempFarenheit = this.props.weather.temp * 1.8 + 32;
      this.setState({
        renderCelcius: false,
        renderFarenheit: true,
        tempFarenheit: tempFarenheit,
        buttonInfo: "Celcius"
      });
    } else {
      this.setState({
        renderCelcius: true,
        renderFarenheit: false,
        buttonInfo: "Farenheit"
      });
    }
  };

  render() {
    const { name, temp } = this.props.weather;
    
    return <div className="pb-3">
        <h2 className="weatherName pb-5">{name}</h2>
        {this.props.icon === "Haze" || this.props.icon === "Mist" ? <Mist /> : null}
        {this.props.icon === "Clouds" ? <Clouds /> : null}
        {this.props.icon === "Drizzle" || this.props.icon === "Rain" ? <Rain /> : null}
        {this.props.icon === "Snow" ? <Snow /> : null}
        {this.props.icon === "Sun" || this.props.icon ==='Clear' ? <Sun /> : null}

        {this.state.renderCelcius ? <h3 className="weatherTemp pt-5">
            {Math.round(temp)}&#8451;
          </h3> : null}
        {this.state.renderFarenheit ? <h3 className="weatherTemp pt-5">
            {Math.round(this.state.tempFarenheit)}&#8457;
          </h3> : null}
        <button className="btn btn-info" onClick={this.showFarenheitTemp}>
          Show temperature in {this.state.buttonInfo}
        </button>
      </div>;
  }
}
