import React from "react";
export default class FetchErrors extends React.Component {
  render() {
    return (
      <h2 className="pb-5 text-danger">
        Can't find a required location. Try again.
      </h2>
    );
  }
}
