import React, { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPersons, setSearchPersons] = useState("");

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
  // Set searchbox value on event change
  const handleSearchChange = event => {
    setSearchPersons(event.target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter value={searchPersons} onChange={handleSearchChange}></Filter>
      <h3> Add a new...</h3>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        onNameChange={handleNameChange}
        newNumber={newNumber}
        onNumberChange={handleNumberChange}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={persons} searchPersons={searchPersons}></Persons>
    </>
  );
};

export default App;
