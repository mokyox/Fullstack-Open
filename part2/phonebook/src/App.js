import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = event => {
    //Add person on form submission
    event.preventDefault();
    console.log("Form submitted", event.target);
    const personObject = { name: newName, number: newNumber };
    //Check if name already exists
    persons.some(person => person.name === newName)
      ? alert(`Sorry, ${newName} already exists.`)
      : setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  //Log the value of newName every time input value changes
  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  //Set number value on event change
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} type="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* Map over array of objects and display name */}
      {persons.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
