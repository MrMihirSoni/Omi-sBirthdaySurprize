import React, { useContext, useEffect } from "react";
import thinking from "../assets/Thinking.png";
import { CountContext } from "../contexts/CounterContext";

const Second = () => {
  const { count, setCount } = useContext(CountContext);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = "What's Special";
  }, []);
  return (
    <div className="pages">
      <img src={thinking} alt="" />
      <p>What's special about Today?</p>
      <button className="nextButton" onClick={handleClick}>
        Next!
      </button>
    </div>
  );
};

export default Second;
