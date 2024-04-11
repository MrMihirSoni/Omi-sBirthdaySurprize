import { useContext, useEffect, useState } from "react";
import "./App.css";

import Main from "./components/Main";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Forth from "./components/Forth";
import Fifth from "./components/Fifth";
import { CountContext } from "./contexts/CounterContext";

function App() {
  const { count, setCount } = useContext(CountContext);

  return (
    <>{
      count == 1?
      <First />:
      count == 2?
      <Second />:
      count == 3?
      <Third />:
      count == 4?
      <Forth />:
      count == 5?
      <Fifth />:
      <Main />
    }
    </>
  );
}

export default App;
