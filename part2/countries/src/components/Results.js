import React from "react";

const Results = ({ filteredCountries }) => {
  if (filteredCountries.length > 20) {
    return <p>Too many matches, please specify another filter.</p>;
  }
  return (
    <>
      <ul>
        {filteredCountries.map(country => (
          <React.Fragment key={country.name}>
            <li>{country.name}</li>
            <button
            // onClick={() => {
            //   console.log("clicked", country.name);
            // }}
            // onClick={() => this.props.clicked(country.name)}
            >
              Show
            </button>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};
export default Results;
