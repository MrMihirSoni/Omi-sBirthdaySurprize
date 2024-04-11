import React, { useContext } from "react";
import { CountContext } from "../contexts/CounterContext";
import prank from "../assets/Pranked.png"

const Fifth = () => {
  const { count, setCount } = useContext(CountContext);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="pages">
      <img src={prank} alt="" />
      <p>Kidding &#128540; ...</p>
      <button className="nextButton" onClick={handleClick}>
        Next &#128540;
      </button>
    </div>
  );
};

export default Fifth;
