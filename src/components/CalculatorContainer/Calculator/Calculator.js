import React from "react";
import styles from "./Calculator.module.css"

const Calculator = (props) => {
  const {
    resulCalculation,
    previousNum,
    currentNum,
    operationChoose,
    appendNumber,
    clearAll,
    deleteSign,
    operation
  } = props;

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td className={styles.upperRow} colspan="4">
            {previousNum} {operation} {currentNum}
          </td>
        </tr>
        <tr>
          <td>
            <button className={styles.suqareButton} onClick={() => appendNumber("1")}>
              1
            </button>
          </td>
          <td>
            <button
              className={styles.suqareButton}
              onClick={() => appendNumber("2")}
            >
              2
            </button>
          </td>
          <td>
            <button
              className={styles.suqareButton}
              onClick={() => appendNumber("3")}
            >
              3
            </button>
          </td>
          <td>
            <button
              className={styles.suqareButton}
              onClick={() => {
                operationChoose("+");
              }}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              className={styles.suqareButton}
              onClick={() => appendNumber("4")}
            >
              4
            </button>
          </td>
          <td>
            <button
              className={styles.suqareButton}
              onClick={() => appendNumber("5")}
            >
              5
            </button>
          </td>
          <td>
            <button
              className={styles.suqareButton}
              onClick={() => appendNumber("6")}
            >
              6
            </button>
          </td>
          <td>
            <button
              className={styles.suqareButton}
              onClick={() => operationChoose(`-`)}
            >
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              className={styles.suqareButton}
              onClick={() => appendNumber("7")}
            >
              7
            </button>
          </td>
          <td>
            <button
              className={styles.suqareButton}
              onClick={() => appendNumber("8")}
            >
              8
            </button>
          </td>
          <td>
            <button
              className={styles.suqareButton}
              onClick={() => appendNumber("9")}
            >
              9
            </button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => operationChoose(`*`)}>
              *
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button className={styles.suqareButton} onClick={() => appendNumber("0")}>
              0
            </button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => appendNumber(`.`)}>
              .
            </button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => deleteSign()}>
              Del
            </button>
          </td>
          <td>
            <button className={styles.suqareButton} onClick={() => operationChoose(`/`)}>
              /
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button className={styles.rectangleButton} onClick={() => clearAll()}>
              C
            </button>
          </td>
          <td colspan="2">
            <button className={styles.rectangleButton} onClick={() => resulCalculation()}>
              =
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Calculator;