import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };

  const Header = props => {
    return (
      <React.Fragment>
        <h1>{props.course}</h1>
      </React.Fragment>
    );
  };

  const Part = props => {
    return (
      <React.Fragment>
        <p>
          {props.name} {props.exercises}
        </p>
      </React.Fragment>
    );
  };

  const Content = props => {
    return (
      <React.Fragment>
        <Part name={props.part1.name} exercises={props.part1.exercises}></Part>
        <Part name={props.part2.name} exercises={props.part2.exercises}></Part>
        <Part name={props.part3.name} exercises={props.part3.exercises}></Part>
      </React.Fragment>
    );
  };

  const Total = props => {
    return (
      <React.Fragment>
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Header course={course}></Header>
      <Content part1={part1} part2={part2} part3={part3}></Content>
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      ></Total>
    </React.Fragment>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
