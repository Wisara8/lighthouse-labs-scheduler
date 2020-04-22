import React from "react";
import ReactDOM from "react-dom";
import DayListItem from "components/DayListItem.js";

const days = [];

export default function DayList(props) {
  const days = props.days.map(day => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDays}
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

