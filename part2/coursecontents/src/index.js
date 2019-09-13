import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Course = ({ course }) => {
  return (
    <React.Fragment>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
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

// const Total = props => {
//   return (
//     <React.Fragment>
//       <p>
//         Number of exercises{" "}
//         {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
//       </p>
//     </React.Fragment>
//   );
// };

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
