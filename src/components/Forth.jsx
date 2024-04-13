import React, { useContext, useEffect } from "react";
import { CountContext } from "../contexts/CounterContext";
import civil from "../assets/CivilServiceDay.jpg";

const Forth = () => {
  const { count, setCount } = useContext(CountContext);
  useEffect(() => {
    document.title = "National Civil Service Day!";
    setTimeout(() => {
      setCount(count + 1);
    }, 5000);
  }, []);
  return (
    <div className="pages">
      <img src={civil} alt="" />
      <p>National Civil Service Day!!!</p>
    </div>
  );
};

export default Forth;
