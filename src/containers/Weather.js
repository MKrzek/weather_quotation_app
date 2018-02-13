import React from 'react';
import {connect} from 'react-redux';

class Weather extends React.Component{
    render(){
        if (this.props.weather ==='undefined'){
            return <div>Location not found, please check the spelling</div>
        }
        const name=this.props.weather[0];
        const temp= this.props.weather[1]
        return  <div>
            <h2>{name}</h2>
            <h3>{temp}&#8451;</h3>
            </div>

    }
}
function mapStateToProps(state){
    return { weather: state.weather };
}
export default connect(mapStateToProps, null)(Weather)

 