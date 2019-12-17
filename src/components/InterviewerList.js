import React from "react";
import ReactDOM from "react-dom";
import InterviewerListItem from "components/InterviewerListItem.js";
import "components/InterviewerList.scss";


const interviewers = [];

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name} 
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={props.setInterviewer}
      />
    );
  });

  return interviewers;
}

ReactDOM.render(
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
      <InterviewerListItem interviewers={interviewers}/>
    </ul>
  </section>,
  document.getElementById("root")
);