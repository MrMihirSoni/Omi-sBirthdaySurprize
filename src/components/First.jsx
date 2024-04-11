import React, { useContext } from "react";
import calender from "../assets/Calender.png";
import { CountContext } from "../contexts/CounterContext";

const First = () => {
  const { count, setCount } = useContext(CountContext);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="pages">
      <img src={calender} alt="" />
      <p>So Today is 21st April...</p>
      <button className="nextButton" onClick={handleClick}>Next</button>
    </div>
  );
};

export default First;
