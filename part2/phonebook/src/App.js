import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebook from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPersons, setSearchPersons] = useState("");

  //Get persons from server
  useEffect(() => {
    phonebook.getAll().then(initialData => {
      console.log("promise resolved");
      setPersons(initialData);
    });
  }, []);

  const addPerson = event => {
    //Add person on form submission
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };

    //Check if user already exists
    if (
      persons.some(
        person => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      //Confirm if we want to replace the old number with a put request

      if (
        window.confirm(
          `${personObject.name} is already added to the phone, replace the old number with a new one?`
        )
      ) {
        const existingContact = persons.find(
          person => person.name === personObject.name
        );
        const updatedContact = {
          ...existingContact,
          number: personObject.number
        };
        phonebook
          .update(updatedContact, updatedContact.id)
          .then(updatedContact => {
            setPersons(
              persons.map(person =>
                person.id !== updatedContact.id ? person : updatedContact
              )
            );
          })
          .catch(error => {
            alert(
              `Contact ${existingContact.name}  was already removed from the server`
            );
            setPersons(
              persons.filter(person => person.id !== updatedContact.id)
            );
          });
      }
    } else {
      phonebook.create(personObject).then(returnedContact => {
        setPersons(persons.concat(returnedContact));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deleteUser = (id, person) => {
    if (window.confirm(`Delete ${person}?`)) {
      phonebook.removeUser(id);
      setPersons(persons.filter(person => person.id !== id));
    }
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
      <Persons
        persons={persons}
        searchPersons={searchPersons}
        deleteUser={deleteUser}
      ></Persons>
    </>
  );
};

export default App;
