import React, { useState } from "react";
import AppStyle from "../components/Card.module.css";

const Card = () => {
  const [calText, setCalText] = useState("0");
  const onChangeHandler = (e) => {
    setCalText(e.target.value);
  };
  const onClickHandler = (e) => {
    setCalText(calText + e.target.innerText);
  };

  const onClickHandler_3 = (e) => {
    if (calText.includes("+")) {
      const arr = calText.split("+");
      setCalText(Number(arr[0]) + Number(arr[1]));
    } else if (calText.includes("-")) {
      const arr = calText.split("-");
      setCalText(Number(arr[0]) - Number(arr[1]));
    } else if (calText.includes("X")) {
      const arr = calText.split("X");
      setCalText(Number(arr[0]) * Number(arr[1]));
    } else if (calText.includes("÷")) {
      const arr = calText.split("÷");
      setCalText(Number(arr[0]) / Number(arr[1]));
    } else if (calText.includes("%")) {
      const arr = calText.split("%");
      setCalText(Number(arr[0]) % Number(arr[1]));
    } else {
      setCalText(calText);
    }
  };

  return (
    <>
      <div className={AppStyle.shadow}></div>
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
          </div>
          <div className={AppStyle.cal__buttons}>
            <button onClick={onClickHandler}>7</button>
            <button onClick={onClickHandler}>8</button>
            <button onClick={onClickHandler}>9</button>
            <button onClick={onClickHandler}>÷</button>
            <button onClick={onClickHandler}>4</button>
            <button onClick={onClickHandler}>5</button>
            <button onClick={onClickHandler}>6</button>
            <button onClick={onClickHandler}>X</button>
            <button onClick={onClickHandler}>1</button>
            <button onClick={onClickHandler}>2</button>
            <button onClick={onClickHandler}>3</button>
            <button onClick={onClickHandler}>-</button>
            <button onClick={onClickHandler}>0</button>
            <button onClick={onClickHandler}>.</button>
            <button onClick={onClickHandler}>+</button>
            <button onClick={onClickHandler_3}> = </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
