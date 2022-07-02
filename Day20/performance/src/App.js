import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  const mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [array, setArray] = useState(mainArray);

  const changeNumber = (number) => {
    setNumber(number);
  };

  //---------------------
  // useCallback();
  //---------------------
  const memoizeCallback = useCallback((number) => 
    changeNumber(number), []);

  //---------------------
  // useMemo()
  //---------------------
  const findMax = () => {
    console.log("I'm computation...");
    return Math.max(...array);
  };

// eslint-disable-next-line
  const memoizeValue = useMemo(() => findMax(), [array]);

  const updatedArray = () => {
    setArray([-10, 55, 72, 12, -4]);
  };

  return (
    <div className="App">
      <Child number={number} changeNumber={memoizeCallback} />
      <p>
        Increment {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </p>
      {/* <p>
      Random Number {number}
      <button onClick={() => setNumber(Math.random())}>Random#</button>
      </p> */}

      <p>Max Number = {memoizeValue}</p>
      <button onClick={updatedArray}>Updated Array</button>
    </div>
  );
}

export default App;
