import React from "react";
import styles from "./Calculator.module.css"

const Calculator = (props) => {
  const {
    setStringOfNumbers,
    stringOfNumbers,
    resulCalculation,
    checkForZero,
    deleteSign
  } = props;

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td className={styles.upperRow} colspan="4">{stringOfNumbers}</td>
        </tr>
        <tr>
          <td>
            <button className={styles.suqareButton} onClick={() => checkForZero("1")}>1</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => checkForZero("2")}>2</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => checkForZero("3")}>3</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => setStringOfNumbers(`${stringOfNumbers}+`)}>
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className={styles.suqareButton} onClick={() => checkForZero("4")}>4</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => checkForZero("5")}>5</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => checkForZero("6")}>6</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => setStringOfNumbers(`${stringOfNumbers}-`)}>
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className={styles.suqareButton} onClick={() => checkForZero("7")}>7</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => checkForZero("8")}>8</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => checkForZero("9")}>9</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => setStringOfNumbers(`${stringOfNumbers}*`)}>
              *
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className={styles.suqareButton} onClick={() => checkForZero("0")}>0</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => setStringOfNumbers(`${stringOfNumbers}.`)}>
              .
            </button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => deleteSign()}>Del</button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => setStringOfNumbers(`${stringOfNumbers}/`)}>
              /
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button className={styles.rectangleButton} onClick={() => setStringOfNumbers(`0`)}>C</button>
          </td>
          <td colspan="2">
            <button className={styles.rectangleButton} onClick={() => resulCalculation()}>=</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Calculator;