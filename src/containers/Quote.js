import React from "react";
import { connect } from "react-redux";
import { htmlDecode } from "js-htmlencode";
import * as Actions from "../actions/index.js";

class Quote extends React.Component {
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

  render() {
    const { title, content } = this.props.quote;
    return (
      <div>
        <p>{this.decodeEntities(content)}</p>
        <p>{this.decodeEntities(title)}</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    quote: state.quote
  };
}
export default connect(mapStateToProps, Actions)(Quote);
