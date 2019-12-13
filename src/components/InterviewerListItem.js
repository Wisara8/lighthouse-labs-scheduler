import React from "react";
import "components/InterviewerListItem.scss";
var classnames = require('classnames');

export default function InterviewerListItem(props) {
  const interviewersClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewersClass}
    onClick={() => props.setInterviewer(props.name)}>
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  );
}