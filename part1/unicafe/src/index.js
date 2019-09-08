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

const Statistic = props => {
  const { category, value } = props;
  return (
    <React.Fragment>
      <td>{category}</td>
      <td>{value}</td>
    </React.Fragment>
  );
};

// Display stats in stats section
const Statistics = ({ allData, good, neutral, bad, average, positive }) => {
  if (allData === 0) {
    return (
      <React.Fragment>
        <p>No feedback given.</p>
      </React.Fragment>
    );
  }
  return (
    <table>
      <tbody>
        <tr>
          <Statistic category="good" value={good}></Statistic>
        </tr>
        <tr>
          <Statistic category="neutral" value={neutral}></Statistic>
        </tr>
        <tr>
          <Statistic category="bad" value={bad}></Statistic>
        </tr>
        <tr>
          <Statistic category="total" value={allData}></Statistic>
        </tr>
        <tr>
          <Statistic category="average" value={average}></Statistic>
        </tr>
        <tr>
          <Statistic category="positive" value={positive}></Statistic>
        </tr>
      </tbody>
    </table>
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
      <h2>Stats</h2>
      <Statistics
        allData={allData}
        good={good}
        neutral={neutral}
        bad={bad}
        positive={positive}
        average={average}
      ></Statistics>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
