import React from "react";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";

class MyLocation extends React.Component {
  componentDidMount() {
    this.props.showMyLocation();
  }

  render() {
    return <div />;
  }
}

export default connect(null, Actions)(MyLocation);
