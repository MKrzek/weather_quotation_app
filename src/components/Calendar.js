import React from "react";
export default class Calendar extends React.Component {
  getDate = () => {
    const monthNames = [
      "Styczen",
      "Luty",
      "Marzec",
      "Kwiecien",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpien",
      "Wrzesien",
      "Pazdziernik",
      "Listopad",
      "Grudzien"
    ];
    const dayNames = [
      "Nedziela",
      "Poniedzialek",
      "Wtorek",
      "Sroda",
      "Czwartek",
      "Piatek",
      "Sobota"
    ];
    let date;
    const today = new Date();
    return (date =
      dayNames[today.getDay()] +
      ", " +
      today.getDate() +
      " " +
      monthNames[today.getMonth()] +
      " " +
      today.getFullYear());
  };

  render() {
    return (
      <div className="pb-5">
        <h4>{this.getDate()}</h4>
      </div>
    );
  }
}
