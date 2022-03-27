import { useState } from "react";

import "./App.css";

export default function App() {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [endResult, setEndResult] = useState(0);
  const [operator, setOperator] = useState("");

  function calculator() {
    const op = operator;
    const one = numberOne;
    const two = numberTwo;

    if (op === "+") {
      setEndResult(Number(one) + Number(two));
      setNumberOne(Number(one) + Number(two));
      setNumberTwo("");
    } else if (op === "-") {
      setEndResult(Number(one) - Number(two));
      setNumberOne(Number(one) - Number(two));
      setNumberTwo("");
    } else if (op === "/") {
      setEndResult(
        (Number(one) / Number(two))
          .toFixed(3)
          .replace(/\.?0+$/, "")
      );
      setNumberOne(
        (Number(one) / Number(two))
          .toFixed(3)
          .replace(/\.?0+$/, "")
      );
      setNumberTwo("");
    } else if (op === "x") {
      setEndResult(
        (Number(one) * Number(two))
          .toFixed(3)
          .replace(/\.?0+$/, "")
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      );
      setNumberOne(
        (Number(one) * Number(two))
          .toFixed(3)
          .replace(/\.?0+$/, "")
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      );
      setNumberTwo("");
    }
  }

  function setOperador(ope) {
    setOperator(ope);

    setEndResult(numberOne + " " + ope);
  }

  function setNumber(number) {
    if (operator === "") {
      if (numberOne === "") {
        setNumberOne(number);
        setEndResult(number);
      } else {
        setNumberOne(prevState => prevState + number);
        setEndResult(prevState => prevState + number);
      }
    } else {
      if (numberTwo === "") {
        setNumberTwo(number);
        setEndResult(numberOne + " " + operator + " " + number);
      } else {
        setNumberTwo(prevState => prevState + number);
        setEndResult(numberOne + " " + operator + " " + numberTwo + number);
      }
    }
  }

  function del() {
    setNumberOne("");
    setNumberTwo("");
    setOperator("");
    setEndResult(0);
  }

  return (
    <div className="full">
      <div className="calculator">
        <div className="result">
          <span>
            {endResult}
          </span>
        </div>
        <div className="operators">
          <button id="plus" onClick={() => setOperador("+")}>
            +
          </button>
          <button id="minus" onClick={() => setOperador("-")}>
            -
          </button>
          <button id="divide" onClick={() => setOperador("/")}>
            /
          </button>
          <button id="divide" onClick={() => setOperador("x")}>
            x
          </button>
          <button id="equals" onClick={calculator}>
            =
          </button>
          <button id="delete" onClick={del}>
            DEL
          </button>
        </div>
        <div className="numbers">
          <button onClick={() => setNumber("1")}>1</button>
          <button onClick={() => setNumber("2")}>2</button>
          <button onClick={() => setNumber("3")}>3</button>
          <button onClick={() => setNumber("4")}>4</button>
          <button onClick={() => setNumber("5")}>5</button>
          <button onClick={() => setNumber("6")}>6</button>
          <button onClick={() => setNumber("7")}>7</button>
          <button onClick={() => setNumber("8")}>8</button>
          <button onClick={() => setNumber("9")}>9</button>
          <button id="number0" onClick={() => setNumber("0")}>
            0
          </button>
          <button id="comma" onClick={() => setNumber(".")}>
            .
          </button>
        </div>
      </div>
    </div>
  );
}
