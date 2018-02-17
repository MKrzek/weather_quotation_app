import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import LocalStorage from "./LocalStorage.js";
import StoredLocation from "../components/StoredLocation.js";

class LocalStorageDisplay extends React.Component {

  componentDidMount = () => {
    this.props.fetchStoredLocations();
  };
  removeStoredLocation = id => {
    this.props.removeStoredLocation(id);
  };

  showWeather=(location)=>{
    this.props.showWeather(location)
  }
  showStoredLocations = () => {
    return this.props.storedLocations.map(location => {
      return (
        <StoredLocation
          key={location.id || location.name}
          location={location}
          removeStoredLocation={this.removeStoredLocation}
          showWeather={this.showWeather}
        />
      );
    });
  };
  render() {
    return <div className='localStorageDisplay'>
        <div>
          <LocalStorage />
        </div>
        <div className='pt-5 pb-5'>{this.showStoredLocations()}</div>
      </div>;
  }
}
function mapStateToProps(state) {
  return {
    storedLocations: state.storedLocations
  };
}
export default connect(mapStateToProps, Actions)(LocalStorageDisplay);
