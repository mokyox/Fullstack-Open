import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState();
  const [showAll, setShowAll] = useState(true);

  //Get all notes
  useEffect(() => {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes);
    });
  }, []);

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  const rows = () =>
    notesToShow.map(note => (
      <Note key={note.id} toggleImportance={() => toggleImportanceOf(note.id)} note={note}></Note>
    ));

  //Event handler which deals with changes to <input>
  const handleNoteChange = event => {
    setNewNote(event.target.value);
  };

  // Add note when form is submitted
  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1
    };

    noteService.create(noteObject).then(returnedNote => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => (note.id !== id ? note : returnedNote)));
      })
      .catch(error => {
        console.log(error);
        alert(`The note "${note.content}" was already deleted from the server`);
        setNotes(notes.filter(n => n.id !== id));
      });
  };

  return (
    <>
      <h1>Notes App</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>Show {showAll ? "important" : "all"}</button>
      </div>
      <ul>{rows()}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default App;
