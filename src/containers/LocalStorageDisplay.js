import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';
import LocalStorage from './LocalStorage.js';

class LocalStorageDisplay extends React.Component{
    
    componentDidMount=()=>{
        console.log ('dziaa;')
        this.props.fetchStoredLocations()
    }
    showStoredLocations=()=>{
      console.log (this.props.storedLocations)
    }
    render(){
        return <div>
                <div>
                <LocalStorage/>
                </div>
                {this.showStoredLocations()}
                </div>
    }
}
function mapStateToProps(state){
    console.log ('stored loc', state.storedLocations)
    return {
        storedLocations: state.storedLocations
    }
}
export default connect (mapStateToProps, Actions) (LocalStorageDisplay)