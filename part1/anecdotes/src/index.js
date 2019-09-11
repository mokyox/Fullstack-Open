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

const Anecdote = ({ votes, anecdotes, selected }) => {
  return (
    <React.Fragment>
      <h1>Anecdote of the day</h1>
      <p>{selected}</p>
      <p>Has {votes[anecdotes.indexOf(selected)]} votes</p>
    </React.Fragment>
  );
};

const TopAnecdote = ({ votes, anecdotes }) => {
  //Iterate over votes array and return index that has largest number of votes
  const topVotedAnecdoteScore = Math.max(...votes);
  const topVotedAnecdoteIndex = votes.indexOf(topVotedAnecdoteScore);
  return (
    <React.Fragment>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[topVotedAnecdoteIndex]}</p>
      <p>Has {topVotedAnecdoteScore} votes.</p>
    </React.Fragment>
  );
};

const App = props => {
  const [selected, setSelected] = useState(anecdotes[0]);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  console.log(votes);

  //Event listener for updating vote
  const updateVotes = () => {
    //Copy previous score, update element of array that was voted on
    const score = [...votes];
    score[anecdotes.indexOf(selected)] += 1;
    return setVotes(score);
  };

  //Event listener for selecting next anecdote
  const getNextAnecdote = () => {
    //Use setSelected to modify state (selected) and return a new anecdote on click
    return setSelected(anecdotes[Math.floor(Math.random() * anecdotes.length)]);
  };

  return (
    <React.Fragment>
      <Anecdote votes={votes} anecdotes={anecdotes} selected={selected}></Anecdote>
      <Button onClick={updateVotes} text="vote"></Button>
      <Button onClick={getNextAnecdote} text="next anecdote"></Button>
      <TopAnecdote votes={votes} anecdotes={anecdotes}></TopAnecdote>
    </React.Fragment>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
