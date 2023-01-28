import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalculate = (Value) => {
    if (
      (ops.includes(Value) && calc === "") ||
      (ops.includes(Value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + Value);

    setResult(eval(calc + Value.toString()));
  };

  const calculate = () => {
    setCalc(eval(calc.toString()));
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalculate(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : "( )"} {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalculate("/")}>/</button>
          <button onClick={() => updateCalculate("*")}>*</button>
          <button onClick={() => updateCalculate("+")}>+</button>
          <button onClick={() => updateCalculate("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalculate("0")}>0</button>
          <button onClick={() => updateCalculate(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
