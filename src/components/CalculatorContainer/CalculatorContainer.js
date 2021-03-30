import React, { useState } from 'react'
import Calculator from './Calculator'
import styles from "./CalculatorContainer.module.css";

const CalculatorContainer = () => {
  const [stringOfNumbers, setStringOfNumbers] = useState("0");

  const deleteSign = () => {
    setStringOfNumbers(stringOfNumbers.slice(0, stringOfNumbers.length - 1));
  };

  const checkForZero = (number) => {
    if (stringOfNumbers[0] === "0") {
      setStringOfNumbers(number);
      return;
    }
    setStringOfNumbers(`${stringOfNumbers}${number}`);
  };

  const resulCalculation = () => {
    const arrayOfNumbers = stringOfNumbers.split("");
    let indexOfFunction = 0;

    for (let i = 0; i < arrayOfNumbers.length; i += 1) {
      let number = arrayOfNumbers[i];
      if (isNaN(+number) && number !== ".") {
        indexOfFunction = i;
        break;
      }
    }

    const num1 = +stringOfNumbers.slice(0, indexOfFunction);
    const num2 = +stringOfNumbers.slice(indexOfFunction + 1);
    const sign = arrayOfNumbers[indexOfFunction];

    switch (sign) {
      case "+":
        setStringOfNumbers(num1 + num2);
        break;
      case "-":
        setStringOfNumbers(num1 - num2);
        break;
      case "/":
        if(num2 === 0) {
          alert('do not devied by zero')
          break
        }
        setStringOfNumbers(num1 / num2);
        break;
      case "*":
        setStringOfNumbers(num1 * num2);
        break;
      default:
        return stringOfNumbers;
    }
  };

  return (
    <section className={styles.layout}>
      <Calculator
        stringOfNumbers={stringOfNumbers}
        setStringOfNumbers={setStringOfNumbers}
        resulCalculation={resulCalculation}
        checkForZero={checkForZero}
        deleteSign={deleteSign}
      />
    </section>
  );
};

export default CalculatorContainer;
