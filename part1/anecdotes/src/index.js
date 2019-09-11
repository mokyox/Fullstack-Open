import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

//Button for next anecdote

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = props => {
  const [selected, setSelected] = useState(anecdotes[0]);

  //Event listener for selecting next anecdote

  const setNextAnecdote = () => {
    //Use setSelected to modify state (selected) and return a new anecdote on click
    return setSelected(anecdotes[Math.floor(Math.random() * anecdotes.length)]);
  };

  return (
    <React.Fragment>
      <h1>Anecdotes</h1>
      <p>{selected}</p>
      <Button onClick={setNextAnecdote} text="next anecdote"></Button>
    </React.Fragment>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
