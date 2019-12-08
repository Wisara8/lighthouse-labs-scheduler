import React from "react";
import "components/DayListItem.scss";
var classnames = require('classnames');

export default function DayListItem(props) {
  const dayClass = classnames("day-list__item", {
    "--selected": props.selected,
    "--full": !props.spots 
  });

  return (
    <li 
      className={dayClass}
      onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}