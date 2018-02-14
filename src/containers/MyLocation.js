import React from 'react';
import { connect } from "react-redux";
import * as Actions from '../actions/index.js';


class MyLocation extends React.Component{
    constructor(state){
        super(state);
            this.state={
                error: ''
        }
    }
     
    componentDidMount(){
     this.props.showMyLocation()
         
    }
    displayError=()=>{
        if (this.props.error){
                 this.setState({
                 error: "Can't geolocate your machine. Please enter your location"
             }) 
        }
    }
    
    render(){
        console.log (this.props.error)
        
        return<div>  
              
              </div>
    }
}

function mapStateToProps(state){
    console.log ('err', state.geoError)
    return{
        error: state.geoError
    }
}
export default connect (mapStateToProps, Actions)(MyLocation);