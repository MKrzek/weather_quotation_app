import React from "react";
export default class GeoErrors extends React.Component {
  render() {
    return (
      <h2 className="pb-5 text-danger">
        Can't geolocate your location.Try searching manually.
      </h2>
    );
  }
}
