import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Title = () => <h1>Feedback App</h1>;

//Button for each category

const Button = props => {
  const { onClick, value, category } = props;
  return (
    <React.Fragment>
      {value}
      <button onClick={onClick}>{category}</button>
    </React.Fragment>
  );
};

//Display stats in stats section
const Statistics = ({ good, neutral, bad, average, positive }) => {
  if (!good && !neutral && !bad) {
    return (
      <React.Fragment>
        <p>No feedback given.</p>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <h2> Stats</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {good + neutral + bad}</p>
      <p>average: {average}</p>
      <p>positive: {positive}%</p>
    </React.Fragment>
  );
};

const App = () => {
  //Set click of a button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Increment each button by one event handler

  const incrementByOneGood = props => {
    setGood(good + 1);
  };

  const incrementByOneNeutral = props => {
    return setNeutral(neutral + 1);
  };
  const incrementByOneBad = props => {
    return setBad(bad + 1);
  };

  //Get average data
  const allData = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / allData;
  const positive = (good / allData) * 100;
  console.log(average);

  return (
    <React.Fragment>
      <Title></Title>
      <Button category="good" value={good} onClick={incrementByOneGood}></Button>
      <Button category="neutral" value={neutral} onClick={incrementByOneNeutral}></Button>
      <Button category="bad" value={bad} onClick={incrementByOneBad}></Button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        positive={positive}
      ></Statistics>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
