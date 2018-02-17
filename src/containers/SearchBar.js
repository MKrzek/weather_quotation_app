import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";

class SearchBar extends React.Component {
  renderField = field => {
    const { input, type, label, meta: { touched, error } } = field;
    return (
      <fieldset className={`form-group${touched && error ? "has-error" : ""}`}>
        <div>
          <div className="row justify-content-center">
            <input
              {...input}
              type={type}
              placeholder={label}
              className="col-7 form-control text-lowercase searchBar" />
            <button type="submit" className="btn bmd-btn-icon">
              <i className="material-icons">search</i>
            </button>
          </div>
          <div className='pl-5 pr-5 errorAlert'>
          {touched && error && <div className="alert alert-danger">{error} </div>}
          </div>
        </div>
      </fieldset>
    );
  };

  submitForm = values => {
    const location=values.searchBar;
    this.props.showWeather(location);
    values.searchBar = "";
  };

  render() {
    return (
      <div className='pt-5'>
        <form onSubmit={this.props.handleSubmit(this.submitForm)}>
          <Field
            name="searchBar"
            type="text"
            label="Enter a query"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.searchBar) {
    errors.searchBar = "Enter your query";
  }

  return errors;
}

export default connect(null, Actions)(
  reduxForm({
    validate,
    form: "searchBar"
  })(SearchBar)
);
