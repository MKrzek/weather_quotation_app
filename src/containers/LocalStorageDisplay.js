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
    return <div className='localStorageDisplay'>
        <div>
          <LocalStorage />
        </div>
        <div className='text-center'>{this.showStoredLocations()}</div>
      </div>;
  }
}
function mapStateToProps(state) {
  return {
    storedLocations: state.storedLocations
  };
}
export default connect(mapStateToProps, Actions)(LocalStorageDisplay);
