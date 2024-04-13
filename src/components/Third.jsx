import React, { useContext, useEffect } from "react";
import excited from "../assets/Excited.png";
import { CountContext } from "../contexts/CounterContext";

const Third = () => {
  const { count, setCount } = useContext(CountContext);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = "Today is!!";
  });
  return (
    <div className="pages">
      <img src={excited} alt="" />
      <p>Yes! Today is...</p>
      <button className="nextButton" onClick={handleClick}>
        Next!!!
      </button>
    </div>
  );
};

export default Third;
