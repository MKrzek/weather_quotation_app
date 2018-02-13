import React from "react";
export default class StoredLocation extends React.Component {
  removeLocation = () => {
    console.log("click works");
    const { id } = this.props.location;
    this.props.removeStoredLocation(id);
  };
  render() {
    const { name } = this.props.location;

    return (
      <div className='row'>
        <h3 className='text-center'>{name}</h3>
        <button className='buttonRemove' onClick={this.removeLocation}>X</button>
      </div>
    );
  }
}
