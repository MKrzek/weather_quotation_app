import React from 'react';
import { connect } from "react-redux";
import * as Actions from '../actions/index.js';


class MyLocation extends React.Component{
     
    componentDidMount(){
     this.showMyLocation()
    }
    render(){
        return<div>
              </div>
    }
}
function mapStateToProps (state){
   return {
       myLocation: state.MyLocation
   }
}

export default connect (mapStateToProps, Actions)(MyLocation);