import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";

class LocalStorage extends React.Component {
  addToLocalStorage = () => {
    let location = this.props.location;
    location = location[0];
    delete location.temp;

    this.props.addToLocalStorage(location);
  };
  render() {
    return <div>
        <button className="buttonRound text-center" onClick={this.addToLocalStorage}>
          <i className="fa fa-plus fa-4x" />
        </button>
      </div>;
  }
}
function mapStateToProps(state) {
  return {
    location: state.weather
  };
}
export default connect(mapStateToProps, Actions)(LocalStorage);
