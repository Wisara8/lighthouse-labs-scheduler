import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";

import Empty from "components/Appointment/Empty";

import Show from "components/Appointment/Show";

var classnames = require('classnames');

export default function Appointment(props) {

  return (
    <Fragment> 
      <article className="appointment"></article>
      <Header time={props.time}/>
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer.name} /> : <Empty />}
    </Fragment>
  );
}

ReactDOM.render(
  <Appointment/>,
  document.getElementById("root")
);