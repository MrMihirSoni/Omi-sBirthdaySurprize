import React, { useContext, useEffect } from "react";
import { CountContext } from "../contexts/CounterContext";
import prank from "../assets/Pranked.jpg";

const Fifth = () => {
  const { count, setCount } = useContext(CountContext);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = "Kidding";
  }, []);
  return (
    <div className="pages">
      <img src={prank} alt="" style={{ borderRadius: "50%" }} />
      <p>Kidding &#128540; ...</p>
      <button className="nextButton" onClick={handleClick}>
        Next &#128540;
      </button>
    </div>
  );
};

export default Fifth;
