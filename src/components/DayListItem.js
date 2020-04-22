import React from "react";
import "components/DayListItem.scss";
var classnames = require('classnames');

export default function DayListItem(props) {
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });

  const formatSpots = (spots) => {
    if (spots > 1) {
      return `${spots} spots remaining`;
    } else if (spots === 1) {
      return "1 spot remaining";
    } else {
      return "no spots remaining";
    }
  }

  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      {/* <h3 className="text--light">{props.spots} spots remaining</h3> */}
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}