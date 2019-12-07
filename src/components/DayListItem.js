import React from "react";
import "components/DayListItem.scss";
var classnames = require('classnames');

export default function DayListItem(props) {
  const dayClass = classnames("dayList", {
    "__item--selected": props.selected,
    "__item--full": !props.spots 
  });

  return (
    <li 
      className={dayClass}
      onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}