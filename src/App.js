import React, { useState } from "react";
import AppStyle from "./App.module.css";

function App() {
  const [calText, setCalText] = useState("0");
  const onChangeHandler = (e) => {
    setCalText(e.target.value);
  };
  const onClickHandler = (e) => {
    setCalText(calText + e.target.innerText);
  };
  const onClickHandler_1 = (e) => {
    setCalText(0);
  };
  const onClickHandler_2 = (e) => {
    setCalText("");
  };
  const onClickHandler_3 = (e) => {
    if (calText.includes("+")) {
      const arr = calText.split("+");
      setCalText(parseInt(arr[0]) + parseInt(arr[1]));
    } else if (calText.includes("-")) {
      const arr = calText.split("-");
      setCalText(parseInt(arr[0]) - parseInt(arr[1]));
    } else if (calText.includes("*")) {
      const arr = calText.split("*");
      setCalText(parseInt(arr[0]) * parseInt(arr[1]));
    } else if (calText.includes("/")) {
      const arr = calText.split("/");
      setCalText(parseInt(arr[0]) / parseInt(arr[1]));
    } else if (calText.includes("%")) {
      const arr = calText.split("%");
      setCalText(parseInt(arr[0]) % parseInt(arr[1]));
    } else {
      setCalText("Error");
    }
  };

  return (
    <>
      <h1 align="center">Personal Calculator</h1>
      <div className={AppStyle.conatiner}>
        <div className={AppStyle.card}>
          <div className={AppStyle.CalResult}>
            <input
              type="text"
              value={calText}
              onChange={onChangeHandler}
              min="0"
              max={10}
            />
            <hr />
          </div>
          <div className={AppStyle.cal__buttons}>
            <button onClick={onClickHandler}>%</button>
            <button onClick={onClickHandler_1}>CE</button>
            <button onClick={onClickHandler_2}>C</button>
            <button onClick={onClickHandler}>7</button>
            <button onClick={onClickHandler}>8</button>
            <button onClick={onClickHandler}>9</button>
            <button onClick={onClickHandler}>4</button>
            <button onClick={onClickHandler}>5</button>
            <button onClick={onClickHandler}>6</button>
            <button onClick={onClickHandler}>1</button>
            <button onClick={onClickHandler}>2</button>
            <button onClick={onClickHandler}>3</button>
            <button onClick={onClickHandler}>0</button>
            <button onClick={onClickHandler}>/</button>
            <button onClick={onClickHandler}>*</button>
            <button onClick={onClickHandler}>+</button>
            <button onClick={onClickHandler}>-</button>
            <button onClick={onClickHandler_3}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
