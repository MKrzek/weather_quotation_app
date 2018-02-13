import React from 'react';
export default class StoredLocation extends React.Component{

    removeLocation=()=>{
        console.log('click works')
        const {id}=this.props.location
        this.props.removeStoredLocation(id)
    }
    render(){
        const {name}=this.props.location
        
        return <div>
                <h3>{name}</h3>
                <button onClick={this.removeLocation}>X</button>
               </div>
    }
}