import React, { useState } from "react";
import "./Calculator.css";
import { create, all } from "mathjs";

const Calculator = () => {
  const [number, setNumber] = useState(0);

  function inputNumber(e) {
    if (number === 0) {
      setNumber(e.target.value);
    } else {
      setNumber(number + e.target.value);
    }
  }

  function comma() {
    setNumber(number + ",");
  }

  function resetNumbers(e) {
    setNumber(0);
  }

  function porcentage() {
    setNumber(number / 100);
  }

  function positiveOrNegative() {
    if (number > 0) {
      setNumber(-number);
    } else {
      setNumber(Math.abs(number));
    }
  }

  function sum() {
    setNumber(number + "+");
  }

  function multiply() {
    setNumber(number + "*");
  }

  function divide() {
    setNumber(number + "/");
  }

  function subtraction() {
    setNumber(number + "-");
  }
  const math = create(all);
  function displayResult() {
    const result = math.evaluate(number);
    setNumber(result);
  }
  return (
    <div className="container">
      <h1 className="display-result">{number}</h1>
      <div className="wrapper">
        <button onClick={resetNumbers}>AC</button>
        <button onClick={positiveOrNegative}>+/-</button>
        <button value={"%"} onClick={porcentage}>
          %
        </button>
        <button className="btn" onClick={divide}>
          /
        </button>
        <button value={7} onClick={inputNumber}>
          7{" "}
        </button>
        <button value={8} onClick={inputNumber}>
          8
        </button>
        <button value={9} onClick={inputNumber}>
          9
        </button>
        <button className="btn" onClick={multiply}>
          X
        </button>
        <button value={4} onClick={inputNumber}>
          4
        </button>
        <button value={5} onClick={inputNumber}>
          5
        </button>
        <button value={6} onClick={inputNumber}>
          6
        </button>
        <button className="btn" onClick={subtraction}>
          -
        </button>
        <button value={1} onClick={inputNumber}>
          1
        </button>
        <button value={2} onClick={inputNumber}>
          2
        </button>
        <button value={3} onClick={inputNumber}>
          3
        </button>
        <button className="btn" onClick={sum}>
          +
        </button>
        <button value={0} onClick={inputNumber}>
          0
        </button>
        <button onClick={comma}>,</button>
        <button onClick={displayResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
