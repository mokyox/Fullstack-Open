import React, { useState } from "react";

//Part 1.d Complex State

const History = props => {
  if (props.allClicks.length === 0) {
    return <div>The app is used by pressing buttons.</div>;
  }
  return <div>Button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = props => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  console.log(allClicks, allClicks.length);

  const handleLeftClick = () => {
    setAll(allClicks.concat("Left"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("Right"));
    setRight(right + 1);
  };

  const hello = who => {
    return () => {
      console.log("hello", who);
    };
  };

  return (
    <React.Fragment>
      <div>
        {left}
        <Button onClick={handleLeftClick} text="left"></Button>
        <Button onClick={handleRightClick} text="right"></Button>
        <Button onClick={hello("mate")} text="hello"></Button>
        <Button onClick={hello("friend")} text="hello"></Button>
        <Button onClick={hello("old chap")} text="hello"></Button>
        {right}
        <History allClicks={allClicks}></History>
      </div>
    </React.Fragment>
  );
};

export default App;
