import React from "react";
import ReactDOM from "react-dom";
import InterviewListItem from "components/InterviewListItem.js";
import "components/InterviewerList.scss";


const days = [];

export default function DayList(props) {
  const days = props.days.map(day => {
    return (
      <InterviewListItem
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
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list"></ul>
  </section>,
  document.getElementById("root")
);