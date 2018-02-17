import React from "react";
export default class StoredLocation extends React.Component {
  
  removeLocation = () => {
    const { id } = this.props.location;
    this.props.removeStoredLocation(id);
  };
  showWeather = () => {
    const { name } = this.props.location;
    this.props.showWeather(name);
  };

  render() {
    const { name } = this.props.location;

    return (
      <div className="storedLocation">
        <h3 onClick={this.showWeather}>{name}</h3>
        <button className="btn btn-warning" onClick={this.removeLocation}>
          Remove
        </button>
      </div>
    );
  }
}
