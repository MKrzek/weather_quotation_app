import React from 'react';
import {connect} from 'react-redux';

class Weather extends React.Component{
    
   
    render(){
        

        return <div>
                 {this.props.weather}
               </div>
    }
}

function mapStateToProps(state){
    return { weather: state.weather };
}

export default connect(mapStateToProps, null)(Weather)

 