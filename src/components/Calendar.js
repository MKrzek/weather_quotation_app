import React from 'react';
export default class Calendar extends React.Component{
   
    getDate=()=>{
        const monthNames=['Styczen', 'Luty', 'Marzec', 'Kwiecien', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpien', 'Wrzesien', 'Pazdziernik', 'Listopad', 'Grudzien'];
        const weekNames= ['Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piatek', 'Sobota', 'Niedziela']
        let date;
        const today = new Date()
        return date = (weekNames[today.getDay()]) + ', ' + today.getDate()+ ' ' + (monthNames[(today.getMonth()+1)]) + ' ' + today.getFullYear()
    }

    render(){
        return <div>
                {this.getDate()}
               </div>
    }
}