import React, { useState } from 'react'
import Calculator from './Calculator'
import styles from "./CalculatorContainer.module.css";

const CalculatorContainer = () => {
  const [previousNum, setPreviousNum] = useState("");
  const [currentNum, setcurrentNum] = useState("");
  const [operation, setOperation] = useState()

  const appendNumber = (number) => {
    if (number === "." && currentNum.includes(".")) return
    setcurrentNum(`${currentNum}${number}`);
  }

  const operationChoose = (sign) => {
    if (currentNum === "") return
    if (previousNum !== "") {
      resulCalculation()
    }
      switch (sign) {
        case "+":
          setOperation("+");
          break;
        case "-":
          setOperation("-");
          break;
        case "/":
          setOperation("/");
          break;
        case "*":
          setOperation("*");
          break;
        default:
          return;
      }
    setPreviousNum(currentNum)
    setcurrentNum("")
  }

  const clearAll = () => {
    setPreviousNum("")
    setcurrentNum("")
    setOperation()
  }

  const resulCalculation = () => {
    if (isNaN(previousNum) || isNaN(currentNum)) return
    const num1 = +previousNum;
    const num2 = +currentNum;
    switch (operation) {
      case "+":
        setcurrentNum(num1 + num2);
        break;
      case "-":
        setcurrentNum(num1 - num2);
        break;
      case "/":
        setcurrentNum(num1 / num2);
        break;
      case "*":
        setcurrentNum(num1 * num2);
        break;
      default:
        return;
    }
    setPreviousNum("")
    setOperation()
  };

  const deleteSign = () => {
    if (currentNum.length > 0) {
      setcurrentNum(currentNum.slice(0, currentNum.length - 1));
    }
  }

  return (
    <section className={styles.layout}>
      <Calculator
        resulCalculation={resulCalculation}
        previousNum={previousNum}
        currentNum={currentNum}
        operationChoose={operationChoose}
        deleteSign={deleteSign}
        appendNumber={appendNumber}
        clearAll={clearAll}
        operation={operation}
      />
    </section>
  );
};

export default CalculatorContainer;
