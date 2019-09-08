import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./practice";

const OldApp = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  const Header = props => {
    return (
      <React.Fragment>
        <h1>{props.course.name}</h1>
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
        {console.log(props)}
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
      </React.Fragment>
    );
  };

  const Total = props => {
    return (
      <React.Fragment>
        <p>
          Number of exercises{" "}
          {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
        </p>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Header course={course}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </React.Fragment>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
