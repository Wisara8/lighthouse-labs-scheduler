import React from "react";
import ReactDOM from "react-dom";
import days from "components/DayListItem.js";

function DayList(props) {
  const days = props.days.map(day => {
    return (
      <DayListItem
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });

  return days;
}

ReactDOM.render(
  <ul>
  <DayList days={days} />
  </ul>,
  document.getElementById("root")
);