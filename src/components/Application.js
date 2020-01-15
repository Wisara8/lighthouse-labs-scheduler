import React, { useState } from "react";
import DayList from "components/DayList";
import Appointment from "components/Appointment";


import "components/Application.scss";

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

const appointmentsData = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
  },
  {
    id: 5,
    time: "5pm",
    interview: {
      student: "Batman",
      interviewer: {
        id: 1,
        name: "Super Sylvia",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
];  

export default function Application(props) {
  const [day, setDay] = useState("Monday");
  
  const appointments = appointmentsData.map(app => {
    return (
      <Appointment  
        key = {app.id}
        time = {app.time}
        interview = {app.interview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            day={day}
            setDay={day => setDay(day)}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">

        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        {appointments}
        
      </section>
    </main>
  );
}

