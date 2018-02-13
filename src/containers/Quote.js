import React from "react";
import { connect } from "react-redux";
import { htmlDecode } from "js-htmlencode";
import * as Actions from "../actions/index.js";
import LocalStorageDisplay from "./LocalStorageDisplay.js";

class Quote extends React.Component {
  constructor (props){
    super(props);
    this.state={
      render: false
    }
  }
  componentDidMount() {
    this.props.fetchQuote();
  }
  decodeEntities = (encodedString) => {
    if (encodedString && typeof encodedString === "string") {
      encodedString = encodedString.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
      encodedString = encodedString.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
      encodedString = htmlDecode(encodedString);
    }
    return encodedString;
  };

  openLocalStorage=()=>{
    this.setState({
      render: true
    })
  }

  render() {
    const { title, content } = this.props.quote;
    return <div>
        <div>
          <div>
            <p>{this.decodeEntities(content)}</p>
            <p>{this.decodeEntities(title)}</p>
          </div>
          <button onClick={this.openLocalStorage}>
            <i className="fa fa-bars fa-4x" aria-hidden="true" />
          </button>
        </div>
        {this.state.render ? (<LocalStorageDisplay />) : null}
      </div>;
  }
}
function mapStateToProps(state) {
  return {
    quote: state.quote
  };
}
export default connect(mapStateToProps, Actions)(Quote);
