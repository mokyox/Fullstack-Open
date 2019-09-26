import React from "react";

const Persons = ({ persons, searchPersons }) => {
  /* Map over array of objects and display name */
  const personsFilter =
    searchPersons === ""
      ? persons
      : persons.filter(
          person => person.name.toLowerCase().indexOf(searchPersons.toLowerCase()) !== -1
        );

  console.log(personsFilter);

  return (
    <>
      {personsFilter.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

export default Persons;
