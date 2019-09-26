import React, { useState } from "react";
import "./App.css";
import Note from "./components/Note";

const App = props => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  const rows = () => notesToShow.map(note => <Note key={note.id} note={note}></Note>);

  //Event handler which deals with changes to <input>

  const handleNoteChange = event => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  // Add note when form is submitted
  const addNote = event => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  return (
    <React.Fragment>
      <h1>Note</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>Show {showAll ? "important" : "all"}</button>
      </div>
      <ul>{rows()}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type="submit">save</button>
      </form>
    </React.Fragment>
  );
};

export default App;
