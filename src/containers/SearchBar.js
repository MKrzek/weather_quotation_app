import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class SearchBar extends React.Component{
   
    renderField=field=>{
        const {input, label, type, meta:{error, touched}}= field;
        return <fieldset className={`form-group ${touched && error ? "has-error" : ""}`}>
            <div>
              <input {...input} type={type} className="form-control" placeholder={label} />
              <button type="submit" className="btn bmd-btn-icon">
                <i className="material-icons">search</i>
              </button>
              {touched && error && <div className="alert alert-danger">
                    {error}{" "}
                  </div>}
            </div>
          </fieldset>;
    }

    submitQuery=values=>{
        this.props.submitQuery(values)
    }

    render(){
        const {handleSubmit}=this.props;
        return <form onSubmit={handleSubmit(this.submitQuery)}>
                <Field 
                 name='searchBar'
                 label='Enter a location'
                 type='text'
                 component={this.renderField}/>
                
            </form>
        
    }
}
function validate(values){
    const errors={}
    if (!values.name){
        errors.name='Plase enter a valid location'
    }
    return errors;
}

export default connect(null, Actions)(reduxForm({
    form: 'SearchBar',
    validate
})(SearchBar));