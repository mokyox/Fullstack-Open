import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = event => {
    //Add person on form submission
    event.preventDefault();
    console.log("Form submitted", event.target);
    const personObject = { name: newName };
    //Check if name already exists
    persons.some(person => person.name === newName)
      ? alert(`Sorry, ${newName} already exists.`)
      : setPersons(persons.concat(personObject));
    setNewName("");
  };

  //Log the value of newName every time input value changes
  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* Map over array of objects and display name */}
      {persons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
