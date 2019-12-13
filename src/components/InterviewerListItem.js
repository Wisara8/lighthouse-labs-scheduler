import React from "react";
import "components/InterviewerListItem.scss";
var classnames = require('classnames');

export default function DayListItem(props) {
  const dayClass = classnames("day-__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots 
  });

  return (
    <li className="interviewers__item">
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  );
}