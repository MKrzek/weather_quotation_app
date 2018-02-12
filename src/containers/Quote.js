import React from "react";
import { connect } from "react-redux";
import { htmlDecode } from "js-htmlencode";
import * as Actions from "../actions/index.js";

class Quote extends React.Component {
  componentDidMount() {
    this.props.fetchQuote();
  }
  decodeEntities = () => {
    let content = this.props.quote.content;
    if (content && typeof content === "string") {
      content = content.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
      content = content.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
      content = htmlDecode(content);
    }
    return content;
  };

  render() {
    const { title } = this.props.quote;
    return (
      <div>
        <p>{this.decodeEntities(this.props.quote.content)}</p>
        <p>{title}</p>
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
