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
    <Header/>
    <Show/>
    <Empty/>
  </Fragment>
  );
}

ReactDOM.render(
  <Appointment/>,
  document.getElementById("root")
);