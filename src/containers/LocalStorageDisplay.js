import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import LocalStorage from "./LocalStorage.js";
import StoredLocation from "../components/StoredLocation.js";

class LocalStorageDisplay extends React.Component {
  componentDidMount = () => {
    console.log("dziaa;");
    this.props.fetchStoredLocations();
  };
  removeStoredLocation = id => {
    console.log("remove works");
    this.props.removeStoredLocation(id);
  };
  showStoredLocations = () => {
    return this.props.storedLocations.map(location => {
      return (
        <StoredLocation
          key={location.id || location.name}
          location={location}
          removeStoredLocation={this.removeStoredLocation}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <div>
          <LocalStorage />
        </div>
        {this.showStoredLocations()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    storedLocations: state.storedLocations
  };
}
export default connect(mapStateToProps, Actions)(LocalStorageDisplay);
