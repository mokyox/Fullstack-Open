import React from "react";
import axios from "axios";

const Persons = ({ persons, searchPersons }) => {
  /* Map over array of objects and display name */
  const personsFilter =
    searchPersons === ""
      ? persons
      : persons.filter(
          person =>
            person.name.toLowerCase().indexOf(searchPersons.toLowerCase()) !==
            -1
        );

  console.log(personsFilter);

  //Remove a user on Click from the backend
  //Use the axios.delete() method onClick
  // Remove the user depending on the id of the person.id

  const removeUser = (id, person) => {
    if (window.confirm(`Delete ${person}?`)) {
      axios.delete(`http://localhost:3001/persons/${id}`);
      console.log("Deleted.");
    }
  };

  return (
    <>
      {personsFilter.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
          <button
            onClick={() => {
              removeUser(person.id, person.name);
            }}
          >
            Delete
          </button>
        </p>
      ))}
    </>
  );
};

export default Persons;
