import React from "react";
import { connect } from "react-redux";
import { htmlDecode } from "js-htmlencode";
import * as Actions from "../actions/index.js";
import LocalStorageDisplay from "./LocalStorageDisplay.js";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }
  componentDidMount() {
    this.props.fetchQuote();
    this.quoteId = setInterval(() => {
      this.props.fetchQuote();
    }, 8.64e7);
  }

  componentWillUnmount() {
    clearInterval(this.quoteId);
  }
  decodeEntities = encodedString => {
    if (encodedString && typeof encodedString === "string") {
      encodedString = encodedString.replace(
        /<script[^>]*>([\S\s]*?)<\/script>/gim,
        ""
      );
      encodedString = encodedString.replace(
        /<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,
        ""
      );
      encodedString = htmlDecode(encodedString);
    }
    return encodedString;
  };

  openLocalStorage = () => {
    if (this.state.render){
    this.setState({
      render: false
    });
  }else{
    this.setState({
      render: true
    })
  }
  };

  render() {
    const { title, content } = this.props.quote;
    return <div className="pb-5">
        
          <div className='pb-5 mb-5 quote'>
            <p className='quoteContent pl-5 pr-5'>{this.decodeEntities(content)}</p>
            <p className='quoteTitle pt-3'>{this.decodeEntities(title)}</p>
          </div>
          <div className='pb-3'>
            <i onClick={this.openLocalStorage} className="fa fa-bars fa-3x" aria-hidden="true" />
          </div>
          
        <div className="pt-4">
          {this.state.render ? <LocalStorageDisplay /> : null}
        </div>
      </div>;
  }
}
function mapStateToProps(state) {
  return {
    quote: state.quote
  };
}
export default connect(mapStateToProps, Actions)(Quote);
