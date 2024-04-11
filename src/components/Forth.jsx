import React, { useContext } from "react";
import { CountContext } from "../contexts/CounterContext";
import civil from "../assets/CivilServiceDay.jpg";

const Forth = () => {
  const { count, setCount } = useContext(CountContext);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="pages">
      <img src={civil} alt="" />
      <p>National Civil Service Day!!!</p>
      <button className="nextButton" onClick={handleClick}>Next !!!</button>
    </div>
  );
};

export default Forth;
