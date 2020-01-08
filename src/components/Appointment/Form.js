import React, { useState } from "react";
import InterviewerList from "components/InterviewerList.js";
import Button from "components/Button.js"

export default function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  function reset() {
    setName("");
    setInterviewer(null);
  }

  function cancel() {
    reset();
    props.onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">

        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            value={name}
            type="text"
            placeholder="Enter Student Name"
            onInput={(event) => setName(event.target.value)}
            onSubmit={event => event.preventDefault()}
          />
        </form>

        <InterviewerList 
          interviewers={props.interviewers} 
          value={interviewer} 
          setInterviewer={setInterviewer}
        />
          </section>
          <section className="appointment__card-right">
            <section className="appointment__actions">

              <Button danger onClick={cancel}>Cancel</Button>
              <Button confirm onClick={props.onSave}>Save</Button>

            </section>
          </section>
    </main>
  );
}

// interviwers won't display horizontally
// They are not being highlighted when selected
// onSubmit default not being prevented