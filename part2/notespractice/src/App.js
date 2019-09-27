import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then(response => {
      console.log("promise fulfilled.");
      setNotes(response.data);
    });
  }, []);

  console.log("render", notes.length, "notes");
  console.log(notes);

  return <h1>Hello World</h1>;
};

export default App;
