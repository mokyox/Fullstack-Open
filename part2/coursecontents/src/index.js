import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Course = ({ course }) => {
  return (
    <React.Fragment>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </React.Fragment>
  );
};

const Header = ({ name }) => {
  return (
    <React.Fragment>
      <h1>{name}</h1>
    </React.Fragment>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <React.Fragment>
      <p>
        {name} {exercises}
      </p>
    </React.Fragment>
  );
};

const Content = ({ parts }) => {
  return (
    //Iterate over course array and display a part for each part
    <React.Fragment>
      {parts.map(part => {
        return <Part name={part.name} exercises={part.exercises} key={part.id}></Part>;
      })}
    </React.Fragment>
  );
};

const Total = ({ parts }) => {
  //2.3 calculate sum of exercises with reduce
  //Include initial value for reduce to show that result is a number
  const total = parts.reduce((sum, { exercises }) => sum + exercises, 0);
  return (
    <React.Fragment>
      <h4>Total of {total} exercises</h4>
    </React.Fragment>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  };

  return (
    <React.Fragment>
      <Course course={course}></Course>
    </React.Fragment>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
