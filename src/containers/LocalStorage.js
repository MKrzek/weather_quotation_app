import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

class LocalStorage extends React.Component{
    
    addToLocalStorage=()=>{
        const location=this.props.weather
        this.props.addToLocalStorage(location)
    }
    render(){
        return<div>
               <button onClick={this.addToLocalStorage}>+</button>
              </div>
    }
}
function mapStateToProps(state){
    console.log ('storage', state.weather)
    return {
        location: state.weather
    }
}
export default connect (mapStateToProps, Actions) (LocalStorage)